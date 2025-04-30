"use client"



import { useState, useEffect } from "react"
import { FaWallet, FaMoneyBillWave, FaHistory, FaArrowUp, FaArrowDown, FaDownload, FaCalendarAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

const SellerWallet = () => {
  const [loading, setLoading] = useState(true)
  const [walletData, setWalletData] = useState(null)
  const [transactions, setTransactions] = useState([])
  const [showWithdrawModal, setShowWithdrawModal] = useState(false)
  const [withdrawAmount, setWithdrawAmount] = useState("")
  const [withdrawMethod, setWithdrawMethod] = useState("bank")
  const [dateRange, setDateRange] = useState("all")
  const [transactionType, setTransactionType] = useState("all")
  const [processingWithdraw, setProcessingWithdraw] = useState(false)

  useEffect(() => {
    // Simulate API call to fetch wallet data
    setTimeout(() => {
      const mockWalletData = {
        balance: 2580.45,
        pendingBalance: 450.75,
        totalEarnings: 12450.8,
        withdrawnAmount: 9420.6,
        lastWithdrawal: "2023-06-10",
        lastWithdrawalAmount: 500.0,
      }

      const mockTransactions = [
        {
          id: "TRX-001",
          type: "order_payment",
          amount: 42.5,
          status: "completed",
          date: "2023-06-15T14:30:00",
          description: "Payment for Order #ORD-1234",
          orderId: "ORD-1234",
        },
        {
          id: "TRX-002",
          type: "withdrawal",
          amount: -500.0,
          status: "completed",
          date: "2023-06-10T10:15:00",
          description: "Withdrawal to Bank Account ****1234",
          reference: "WD-5678",
        },
        {
          id: "TRX-003",
          type: "order_payment",
          amount: 28.75,
          status: "completed",
          date: "2023-06-08T18:45:00",
          description: "Payment for Order #ORD-1233",
          orderId: "ORD-1233",
        },
        {
          id: "TRX-004",
          type: "adjustment",
          amount: -15.0,
          status: "completed",
          date: "2023-06-05T09:20:00",
          description: "Refund for Order #ORD-1230",
          orderId: "ORD-1230",
        },
        {
          id: "TRX-005",
          type: "order_payment",
          amount: 35.2,
          status: "completed",
          date: "2023-06-03T12:10:00",
          description: "Payment for Order #ORD-1232",
          orderId: "ORD-1232",
        },
        {
          id: "TRX-006",
          type: "withdrawal",
          amount: -300.0,
          status: "completed",
          date: "2023-05-28T15:30:00",
          description: "Withdrawal to Bank Account ****1234",
          reference: "WD-5677",
        },
        {
          id: "TRX-007",
          type: "order_payment",
          amount: 19.99,
          status: "completed",
          date: "2023-05-25T20:15:00",
          description: "Payment for Order #ORD-1231",
          orderId: "ORD-1231",
        },
        {
          id: "TRX-008",
          type: "adjustment",
          amount: 10.0,
          status: "completed",
          date: "2023-05-20T11:45:00",
          description: "Bonus for high ratings",
          reference: "BONUS-123",
        },
      ]

      setWalletData(mockWalletData)
      setTransactions(mockTransactions)
      setLoading(false)
    }, 1000)
  }, [])

  const handleWithdrawSubmit = (e) => {
    e.preventDefault()

    // Validate withdrawal amount
    const amount = Number.parseFloat(withdrawAmount)
    if (isNaN(amount) || amount <= 0) {
      toast.error("Please enter a valid amount")
      return
    }

    if (amount > walletData.balance) {
      toast.error("Withdrawal amount cannot exceed your available balance")
      return
    }

    if (amount < 50) {
      toast.error("Minimum withdrawal amount is $50")
      return
    }

    setProcessingWithdraw(true)

    // Simulate API call for withdrawal
    setTimeout(() => {
      // Add the withdrawal to transactions
      const newTransaction = {
        id: `TRX-${Math.floor(Math.random() * 10000)}`,
        type: "withdrawal",
        amount: -amount,
        status: "pending",
        date: new Date().toISOString(),
        description: `Withdrawal to ${withdrawMethod === "bank" ? "Bank Account" : "PayPal"}`,
        reference: `WD-${Math.floor(Math.random() * 10000)}`,
      }

      setTransactions([newTransaction, ...transactions])

      // Update wallet data
      setWalletData({
        ...walletData,
        balance: walletData.balance - amount,
        pendingBalance: walletData.pendingBalance + amount,
        lastWithdrawal: new Date().toISOString().split("T")[0],
        lastWithdrawalAmount: amount,
      })

      setProcessingWithdraw(false)
      setShowWithdrawModal(false)
      setWithdrawAmount("")
      toast.success("Withdrawal request submitted successfully")
    }, 1500)
  }

  const getTransactionTypeIcon = (type) => {
    switch (type) {
      case "order_payment":
        return <FaMoneyBillWave className="text-green-500" />
      case "withdrawal":
        return <FaArrowUp className="text-red-500" />
      case "adjustment":
        return type.amount > 0 ? <FaArrowDown className="text-green-500" /> : <FaArrowUp className="text-red-500" />
      default:
        return <FaHistory className="text-gray-500" />
    }
  }

  const getTransactionTypeLabel = (type) => {
    switch (type) {
      case "order_payment":
        return "Order Payment"
      case "withdrawal":
        return "Withdrawal"
      case "adjustment":
        return "Adjustment"
      default:
        return "Transaction"
    }
  }

  const filteredTransactions = transactions.filter((transaction) => {
    // Filter by transaction type
    if (transactionType !== "all" && transaction.type !== transactionType) {
      return false
    }

    // Filter by date range
    if (dateRange !== "all") {
      const transactionDate = new Date(transaction.date)
      const today = new Date()

      switch (dateRange) {
        case "today":
          return transactionDate.toDateString() === today.toDateString()
        case "week":
          const weekAgo = new Date()
          weekAgo.setDate(today.getDate() - 7)
          return transactionDate >= weekAgo
        case "month":
          const monthAgo = new Date()
          monthAgo.setMonth(today.getMonth() - 1)
          return transactionDate >= monthAgo
        case "year":
          const yearAgo = new Date()
          yearAgo.setFullYear(today.getFullYear() - 1)
          return transactionDate >= yearAgo
        default:
          return true
      }
    }

    return true
  })

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Wallet & Transactions</h1>

      {/* Wallet Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-orange-100 rounded-full">
              <FaWallet className="h-6 w-6 text-orange-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Available Balance</p>
              <h3 className="text-2xl font-bold text-gray-800">${walletData.balance.toFixed(2)}</h3>
            </div>
          </div>
          <button
            onClick={() => setShowWithdrawModal(true)}
            className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md transition-colors"
          >
            Withdraw Funds
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-full">
              <FaMoneyBillWave className="h-6 w-6 text-yellow-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending Balance</p>
              <h3 className="text-2xl font-bold text-gray-800">${walletData.pendingBalance.toFixed(2)}</h3>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Pending balance will be available after processing (typically 1-3 business days)
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-full">
              <FaHistory className="h-6 w-6 text-green-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Earnings</p>
              <h3 className="text-2xl font-bold text-gray-800">${walletData.totalEarnings.toFixed(2)}</h3>
            </div>
          </div>
          <div className="mt-4 flex justify-between text-sm text-gray-600">
            <span>Withdrawn: ${walletData.withdrawnAmount.toFixed(2)}</span>
            <span>Last: ${walletData.lastWithdrawalAmount.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Transaction History</h2>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-4">
            <div className="flex space-x-2 mb-4 md:mb-0">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaCalendarAlt className="text-gray-400" />
                </div>
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="all">All Time</option>
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="year">This Year</option>
                </select>
              </div>
              <select
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="all">All Types</option>
                <option value="order_payment">Order Payments</option>
                <option value="withdrawal">Withdrawals</option>
                <option value="adjustment">Adjustments</option>
              </select>
            </div>
            <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              <FaDownload className="mr-2" /> Export
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Transaction
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center">
                          {getTransactionTypeIcon(transaction.type)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{transaction.id}</div>
                          <div className="text-sm text-gray-500">{getTransactionTypeLabel(transaction.type)}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(transaction.date).toLocaleDateString()}{" "}
                      {new Date(transaction.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {transaction.description}
                      {transaction.orderId && (
                        <Link
                          to={`/seller/orders/${transaction.orderId}`}
                          className="ml-2 text-orange-500 hover:text-orange-700"
                        >
                          View Order
                        </Link>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <span className={transaction.amount > 0 ? "text-green-600" : "text-red-600"}>
                        {transaction.amount > 0 ? "+" : ""}
                        {transaction.amount.toFixed(2)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          transaction.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : transaction.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
                    No transactions found with the selected filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Withdraw Modal */}
      {showWithdrawModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Withdraw Funds</h2>

            <form onSubmit={handleWithdrawSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Available Balance</label>
                <div className="text-xl font-bold text-green-600">${walletData.balance.toFixed(2)}</div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Withdrawal Method</label>
                <select
                  value={withdrawMethod}
                  onChange={(e) => setWithdrawMethod(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="bank">Bank Transfer</option>
                  <option value="paypal">PayPal</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount to Withdraw</label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500">$</span>
                  <input
                    type="text"
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                    className="w-full p-2 pl-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="0.00"
                    required
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Minimum withdrawal amount: $50</p>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowWithdrawModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={processingWithdraw}
                  className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 disabled:opacity-50"
                >
                  {processingWithdraw ? (
                    <>
                      <span className="inline-block animate-spin mr-2">⟳</span>
                      Processing...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default SellerWallet
