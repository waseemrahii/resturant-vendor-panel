import { Link } from "react-router-dom"

const CategoryHead = () => {
  const navLinks = [
    { name: "Category Informations", path: "/categories/create/infomation" },
    { name: "Review Atttributes", path: "/categories/create/review-attribute" },
  ]
  return (
    <div>
      <header className="border-b my-4">
        <div className="">
          <nav className="flex justify-center items-center space-x-4 ">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-semibold px-2 py-1 rounded-t-md bg-primary-500 border-b-2 border-primary-900"
                    : "text-white font-semibold px-2 py-1 rounded-t-md bg-primary-600 border-b-2 border-primary-900"
                }
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </div>
  )
}

export default CategoryHead
