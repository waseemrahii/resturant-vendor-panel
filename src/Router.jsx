// import { createBrowserRouter } from "react-router-dom"
// import RootLayout from "./_root/RootLayout"
// import DashBoardPage from "./_root/Pages/DashBoardPage"
// import Foods from "./_root/Pages/Foods"
// import FoodDetails from "./component/Food/FoodDetails"
// import Payments from "./component/Payments/Payments"
// import Page404 from "./_root/Pages/Page404"
// import RestaurantPayOut from "./component/Payments/RestaurantPayOut"
// import PayOutRequest from "./component/Payments/PayOutRequest"
// import Coupans from "./component/Coupon/Coupon/Coupans"
// import EditCoupans from "./component/Coupon/Coupon/EditCoupans"
// import PrientOrder from "./component/Orders/PrientOrder"
// import OrderEdit from "./component/Orders/OrderEdit"
// import OrdersPage from "./_root/Pages/OrdersPage"
// import RestaurantsWallet from "./component/Restaurants/ProfileRestaurants/RestaurantsWallet"
// import DineInFeatures from "./component/Restaurants/ProfileRestaurants/DineInFeatures"
// import Promos from "./component/Restaurants/ProfileRestaurants/Promos"
// import GalleryView from "./component/Restaurants/ProfileRestaurants/GalleryView"
// import RestaurantsInfo from "./component/Restaurants/ProfileRestaurants/RestaurantsInfo"
// import LoginPage from "./_root/Pages/LoginPage"
// import ForgotPasswordPage from "./_root/Pages/ForgotPasswordPage"
// import Settings from "./_root/Pages/Settings"
// import OrderDetail from "./component/Orders/OrderDetail"
// import AddFood from "./component/Food/AddFood"
// import EditFood from "./component/Food/FoodDetails"

// // Define the routes for seller panel
// // const Router = () => {
// //   // Create router with all routes
//   const router = createBrowserRouter([
//   {
//     path: "/login",
//     element: <LoginPage />,
//   },
//   {
//     path: "/forgot-password",
//     element: <ForgotPasswordPage />,
//   },
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       { path: "", element: <DashBoardPage /> }, // Dashboard

//       // Food Management
//       { path: "foods", element: <Foods /> },
//       { path: "food/create", element: <AddFood /> },
//       { path: "food/edit/:id", element: <EditFood /> },
//       { path: "food/view/:id", element: <FoodDetails /> },

//       // Order Management
//       { path: "orders", element: <OrdersPage /> },
//       { path: "orders/:id", element: <OrderDetail /> },
//       { path: "print-order/:id", element: <PrientOrder /> },
//       { path: "edit-order/:id", element: <OrderEdit /> },

//       // Financial Management
//       { path: "payments", element: <Payments /> },
//       { path: "payouts", element: <RestaurantPayOut /> },
//       { path: "payout-requests", element: <PayOutRequest /> },
//       { path: "wallet", element: <RestaurantsWallet /> },

//       // Marketing
//       { path: "coupons", element: <Coupans /> },
//       { path: "coupons/create", element: <EditCoupans /> },
//       { path: "coupons/edit/:id", element: <EditCoupans /> },
//       { path: "promos", element: <Promos /> },

//       // Restaurant Profile
//       { path: "profile", element: <RestaurantsInfo /> },
//       { path: "gallery", element: <GalleryView /> },
//       { path: "dine-in", element: <DineInFeatures /> },

//       // Settings
//       { path: "settings", element: <Settings /> },

//       // 404 Page
//       { path: "*", element: <Page404 /> },
//     ],
//   },
// ])

// export default router





import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// Auth Pages
import LoginPage from "./_root/Pages/LoginPage"
import ForgotPasswordPage from "./_root/Pages/ForgotPasswordPage"
import SellerLogin from "./_auth/SellerLogin"

// Layout
import SellerLayout from "./component/Layout/SellerLayout"

// Seller Pages
import SellerDashboard from "./_root/Pages/SellerDashboard"
import SellerPayments from "./_root/Pages/SellerPayments"
import SellerProfile from "./_root/Pages/SellerProfile"
import SellerReviews from "./_root/Pages/SellerReviews"
import SellerSettings from "./_root/Pages/SellerSettings"
import AddMenuItem from "./component/Seller/AddMenuItem"
import OrderDetail from "./component/Seller/OrderDetail"
import SellerWallet from "./component/Seller/SellerWallet"
import SellerWithdrawals from "./component/Seller/SellerWithdrawals"
import SellerPromotions from "./component/Seller/SellerPromotions"
// import SellerGallery from "./component/Seller/SellerGallery"
import Page404 from "./_root/Pages/Page404"

// Auth Context
import { AuthProvider } from "./context/AuthContext"
import Orders from "./component/Orders/Orders"
import Foods from "./_root/Pages/Foods"
import AddFood from "./component/Food/AddFood"

const Router = () => {
  // Create router with all routes
  const router = createBrowserRouter([
    // Auth Routes
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPasswordPage />,
    },
    {
      path: "/seller/login",
      element: <SellerLogin />,
    },

    // Seller Routes
    {
      path: "/seller",
      element: (
        <AuthProvider>
          <SellerLayout />
        </AuthProvider>
      ),
      children: [
        {
          path: "dashboard",
          element: <SellerDashboard />,
        },
        {
          path: "menu",
          // element: <SellerMenuItems />,
          element: <Foods />,
        },
        {
          path: "food/create",
          // element: <SellerMenuItems />,
          element: <AddFood />,
        },
        {
          
          path: "menu/edit/:id",
          element: <AddMenuItem />,
        },
        {
          path: "orders",
          // element: <SellerOrders />,
          element: <Orders />,
        },
        {
          path: "orders/:id",
          element: <OrderDetail />,
        },
        {
          path: "payments",
          element: <SellerPayments />,
        },
        {
          path: "wallet",
          element: <SellerWallet />,
        },
        {
          path: "withdrawals",
          element: <SellerWithdrawals />,
        },
        {
          path: "reviews",
          element: <SellerReviews />,
        },
        {
          path: "profile",
          element: <SellerProfile />,
        },
        // {
        //   path: "gallery",
        //   element: <SellerGallery />,
        // },
        // {
        //   path: "dine-in",
        //   element: <SellerDineIn />,
        // },
        {
          path: "promotions",
          element: <SellerPromotions />,
        },
        {
          path: "settings",
          element: <SellerSettings />,
        },
      ],
    },

    // Redirect root to seller dashboard
    {
      path: "/",
      element: (
        <AuthProvider>
          <SellerLayout />
        </AuthProvider>
      ),
      children: [
        {
          index: true,
          element: <SellerDashboard />,
        },
      ],
    },

    // 404 Page
    {
      path: "*",
      element: <Page404 />,
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default Router
