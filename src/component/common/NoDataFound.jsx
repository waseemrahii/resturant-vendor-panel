// import { FaInbox } from "react-icons/fa"

// const NoDataFound = ({ message = "No data found", icon = null, searchTerm = "" }) => {
//   return (
//     <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
//       <div className="bg-gray-100 rounded-full p-4 mb-4">{icon || <FaInbox className="h-8 w-8 text-gray-400" />}</div>
//       <h3 className="text-lg font-medium text-gray-900 mb-1">
//         {searchTerm ? `No results found for "${searchTerm}"` : message}
//       </h3>
//       <p className="text-gray-500 max-w-md">
//         {searchTerm
//           ? "Try adjusting your search or filter to find what you're looking for."
//           : "There are no items to display at this time."}
//       </p>
//     </div>
//   )
// }

// export default NoDataFound

"use client"
import PropTypes from "prop-types"
import { FaPlus } from "react-icons/fa"

const NoDataFound = ({ icon, title, message, actionLabel, onAction }) => {
  return (
    <div className="py-8 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">{icon}</div>
      <h3 className="text-lg font-medium text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-500 mb-4">{message}</p>
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          <FaPlus className="mr-2 -ml-1" />
          {actionLabel}
        </button>
      )}
    </div>
  )
}

NoDataFound.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  actionLabel: PropTypes.string,
  onAction: PropTypes.func,
}

export default NoDataFound
