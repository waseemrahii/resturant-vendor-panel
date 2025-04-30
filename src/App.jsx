import { Routes, Route, Navigate } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { AuthProvider } from "./context/AuthContext"

// Auth Pages
import LoginPage from "./_root/Pages/LoginPage"
import ForgotPasswordPage from "./_root/Pages/ForgotPasswordPage"
import SellerLogin from "./_auth/SellerLogin"

// Layouts
import RootLayout from "./_root/RootLayout"
import SellerLayout from "./component/Layout/SellerLayout"

// Admin Pages
import DashBoardPage from "./_root/Pages/DashBoardPage"
import Foods from "./_root/Pages/Foods"
import FoodDetails from "./component/Food/FoodDetails"
import Payments from "./component/Payments/Payments"
import Page404 from "./_root/Pages/Page404"
import RestaurantPayOut from "./component/Payments/RestaurantPayOut"
import PayOutRequest from "./component/Payments/PayOutRequest"
import Coupans from "./component/Coupon/Coupon/Coupans"
import EditCoupans from "./component/Coupon/Coupon/EditCoupans"
import PrientOrder from "./component/Orders/PrientOrder"
import OrderEdit from "./component/Orders/OrderEdit"
import OrdersPage from "./_root/Pages/OrdersPage"
import RestaurantsWallet from "./component/Restaurants/ProfileRestaurants/RestaurantsWallet"
import DineInFeatures from "./component/Restaurants/ProfileRestaurants/DineInFeatures"
import Promos from "./component/Restaurants/ProfileRestaurants/Promos"
import GalleryView from "./component/Restaurants/ProfileRestaurants/GalleryView"
import RestaurantsInfo from "./component/Restaurants/ProfileRestaurants/RestaurantsInfo"
import Settings from "./_root/Pages/Settings"
import OrderDetail from "./component/Orders/OrderDetail"
import AddFood from "./component/Food/AddFood"
import EditFood from "./component/Food/FoodDetails"

// Seller Pages
import SellerDashboard from "./_root/Pages/SellerDashboard"
import SellerPayments from "./_root/Pages/SellerPayments"
import SellerReviews from "./_root/Pages/SellerReviews"
import SellerSettings from "./_root/Pages/SellerSettings"
import AddMenuItem from "./component/Seller/AddMenuItem"
import SellerWallet from "./component/Seller/SellerWallet"
import SellerWithdrawals from "./component/Seller/SellerWithdrawals"
import SellerPromotions from "./component/Seller/SellerPromotions"
import SellerProfile from "./_root/Pages/SellerProfile"

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Auth Routes */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/login" element={<SellerLogin />} /> */}
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/seller/login" element={<SellerLogin />} />

        {/* Admin Routes */}
        {/* <Route path="/admin" element={<RootLayout />}>
          <Route index element={<DashBoardPage />} />
          <Route path="foods" element={<Foods />} />
          <Route path="food/create" element={<AddFood />} />
          <Route path="food/edit/:id" element={<EditFood />} />
          <Route path="food/view/:id" element={<FoodDetails />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="orders/:id" element={<OrderDetail />} />
          <Route path="print-order/:id" element={<PrientOrder />} />
          <Route path="edit-order/:id" element={<OrderEdit />} />
          <Route path="payments" element={<Payments />} />
          <Route path="payouts" element={<RestaurantPayOut />} />
          <Route path="payout-requests" element={<PayOutRequest />} />
          <Route path="wallet" element={<RestaurantsWallet />} />
          <Route path="coupons" element={<Coupans />} />
          <Route path="coupons/create" element={<EditCoupans />} />
          <Route path="coupons/edit/:id" element={<EditCoupans />} />
          <Route path="promos" element={<Promos />} />
          <Route path="profile" element={<RestaurantsInfo />} />
          <Route path="gallery" element={<GalleryView />} />
          <Route path="dine-in" element={<DineInFeatures />} />
          <Route path="settings" element={<Settings />} />
        </Route> */}

        {/* Seller Routes */}
        <Route path="/" element={<SellerLayout />}>
          <Route index element={<SellerDashboard />} />
          <Route path="seller/dashboard" element={<SellerDashboard />} />
          <Route path="foods" element={<Foods />} />
          <Route path="foods/create" element={<AddFood />} />
          <Route path="foods/view/:id" element={<FoodDetails />} />
          <Route path="foods/edit/:id" element={<AddMenuItem />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="orders/:id" element={<OrderDetail />} />
          <Route path="payments" element={<SellerPayments />} />
          <Route path="wallet" element={<SellerWallet />} />
          <Route path="withdrawals" element={<SellerWithdrawals />} />
          <Route path="reviews" element={<SellerReviews />} />
          <Route path="gallery" element={<GalleryView />} />
          <Route path="profile" element={<SellerProfile />} />
          <Route path="dine-in" element={<DineInFeatures />} />
          <Route path="promotions" element={<SellerPromotions />} />
          <Route path="settings" element={<SellerSettings />} />
        </Route>

        {/* Redirect root to seller dashboard */}
        <Route path="/" element={<Navigate to="/seller/dashboard" replace />} />

        {/* 404 Page */}
        <Route path="*" element={<Page404 />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </AuthProvider>
  )
}

