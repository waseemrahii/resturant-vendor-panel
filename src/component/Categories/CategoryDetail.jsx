import { Outlet } from "react-router-dom"
import TitleHead from "../../component/Header/TitleHead"
import CategoryHead from "./CategoryHead"

const CategoryDetail = () => {
  return (
    <>
      <TitleHead title="Categories" desc=" Category" />
      <div className="w-[90%] mx-auto">
        <CategoryHead />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default CategoryDetail
