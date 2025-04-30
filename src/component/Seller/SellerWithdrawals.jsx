"use client"

import { useState, useEffect } from "react"
import { FaMoneyBillWave, FaSearch, FaFilter, FaCalendarAlt, FaDownload, FaEye } from "react-icons/fa"
import { toast } from "react-toastify"

const SellerWithdrawals = () => {
  const [loading, setLoading] = useState(true)
  const [withdrawals, setWithdrawals] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [dateRange, setDateRange] = useState("all")
  const [showWithdrawModal, setShowWithdrawModal] = useState(false)
  const [withdrawAmount, setWithdrawAmount] = useState("")
  const [withdrawMethod, setWithdrawMethod] = useState("bank")
  const [bankDetails, setBankDetails] = useState({
    accountName: "",
    accountNumber: "",
    bankName: "",
    swiftCode: "",
  })
  const [paypalEmail, setPaypalEmail] = useState("")
  const [processingWithdraw, setProcessingWithdraw] = useState(false)
  const [walletBalance, setWalletBalance] = useState(0)

  useEffect(() => {
    // Simulate API call to fetch withdrawals
    setTimeout(() => {
      const mockWithdrawals = [
        {
          id: "WD-1001",
          amount: 500.0,
          method: "Bank Transfer",
          status: "completed",
          date: "2023-06-10T10:15:00",
          processedDate: "2023-06-12T14:30:00",
          reference: "REF123456",
          accountDetails: "Bank of America ****1234",
        },
        {
          id: "WD-1002",
          amount: 300.0,
          method: "Bank Transfer",
          status: "completed",
          date: "2023-05-28T15:30:00",
          processedDate: "2023-05-30T11:45:00",
          reference: "REF123455",
          accountDetails: "Bank of America ****1234",
        },
        {
          id: "WD-1003",
          amount: 750.0,
          method: "PayPal",
          status: "pending",
          date: "2023-06-15T09:20:00",
          processedDate: null,
          reference: null,
          accountDetails: "seller@example.com",
        },
        {
          id: "WD-1004",
          amount: 200.0,
          method: "Bank Transfer",
          status: "rejected",
          date: "2023-05-15T14:10:00",
          processedDate: "2023-05-16T10:30:00",
          reference: null,
          accountDetails: "Bank of America ****1234",
          rejectionReason: "Insufficient funds in wallet",
        },
        {
          id: "WD-1005",
          amount: 450.0,
          method: "PayPal",
          status: "completed",
          date: "2023-04-20T11:25:00",
          processedDate: "2023-04-22T09:15:00",
          reference: "REF123454",
          accountDetails: "seller@example.com",
        },
      ]

      setWithdrawals(mockWithdrawals)
      setWalletBalance(2580.45)
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

    if (amount > walletBalance) {
      toast.error("Withdrawal amount cannot exceed your available balance")
      return
    }

    if (amount < 50) {
      toast.error("Minimum withdrawal amount is $50")
      return
    }

    // Validate payment method details
    if (withdrawMethod === "bank") {
      if (!bankDetails.accountName || !bankDetails.accountNumber || !bankDetails.bankName) {
        toast.error("Please fill in all bank details")
        return
      }
    } else if (withdrawMethod === "paypal") {
      if (!paypalEmail) {
        toast.error("Please enter your PayPal email")
        return
      }
    }

    setProcessingWithdraw(true)

    // Simulate API call for withdrawal
    setTimeout(() => {
      // Create new withdrawal request
      const newWithdrawal = {
        id: `WD-${1006 + withdrawals.length}`,
        amount: amount,
        method: withdrawMethod === "bank" ? "Bank Transfer" : "PayPal",
        status: "pending",
        date: new Date().toISOString(),
        processedDate: null,
        reference: null,
        accountDetails:
          withdrawMethod === "bank"
            ? `${bankDetails.bankName} ****${bankDetails.accountNumber.slice(-4)}`
            : paypalEmail,
      }

      setWithdrawals([newWithdrawal, ...withdrawals])
      setWalletBalance((prev) => prev - amount)

      setProcessingWithdraw(false)
      setShowWithdrawModal(false)
      setWithdrawAmount("")
      toast.success("Withdrawal request submitted successfully")
    }, 1500)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredWithdrawals = withdrawals.filter((withdrawal) => {
    // Filter by status
    if (statusFilter !== "all" && withdrawal.status !== statusFilter) {
      return false
    }

    // Filter by search term
    if (searchTerm && !withdrawal.id.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false
    }

    // Filter by date range
    if (dateRange !== "all") {
      const withdrawalDate = new Date(withdrawal.date)
      const today = new Date()

      switch (dateRange) {
        case "today":
          return withdrawalDate.toDateString() === today.toDateString()
        case "week":
          const weekAgo = new Date()
          weekAgo.setDate(today.getDate() - 7)
          return withdrawalDate >= weekAgo
        case "month":
          const monthAgo = new Date()
          monthAgo.setMonth(today.getMonth() - 1)
          return withdrawalDate >= monthAgo
        case "year":
          const yearAgo = new Date()
          yearAgo.setFullYear(today.getFullYear() - 1)
          return withdrawalDate >= yearAgo
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
      <h1 className="text-2xl font-bold text-gray-800">Withdrawal Requests</h1>

      {/* Summary Card */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="p-3 bg-orange-100 rounded-full">
              <FaMoneyBillWave className="h-6 w-6 text-orange-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Available Balance</p>
              <h3 className="text-2xl font-bold text-gray-800">${walletBalance.toFixed(2)}</h3>
            </div>
          </div>
          <button
            onClick={() => setShowWithdrawModal(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md transition-colors"
          >
            Request Withdrawal
          </button>
        </div>
      </div>

      {/* Withdrawals List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Withdrawal History</h2>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-4">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 mb-4 md:mb-0">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaFilter className="text-gray-400" />
                </div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
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
                  ID
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
                  Amount
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
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredWithdrawals.length > 0 ? (
                filteredWithdrawals.map((withdrawal) => (
                  <tr key={withdrawal.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{withdrawal.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{new Date(withdrawal.date).toLocaleDateString()}</div>
                      <div className="text-xs text-gray-500">
                        {new Date(withdrawal.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">${withdrawal.amount.toFixed(2)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{withdrawal.method}</div>
                      <div className="text-xs text-gray-500">{withdrawal.accountDetails}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                          withdrawal.status,
                        )}`}
                      >
                        {withdrawal.status.charAt(0).toUpperCase() + withdrawal.status.slice(1)}
                      </span>
                      {withdrawal.status === "rejected" && (
                        <div className="text-xs text-red-500 mt-1">{withdrawal.rejectionReason}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-orange-600 hover:text-orange-900 mr-3">
                        <FaEye className="inline mr-1" /> Details
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                    No withdrawal requests found with the selected filters.
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
            <h2 className="text-xl font-bold mb-4">Request Withdrawal</h2>

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

              {withdrawMethod === "bank" ? (
                <div className="space-y-3 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Account Holder Name</label>
                    <input
                      type="text"
                      value={bankDetails.accountName}
                      onChange={(e) => setBankDetails({ ...bankDetails, accountName: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
                    <input
                      type="text"
                      value={bankDetails.bankName}
                      onChange={(e) => setBankDetails({ ...bankDetails, bankName: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
                    <input
                      type="text"
                      value={bankDetails.accountNumber}
                      onChange={(e) => setBankDetails({ ...bankDetails, accountNumber: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">SWIFT/BIC Code (Optional)</label>
                    <input
                      type="text"
                      value={bankDetails.swiftCode}
                      onChange={(e) => setBankDetails({ ...bankDetails, swiftCode: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
              ) : (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">PayPal Email</label>
                  <input
                    type="email"
                    value={paypalEmail}
                    onChange={(e) => setPaypalEmail(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
              )}

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

export default SellerWithdrawals
