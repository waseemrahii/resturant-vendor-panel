import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// import { defineConfig } from "vite"
// import react from "@vitejs/plugin-react"
// import path from "path"

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react({
//       // Add this to fix the preamble error
//       jsxRuntime: "automatic",
//       babel: {
//         plugins: [["@babel/plugin-transform-react-jsx"]],
//       },
//     }),
//   ],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// })
