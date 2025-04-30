import { Route, Routes } from "react-router-dom"
import Stripe from "./Stripe"
import COD from "./COD"
import RazorPay from "./RazorPay"
import Paypal from "./Paypal"
import Paytm from "./Paytm"
import Wallet from "./Wallet"
import PayFast from "./PayFast"
import PayStack from "./PayStack"

import MercadoPago from "./MercadoPago"
import PaymentMethod from "./PaymentMethod"
import FlutterWaves from "./FlutterWaves"

const MainPayment = () => {
  return (
    <>
      <PaymentMethod />
      <Routes>
        <Route path="/stripe-configuration" element={<Stripe />} />
        <Route path="cod-configuration" element={<COD />} />
        <Route path="razorpay-configuration" element={<RazorPay />} />
        <Route path="paypal-configuration" element={<Paypal />} />
        <Route path="paytm-configuration" element={<Paytm />} />
        <Route path="wallet-configuration" element={<Wallet />} />
        <Route path="payfast-configuration" element={<PayFast />} />
        <Route path="paystack-configuration" element={<PayStack />} />
        <Route path="flutterwave-configuration" element={<FlutterWaves />} />
        <Route path="mercadopago-configuration" element={<MercadoPago />} />
      </Routes>
    </>
  )
}

export default MainPayment
