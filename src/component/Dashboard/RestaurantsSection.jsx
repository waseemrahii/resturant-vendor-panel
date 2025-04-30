"use client"

import React, { useState } from "react"
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb"
import { MdModeEdit } from "react-icons/md"
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io"
import DataTableInfo from "./DashboardCards/DataTableInfo"
import TableHeader from "./DashboardCards/TableHeader"

const RestaurantsSection = () => {
  const restaurants = [
    {
      id: 1,
      image:
        "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2F360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48_1720531151776.jpg?alt=media&token=64fb41b8-4b72-4f91-9939-45e7bc7678b4",
      name: "The Pizza Place",
      review: 4,
      description: "Best pizza in town with fresh ingredients and unique flavors.",
    },
    {
      id: 2,
      image:
        "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2F360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48_1720531151776.jpg?alt=media&token=64fb41b8-4b72-4f91-9939-45e7bc7678b4",
      name: "The Eatery",
      review: 3,
      description: "Cozy place with delicious homemade meals and friendly service.",
    },
    {
      id: 3,
      image:
        "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2F360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48_1720531151776.jpg?alt=media&token=64fb41b8-4b72-4f91-9939-45e7bc7678b4",
      name: "Kolkata Biryani Hub",
      review: 5,
      description: "Authentic Kolkata biryani with rich flavors and aromatic spices.",
    },
    {
      id: 4,
      image:
        "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2F360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48_1720531151776.jpg?alt=media&token=64fb41b8-4b72-4f91-9939-45e7bc7678b4",
      name: "Pasta House",
      review: 4,
      description: "Delicious pasta with a variety of sauces and fresh ingredients.",
    },
    {
      id: 5,
      image:
        "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2F360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48_1720531151776.jpg?alt=media&token=64fb41b8-4b72-4f91-9939-45e7bc7678b4",
      name: "Burger Joint",
      review: 5,
      description: "Best burgers in town with a variety of toppings and sides.",
    },
    {
      id: 6,
      image:
        "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fvit-ch-Oxb84ENcFfU-unsplash_1720531641020.jpg?alt=media&token=b7894cb7-6f43-4c3e-8409-c8d7bb12fb87",
      name: "Sushi Place",
      review: 4,
      description: "Fresh and delicious sushi with a variety of options.",
    },
    {
      id: 7,
      image:
        "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2F360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48_1720531151776.jpg?alt=media&token=64fb41b8-4b72-4f91-9939-45e7bc7678b4",
      name: "Taco Stand",
      review: 4,
      description: "Authentic tacos with fresh ingredients and delicious flavors.",
    },
    {
      id: 8,
      image:
        "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2F360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48_1720531151776.jpg?alt=media&token=64fb41b8-4b72-4f91-9939-45e7bc7678b4",
      name: "Indian Delights",
      review: 5,
      description: "Delicious and authentic Indian cuisine with a variety of dishes.",
    },
    {
      id: 9,
      image:
        "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2F360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48_1720531151776.jpg?alt=media&token=64fb41b8-4b72-4f91-9939-45e7bc7678b4",
      name: "Chinese Express",
      review: 3,
      description: "Quick and tasty Chinese food with a variety of options.",
    },
    {
      id: 10,
      image:
        "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2F360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48_1720531151776.jpg?alt=media&token=64fb41b8-4b72-4f91-9939-45e7bc7678b4",
      name: "French Bakery",
      review: 5,
      description: "Freshly baked pastries and bread with authentic French flavors.",
    },
  ]

  const [visibleRestaurants, setVisibleRestaurants] = useState(restaurants.slice(0, 5))
  const [startIndex, setStartIndex] = useState(0)
  const [showAll, setShowAll] = useState(false)
  const [visibleDetails, setVisibleDetails] = useState({})

  const showMoreRestaurants = () => {
    let newStartIndex = startIndex + 5
    if (newStartIndex >= restaurants.length) {
      newStartIndex = 0
    }
    const newEndIndex = newStartIndex + 5
    const newVisibleRestaurants = restaurants.slice(newStartIndex, newEndIndex)
    setVisibleRestaurants(newVisibleRestaurants)
    setStartIndex(newStartIndex)
    setShowAll(!showAll)
  }

  const toggleDetails = (id) => {
    setVisibleDetails((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="relative bg-primary-500 border rounded-lg border-primary-300">
      <TableHeader title="Restaurants" path="/restaurants" />

      <table className=" w-full ">
        <thead>
          <tr className="bg-primary-500 text-white">
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">
              <button onClick={showMoreRestaurants} className="flex items-center gap-2">
                Restaurant
                <div>
                  <TbTriangleFilled
                    className={`transition-colors text-[.5rem] ${showAll ? "text-gray-300" : "text-gray-500"}`}
                  />
                  <TbTriangleInvertedFilled
                    className={`transition-colors text-[.5rem] ${showAll ? "text-gray-500" : "text-gray-300"}`}
                  />
                </div>
              </button>
            </th>
            <th className="px-4 py-2 hidden md:table-cell lg:table-cell">Review</th>

            <th className="px-4 py-2 hidden md:table-cell lg:table-cell">Actions</th>
          </tr>
        </thead>
        <tbody>
          {visibleRestaurants.map((restaurant) => (
            <React.Fragment key={restaurant.id}>
              <tr className="border-b bg-primary-10 text-primary-500">
                <td className="px-4 py-2 flex items-center">
                  <button
                    onClick={() => toggleDetails(restaurant.id)}
                    className="px-1 py-1 bg-primary-10 lg:hidden md:hidden rounded-full"
                  >
                    {visibleDetails[restaurant.id] ? (
                      <IoIosRemoveCircle className="text-primary-500" />
                    ) : (
                      <IoIosAddCircle className="text-primary-500" />
                    )}
                  </button>
                  <img src={restaurant.image} alt={restaurant.name} className="w-12 h-12 object-cover rounded" />
                </td>
                <td className="px-2 py-2 text-primary-500 hover:text-black text-sm">{restaurant.name}</td>
                <td
                  className={`px-4 py-2 hidden md:table-cell lg:table-cell ${
                    visibleDetails[restaurant.id] ? "md:table-cell" : "hidden"
                  } md:items-center md:justify-center lg:items-center lg:justify-center`}
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} className={`${index < restaurant.review ? "text-primary-500" : "text-gray-300"}`}>
                      ★
                    </span>
                  ))}
                </td>
                {/* <td
                    className={`hidden md:table-cell lg:table-cell ${
                      visibleDetails[restaurant.id] ? "md:table-cell" : "hidden"
                    } md:visible lg:visible px-4 py-2 text-center`}
                  >
                    {restaurant.description}
                  </td> */}
                <td
                  className={`hidden md:table-cell lg:table-cell ${
                    visibleDetails[restaurant.id] ? "md:table-cell" : "hidden"
                  } md:visible lg:visible px-4 py-2 text-center`}
                >
                  <button>
                    <MdModeEdit className="p-1 bg-primary-500 text-[1.6rem] rounded-full text-white" />
                  </button>
                </td>
              </tr>
              {visibleDetails[restaurant.id] && (
                <tr className="lg:hidden md:hidden sm:flex gap-4 border-b border-gray-300">
                  <td colSpan="4" className="px-4 py-2">
                    {/* <p className="text-sm">{restaurant.description}</p> */}
                    <div className="flex flex-col  gap-5 font-bold pb-5 ">
                      <span className="text-center">Review</span>
                      <div className="text-xl text-start">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <span
                            key={index}
                            className={`${index < restaurant.review ? "text-primary-500" : "text-gray-300"}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-center items-center gap-5 font-bold pb-5 ">
                      <span>Action</span>
                      <button>
                        <MdModeEdit className="p-1 bg-green-500 text-[1.6rem] rounded-full text-white" />
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <div className="absolute bottom-0 w-full ">
        <DataTableInfo entries={10} totalentries={restaurants.length} />
      </div>
      {/* <DataTableInfo entries={5} totalentries={restaurants.length} /> */}
    </div>
  )
}

export default RestaurantsSection
