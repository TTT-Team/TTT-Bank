import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main_screen from './screens/main-screen.jsx';


//import MainScreen from './screens/MainScreen';
import DepositScreen from './screens/DepositScreen.jsx';
import WithdrawScreen from './screens/WithdrawScreen.jsx';
import TransferScreen from './screens/TransfertScreen.jsx';


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path ="/" element={<Main_screen />}/> {} 
              <Route path="/deposit/:accountType" element={<DepositScreen />} />
        <Route path="/withdraw/:accountType" element={<WithdrawScreen />} />
        <Route path="/transfer/:accountType" element={<TransferScreen />} />
          
          </Routes>
      </BrowserRouter>
  )
}

export default App
