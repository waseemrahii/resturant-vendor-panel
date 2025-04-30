import TitleHead from "../../component/Header/TitleHead"
import SalesReport from "../../component/Reports/SalesReport"

const ReportsPage = () => {
  return (
    <div>
      <TitleHead title={"Sales Report"} desc={"Sales Report"} desc2={"> Reports "} link={"/reports"} />
      <div className="w-[90%] mx-auto">
        <SalesReport />
      </div>
    </div>
  )
}

export default ReportsPage
