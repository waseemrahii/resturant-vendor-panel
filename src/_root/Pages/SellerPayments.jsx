"use client"

import { useState, useEffect } from "react"
import { FaSearch, FaCalendarAlt, FaWallet, FaMoneyBillWave, FaFileInvoiceDollar, FaDownload } from "react-icons/fa"
import { toast } from "react-toastify"

const SellerPayments = () => {
  const [loading, setLoading] = useState(true)
  const [payments, setPayments] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [dateRange, setDateRange] = useState("all")
  const [walletBalance, setWalletBalance] = useState(0)
  const [pendingAmount, setPendingAmount] = useState(0)
  const [totalEarnings, setTotalEarnings] = useState(0)
  const [showWithdrawModal, setShowWithdrawModal] = useState(false)
  const [withdrawAmount, setWithdrawAmount] = useState("")
  const [withdrawNote, setWithdrawNote] = useState("")
  const [withdrawMethod, setWithdrawMethod] = useState("bank")
  const [processingWithdraw, setProcessingWithdraw] = useState(false)

  useEffect(() => {
    // Simulate API call to fetch payments data
    setTimeout(() => {
      const mockPayments = [
        {
          id: "PAY-001",
          orderId: "ORD-045",
          amount: 42.99,
          status: "Completed",
          date: "2023-06-15",
          method: "Credit Card",
        },
        { id: "PAY-002", orderId: "ORD-046", amount: 28.5, status: "Completed", date: "2023-06-14", method: "PayPal" },
        {
          id: "PAY-003",
          orderId: "ORD-047",
          amount: 35.75,
          status: "Pending",
          date: "2023-06-14",
          method: "Credit Card",
        },
        {
          id: "PAY-004",
          orderId: "ORD-048",
          amount: 19.99,
          status: "Completed",
          date: "2023-06-13",
          method: "Debit Card",
        },
        {
          id: "PAY-005",
          orderId: "ORD-049",
          amount: 56.25,
          status: "Completed",
          date: "2023-06-12",
          method: "Credit Card",
        },
        { id: "PAY-006", orderId: "ORD-050", amount: 32.8, status: "Failed", date: "2023-06-12", method: "PayPal" },
        {
          id: "PAY-007",
          orderId: "ORD-051",
          amount: 45.6,
          status: "Completed",
          date: "2023-06-11",
          method: "Credit Card",
        },
        {
          id: "PAY-008",
          orderId: "ORD-052",
          amount: 27.99,
          status: "Pending",
          date: "2023-06-10",
          method: "Debit Card",
        },
        {
          id: "PAY-009",
          orderId: "ORD-053",
          amount: 38.45,
          status: "Completed",
          date: "2023-06-09",
          method: "Credit Card",
        },
        { id: "PAY-010", orderId: "ORD-054", amount: 22.75, status: "Completed", date: "2023-06-08", method: "PayPal" },
      ]

      setPayments(mockPayments)

      // Calculate summary values
      const total = mockPayments.reduce((sum, payment) => sum + payment.amount, 0)
      const pending = mockPayments
        .filter((payment) => payment.status === "Pending")
        .reduce((sum, payment) => sum + payment.amount, 0)

      setTotalEarnings(total)
      setPendingAmount(pending)
      setWalletBalance(total - pending - 50) // Assuming $50 was already withdrawn

      setLoading(false)
    }, 1000)
  }, [])

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleDateRangeChange = (e) => {
    setDateRange(e.target.value)
  }

  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.orderId.toLowerCase().includes(searchTerm.toLowerCase())

    // Date filtering would be implemented here in a real app
    // For now, we'll just return the search matches
    return matchesSearch
  })

  const handleWithdrawSubmit = (e) => {
    e.preventDefault()

    // Validate withdrawal amount
    const amount = Number.parseFloat(withdrawAmount)
    if (isNaN(amount) || amount <= 0) {
      toast.error("Please enter a valid amount")
      return
    }

    if (amount > walletBalance) {
      toast.error("Withdrawal amount cannot exceed your wallet balance")
      return
    }

    setProcessingWithdraw(true)

    // Simulate API call for withdrawal request
    setTimeout(() => {
      setProcessingWithdraw(false)
      setShowWithdrawModal(false)
      setWithdrawAmount("")
      setWithdrawNote("")

      toast.success("Withdrawal request submitted successfully")

      // In a real app, you would update the UI after a successful API call
      // For now, we'll just simulate it
      setPendingAmount(pendingAmount + amount)
      setWalletBalance(walletBalance - amount)
    }, 1500)
  }

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "failed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-6">Payments & Earnings</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <div className="rounded-full bg-green-100 p-3 mr-4">
            <FaWallet className="text-green-600 text-xl" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Wallet Balance</p>
            <p className="text-xl font-bold">${walletBalance.toFixed(2)}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <div className="rounded-full bg-yellow-100 p-3 mr-4">
            <FaMoneyBillWave className="text-yellow-600 text-xl" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Pending Amount</p>
            <p className="text-xl font-bold">${pendingAmount.toFixed(2)}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <div className="rounded-full bg-blue-100 p-3 mr-4">
            <FaFileInvoiceDollar className="text-blue-600 text-xl" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Earnings</p>
            <p className="text-xl font-bold">${totalEarnings.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* Withdraw Button */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold">Available for Withdrawal</h2>
            <p className="text-gray-600">
              You can withdraw your earnings to your bank account or other payment methods.
            </p>
          </div>
          <button
            onClick={() => setShowWithdrawModal(true)}
            className="mt-4 md:mt-0 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md"
          >
            Withdraw Funds
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by payment ID or order ID..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaCalendarAlt className="text-gray-400" />
            </div>
            <select
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={dateRange}
              onChange={handleDateRangeChange}
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
          </div>
          <div>
            <button className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              <FaDownload className="mr-2" /> Export
            </button>
          </div>
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Payment ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Order ID
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
                  Method
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
              {filteredPayments.length > 0 ? (
                filteredPayments.map((payment) => (
                  <tr key={payment.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{payment.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{payment.orderId}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{payment.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{payment.method}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">${payment.amount.toFixed(2)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(payment.status)}`}
                      >
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                    No payments found
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
                <div className="text-xl font-bold text-green-600">${walletBalance.toFixed(2)}</div>
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
                  <option value="stripe">Stripe</option>
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
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Note (Optional)</label>
                <textarea
                  value={withdrawNote}
                  onChange={(e) => setWithdrawNote(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Add a note to your withdrawal request"
                  rows="3"
                ></textarea>
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

export default SellerPayments
