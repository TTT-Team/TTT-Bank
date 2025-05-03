import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./ui/screens/authscreen/LogIn.jsx";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route index element={<LogIn />}>

              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
