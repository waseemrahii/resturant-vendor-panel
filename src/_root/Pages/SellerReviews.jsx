"use client"

import { useState } from "react"
import { FaStar, FaRegStar, FaReply } from "react-icons/fa"
import { BiSortAlt2 } from "react-icons/bi"

const SellerReviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      customerName: "John Doe",
      customerImage: "/placeholder.svg?height=50&width=50",
      rating: 4,
      date: "2023-10-15",
      comment: "The food was delicious and arrived hot. The packaging was also very good. Will order again!",
      reply: "",
      orderItems: ["Chicken Burger", "French Fries", "Coke"],
      isReplied: false,
    },
    {
      id: 2,
      customerName: "Jane Smith",
      customerImage: "/placeholder.svg?height=50&width=50",
      rating: 5,
      date: "2023-10-12",
      comment: "Absolutely loved the pizza! The crust was perfect and toppings were generous. Delivery was also quick.",
      reply: "Thank you for your kind words! We're glad you enjoyed our pizza. Looking forward to serving you again!",
      orderItems: ["Pepperoni Pizza", "Garlic Bread", "Sprite"],
      isReplied: true,
    },
    {
      id: 3,
      customerName: "Mike Johnson",
      customerImage: "/placeholder.svg?height=50&width=50",
      rating: 3,
      date: "2023-10-10",
      comment: "Food was good but delivery took longer than expected. The items were a bit cold when they arrived.",
      reply: "",
      orderItems: ["Vegetable Biryani", "Naan", "Raita"],
      isReplied: false,
    },
    {
      id: 4,
      customerName: "Sarah Williams",
      customerImage: "/placeholder.svg?height=50&width=50",
      rating: 5,
      date: "2023-10-08",
      comment: "Best pasta I've had in a long time! The sauce was rich and flavorful. Highly recommend!",
      reply: "Thank you Sarah! We take pride in our pasta recipes. Hope to see you again soon!",
      orderItems: ["Fettuccine Alfredo", "Garlic Bread", "Tiramisu"],
      isReplied: true,
    },
    {
      id: 5,
      customerName: "David Brown",
      customerImage: "/placeholder.svg?height=50&width=50",
      rating: 2,
      date: "2023-10-05",
      comment: "The burger was overcooked and dry. Fries were good though.",
      reply: "",
      orderItems: ["Beef Burger", "Onion Rings", "Milkshake"],
      isReplied: false,
    },
  ])

  const [filter, setFilter] = useState("all")
  const [sort, setSort] = useState("newest")
  const [replyText, setReplyText] = useState("")
  const [replyingTo, setReplyingTo] = useState(null)

  const filteredReviews = reviews.filter((review) => {
    if (filter === "all") return true
    if (filter === "positive") return review.rating >= 4
    if (filter === "negative") return review.rating <= 2
    if (filter === "medium") return review.rating === 3
    if (filter === "replied") return review.isReplied
    if (filter === "unreplied") return !review.isReplied
    return true
  })

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sort === "newest") {
      return new Date(b.date) - new Date(a.date)
    } else if (sort === "oldest") {
      return new Date(a.date) - new Date(b.date)
    } else if (sort === "highest") {
      return b.rating - a.rating
    } else if (sort === "lowest") {
      return a.rating - b.rating
    }
    return 0
  })

  const handleReply = (id) => {
    if (replyText.trim() === "") return

    setReviews(
      reviews.map((review) => {
        if (review.id === id) {
          return {
            ...review,
            reply: replyText,
            isReplied: true,
          }
        }
        return review
      }),
    )

    setReplyText("")
    setReplyingTo(null)
  }

  const calculateAverageRating = () => {
    const total = reviews.reduce((sum, review) => sum + review.rating, 0)
    return (total / reviews.length).toFixed(1)
  }

  const getRatingCount = (rating) => {
    return reviews.filter((review) => review.rating === rating).length
  }

  const getRatingPercentage = (rating) => {
    return (getRatingCount(rating) / reviews.length) * 100
  }

  const renderStars = (rating) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? <FaStar key={i} className="text-yellow-400" /> : <FaRegStar key={i} className="text-gray-300" />,
      )
    }
    return stars
  }

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800">Customer Reviews</h2>
        <p className="text-gray-600 mt-1">Manage and respond to customer feedback</p>
      </div>

      <div className="p-6">
        {/* Rating Summary */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="flex flex-col items-center mr-8 mb-4 md:mb-0">
              <div className="text-4xl font-bold text-gray-800">{calculateAverageRating()}</div>
              <div className="flex mt-2">{renderStars(Math.round(calculateAverageRating()))}</div>
              <div className="text-sm text-gray-500 mt-1">{reviews.length} reviews</div>
            </div>

            <div className="flex-1 w-full">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center mb-2">
                  <div className="w-12 text-sm text-gray-600 flex">
                    {rating} <FaStar className="text-yellow-400 ml-1" />
                  </div>
                  <div className="flex-1 mx-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ width: `${getRatingPercentage(rating)}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-12 text-sm text-gray-600 text-right">{getRatingCount(rating)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filters and Sorting */}
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1 text-sm rounded-full ${filter === "all" ? "bg-orange-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              All Reviews
            </button>
            <button
              onClick={() => setFilter("positive")}
              className={`px-3 py-1 text-sm rounded-full ${filter === "positive" ? "bg-orange-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              Positive (4-5)
            </button>
            <button
              onClick={() => setFilter("medium")}
              className={`px-3 py-1 text-sm rounded-full ${filter === "medium" ? "bg-orange-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              Medium (3)
            </button>
            <button
              onClick={() => setFilter("negative")}
              className={`px-3 py-1 text-sm rounded-full ${filter === "negative" ? "bg-orange-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              Negative (1-2)
            </button>
            <button
              onClick={() => setFilter("unreplied")}
              className={`px-3 py-1 text-sm rounded-full ${filter === "unreplied" ? "bg-orange-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              Unreplied
            </button>
          </div>

          <div className="flex items-center">
            <BiSortAlt2 className="text-gray-500 mr-1" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-sm border-none bg-transparent text-gray-700 focus:outline-none focus:ring-0"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="highest">Highest Rating</option>
              <option value="lowest">Lowest Rating</option>
            </select>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {sortedReviews.length > 0 ? (
            sortedReviews.map((review) => (
              <div key={review.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start">
                  <img
                    src={review.customerImage || "/placeholder.svg"}
                    alt={review.customerName}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-800">{review.customerName}</h3>
                      <div className="text-sm text-gray-500">
                        {new Date(review.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                    </div>

                    <div className="flex items-center mb-2">
                      <div className="flex mr-2">{renderStars(review.rating)}</div>
                      <div className="text-xs text-gray-500">Order: {review.orderItems.join(", ")}</div>
                    </div>

                    <p className="text-gray-700 mb-3">{review.comment}</p>

                    {review.isReplied && (
                      <div className="bg-gray-50 p-3 rounded-md mt-2 mb-3">
                        <div className="flex items-center mb-2">
                          <FaReply className="text-gray-400 mr-2" />
                          <span className="text-sm font-medium text-gray-700">Your Reply</span>
                        </div>
                        <p className="text-sm text-gray-600">{review.reply}</p>
                      </div>
                    )}

                    {!review.isReplied && (
                      <div>
                        {replyingTo === review.id ? (
                          <div className="mt-3">
                            <textarea
                              value={replyText}
                              onChange={(e) => setReplyText(e.target.value)}
                              placeholder="Write your reply..."
                              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                              rows="3"
                            ></textarea>
                            <div className="flex justify-end mt-2 space-x-2">
                              <button
                                onClick={() => {
                                  setReplyingTo(null)
                                  setReplyText("")
                                }}
                                className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800"
                              >
                                Cancel
                              </button>
                              <button
                                onClick={() => handleReply(review.id)}
                                className="px-3 py-1 text-sm bg-orange-600 text-white rounded-md hover:bg-orange-700"
                              >
                                Submit Reply
                              </button>
                            </div>
                          </div>
                        ) : (
                          <button
                            onClick={() => setReplyingTo(review.id)}
                            className="flex items-center text-sm text-orange-600 hover:text-orange-700 mt-2"
                          >
                            <FaReply className="mr-1" /> Reply to this review
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No reviews match your current filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SellerReviews