export default App


// import { Routes, Route, Navigate } from "react-router-dom"
// import { ToastContainer } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"

// // Auth Pages
// import LoginPage from "./_root/Pages/LoginPage"
// import ForgotPasswordPage from "./_root/Pages/ForgotPasswordPage"
// import SellerLogin from "./_auth/SellerLogin"

// // Layouts
// import RootLayout from "./_root/RootLayout"
// import SellerLayout from "./component/Layout/SellerLayout"

// // Admin Pages
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
// import Settings from "./_root/Pages/Settings"
// import OrderDetail from "./component/Orders/OrderDetail"
// import AddFood from "./component/Food/AddFood"
// import EditFood from "./component/Food/FoodDetails"

// // Seller Pages
// import SellerDashboard from "./_root/Pages/SellerDashboard"
// // import SellerMenuItems from "./_root/Pages/SellerMenuItems"
// import SellerOrders from "./_root/Pages/SellerOrders"
// import SellerPayments from "./_root/Pages/SellerPayments"
// // import SellerProfile from "./_root/Pages/SellerProfile"
// import SellerReviews from "./_root/Pages/SellerReviews"
// import SellerSettings from "./_root/Pages/SellerSettings"
// import AddMenuItem from "./component/Seller/AddMenuItem"
// import SellerWallet from "./component/Seller/SellerWallet"
// import SellerWithdrawals from "./component/Seller/SellerWithdrawals"
// // import SellerGallery from "./component/Seller/SellerGallery"
// // import SellerDineIn from "./component/Seller/SellerDineIn"
// import SellerPromotions from "./component/Seller/SellerPromotions"

// function App() {
//   return (
//     <>
//       <Routes>
//         {/* Auth Routes */}
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/forgot-password" element={<ForgotPasswordPage />} />
//         <Route path="/seller/login" element={<SellerLogin />} />

//         {/* Admin Routes */}
//         <Route path="/admin" element={<RootLayout />}>
//           <Route index element={<DashBoardPage />} />
//           <Route path="foods" element={<Foods />} />
//           <Route path="food/create" element={<AddFood />} />
//           <Route path="food/edit/:id" element={<EditFood />} />
//           <Route path="food/view/:id" element={<FoodDetails />} />
//           <Route path="orders" element={<OrdersPage />} />
//           <Route path="orders/:id" element={<OrderDetail />} />
//           <Route path="print-order/:id" element={<PrientOrder />} />
//           <Route path="edit-order/:id" element={<OrderEdit />} />
//           <Route path="payments" element={<Payments />} />
//           <Route path="payouts" element={<RestaurantPayOut />} />
//           <Route path="payout-requests" element={<PayOutRequest />} />
//           <Route path="wallet" element={<RestaurantsWallet />} />
//           <Route path="coupons" element={<Coupans />} />
//           <Route path="coupons/create" element={<EditCoupans />} />
//           <Route path="coupons/edit/:id" element={<EditCoupans />} />
//           <Route path="promos" element={<Promos />} />
//           <Route path="profile" element={<RestaurantsInfo />} />
//           <Route path="gallery" element={<GalleryView />} />
//           <Route path="dine-in" element={<DineInFeatures />} />
//           <Route path="settings" element={<Settings />} />
//         </Route>

//         {/* Seller Routes */}
//         <Route path="/seller" element={<SellerLayout />}>
//           <Route index element={<SellerDashboard />} />
//           <Route path="dashboard" element={<SellerDashboard />} />
//           <Route path="menu" element={<Foods />} />
//           <Route path="menu/add" element={<AddFood />} />
//           <Route path="menu/edit/:id" element={<AddMenuItem />} />
//           {/* <Route path="orders" element={<SellerOrders />} /> */}
//           <Route path="orders" element={<OrdersPage />} />
//           <Route path="orders/:id" element={<OrderDetail />} />
//           <Route path="payments" element={<SellerPayments />} />
//           <Route path="wallet" element={<SellerWallet />} />
//           <Route path="withdrawals" element={<SellerWithdrawals />} />
//           <Route path="reviews" element={<SellerReviews />} />
//           {/* <Route path="profile" element={<SellerProfile />} /> */}
//           {/* <Route path="gallery" element={<SellerGallery />} /> */}
//           {/* <Route path="dine-in" element={<SellerDineIn />} /> */}
//           <Route path="promotions" element={<SellerPromotions />} />
//           <Route path="settings" element={<SellerSettings />} />
//         </Route>

//         {/* Redirect root to seller dashboard */}
//         <Route path="/" element={<Navigate to="/seller/dashboard" replace />} />

//         {/* 404 Page */}
//         <Route path="*" element={<Page404 />} />
//       </Routes>
//       <ToastContainer position="top-right" autoClose={3000} />
//     </>
//   )
// }

// export default App
