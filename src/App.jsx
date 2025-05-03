import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main_screen from './screens/main-screen.jsx';
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path ="/" element={<Main_screen />}/> {} 
          </Routes>
      </BrowserRouter>
  )
}

export default App
