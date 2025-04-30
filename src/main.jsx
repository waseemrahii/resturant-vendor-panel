// import { createRoot } from "react-dom/client"
// import "./index.css"
// import { RouterProvider } from "react-router-dom"
// import router from "./Router"
// import { ThemeProvider, createTheme } from "@mui/material/styles" // Import createTheme
// // Create a theme instance
// const theme = createTheme({
//   // You can customize your theme here. For example:
//   palette: {
//     primary: {
//       main: "#556cd6",
//     },
//     secondary: {
//       main: "#19857b",
//     },
//   },
// })

// createRoot(document.getElementById("root")).render(
//   <ThemeProvider theme={theme}>
//     <RouterProvider router={router} />
//   </ThemeProvider>,
// )


import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
