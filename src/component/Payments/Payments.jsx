import ResturantPayments from "./ResturantPayments"
import TitleHead from "../Header/TitleHead"

const Payments = () => {
  return (
    <div>
      <TitleHead title="Payments" desc="Payments" />
      <div>
        <ResturantPayments />
      </div>
    </div>
  )
}

export default Payments
