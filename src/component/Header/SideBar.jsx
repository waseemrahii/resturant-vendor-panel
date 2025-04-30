
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaCaretRight, FaCaretDown } from "react-icons/fa"
import PropTypes from "prop-types"
import Popper from "@mui/material/Popper"
import Fade from "@mui/material/Fade"
import Paper from "@mui/material/Paper"
import {
  FaHome,
  FaUtensils,
  FaShoppingCart,
  FaMoneyBillWave,
  FaPercent,
  FaStore,
  FaCog,
  FaImage,
  FaChair,
  FaWallet,
  FaFileInvoiceDollar,
  FaHandHoldingUsd,
} from "react-icons/fa"

const SideBar = ({ isSidebarOpen }) => {
  const [hoveredItem, setHoveredItem] = useState(null)
  const [clickedItem, setClickedItem] = useState(null)
  const [anchorEl, setAnchorEl] = useState(null)
  const location = useLocation()

  // Define sidebar items for seller panel
  const sidebarItems = [
    {
      title: "Dashboard",
      path: "/",
      icon: <FaHome />,
    },
    {
      title: "Menu Management",
      path: "/foods",
      icon: <FaUtensils />,
    },
    {
      title: "Orders",
      path: "/orders",
      icon: <FaShoppingCart />,
    },
    {
      title: "Finance",
      path: "#",
      icon: <FaMoneyBillWave />,
      subSections: [
        {
          title: "Payments",
          path: "/payments",
          icon: <FaFileInvoiceDollar />,
        },
        {
          title: "Wallet",
          path: "/wallet",
          icon: <FaWallet />,
        },
        {
          title: "Payouts",
          path: "/payouts",
          icon: <FaHandHoldingUsd />,
        },
      ],
    },
    {
      title: "Marketing",
      path: "#",
      icon: <FaPercent />,
      subSections: [
        {
          title: "Coupons",
          path: "/coupons",
          icon: <FaPercent />,
        },
        {
          title: "Promotions",
          path: "/promos",
          icon: <FaPercent />,
        },
      ],
    },
    {
      title: "Restaurant Profile",
      path: "#",
      icon: <FaStore />,
      subSections: [
        {
          title: "Basic Info",
          path: "/profile",
          icon: <FaStore />,
        },
        {
          title: "Gallery",
          path: "/gallery",
          icon: <FaImage />,
        },
        {
          title: "Dine-in Features",
          path: "/dine-in",
          icon: <FaChair />,
        },
      ],
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ]

  const handleMouseEnter = (index, event) => {
    if (!isSidebarOpen) {
      setHoveredItem(index)
      setAnchorEl(event.currentTarget)
    }
  }

  const handleMouseLeave = () => {
    if (!isSidebarOpen) {
      setHoveredItem(null)
      setAnchorEl(null)
    }
  }

  const handleClick = (index, event) => {
    if (isSidebarOpen) {
      // Check if the section has subSections
      if (sidebarItems[index].subSections) {
        // If it has subSections, prevent default navigation
        event.preventDefault()
        setClickedItem((prevClickedItem) => (prevClickedItem === index ? null : index))
      }
    }
  }

  // Check if a path is active
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/"
    }
    return location.pathname.startsWith(path)
  }

  return (
    <div className="h-full">
      <div className="sticky bg-white w-full h-12">
        <div className="sticky top-0">
          {isSidebarOpen ? (
            <img src="/image-1.png" alt="Logo" className="h-12 mx-auto p-1" />
          ) : (
            <img src="/image-1.png" alt="Logo" className="h-12 mx-auto p-1" />
          )}
        </div>
      </div>

      <div className="w-full flex flex-col justify-center bg-primary-500 text-white">
        {sidebarItems.map((section, index) => {
          const content = (
            <div className="fixed -top-6 w-48 flex flex-col min-h-12 pl-4 py-3 text-white bg-primary-600 justify-start">
              <Link to={section.path} className="-ml-4">
                {section.title}
              </Link>
              {section.subSections &&
                section.subSections.map((subItem, subIndex) => (
                  <Link
                    to={subItem.path}
                    key={subIndex}
                    className={`flex items-center gap-2 ml-2 hover:text-primary-200 ${
                      isActive(subItem.path) ? "text-primary-200 font-semibold" : ""
                    }`}
                  >
                    {subItem.icon}
                    {subItem.title}
                  </Link>
                ))}
            </div>
          )

          const isItemActive =
            isActive(section.path) || (section.subSections && section.subSections.some((sub) => isActive(sub.path)))

          return (
            <div key={index} onMouseEnter={(event) => handleMouseEnter(index, event)} onMouseLeave={handleMouseLeave}>
              <Popper
                open={!isSidebarOpen && hoveredItem === index}
                anchorEl={anchorEl}
                placement="right"
                transition
                sx={{ zIndex: 1200 }}
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={700}>
                    <Paper>{content}</Paper>
                  </Fade>
                )}
              </Popper>

              <div
                className={`relative flex border-b items-center bg-primary-500  hover:bg-primary-600 lg:w-full w-64 ${
                  isItemActive ? "bg-primary-600 border-l-4 border-primary-300" : ""
                }`}
              >
                {section.subSections ? (
                  <div className="w-full">
                    <button
                      onClick={(e) => handleClick(index, e)}
                      className={`relative flex items-center justify-center h-12 w-full transition-all duration-300 ease-in-out ${
                        isItemActive ? "text-primary-200" : "hover:text-primary-200"
                      }`}
                    >
                      <div className="w-12 flex justify-center items-center text-xl">{section.icon}</div>
                      <div
                        className={`flex items-center transition-transform duration-300 ease-in-out ${
                          isSidebarOpen ? "translate-x-0" : "-translate-x-10"
                        }`}
                      >
                        {isSidebarOpen && (
                          <div
                            className={`h-12 ml-3 flex items-center whitespace-nowrap w-36 text-white p-2 ${
                              isItemActive ? "font-semibold" : ""
                            }`}
                          >
                            {section.title}
                          </div>
                        )}
                        {isSidebarOpen && section.subSections && (
                          <div className="text-white ml-auto mr-4">
                            {clickedItem === index ? <FaCaretDown /> : <FaCaretRight />}
                          </div>
                        )}
                      </div>
                    </button>
                  </div>
                ) : (
                  <Link to={section.path} className="w-full">
                    <button
                      className={`relative flex items-center justify-center h-12 w-full transition-all duration-300 ease-in-out ${
                        isItemActive ? "text-primary-200" : "hover:text-primary-200"
                      }`}
                    >
                      <div className="w-12 flex justify-center items-center text-xl">{section.icon}</div>
                      <div
                        className={`flex items-center transition-transform duration-300 ease-in-out ${
                          isSidebarOpen ? "translate-x-0" : "-translate-x-10"
                        }`}
                      >
                        {isSidebarOpen && (
                          <div
                            className={`h-12 ml-3 flex items-center whitespace-nowrap w-36 text-white p-2 ${
                              isItemActive ? "font-semibold" : ""
                            }`}
                          >
                            {section.title}
                          </div>
                        )}
                      </div>
                    </button>
                  </Link>
                )}
              </div>

              {section.subSections && (
                <div
                  className={`${isSidebarOpen && clickedItem === index ? "block" : "hidden"} 
                  bg-primary-700 transition-all duration-300 ease-in-out`}
                >
                  {section.subSections.map((subSection, subIndex) => (
                    <Link
                      to={subSection.path}
                      key={subIndex}
                      className={`flex items-center px-8 py-2 hover:bg-primary-600 ${
                        isActive(subSection.path) ? "bg-primary-600 text-primary-200 font-semibold" : "text-white"
                      }`}
                    >
                      <div
                        className={`flex pr-2 justify-center transition-transform duration-300 ease-in-out ${
                          isActive(subSection.path) ? "text-primary-200" : "text-white"
                        }`}
                      >
                        {subSection.icon}
                      </div>
                      <span
                        className={`transition-transform duration-300 ease-in-out ${
                          isSidebarOpen ? "translate-x-0" : "-translate-x-10"
                        }`}
                      >
                        {subSection.title}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

SideBar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
}

export default SideBar
