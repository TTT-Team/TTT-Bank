import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./global/Layout.jsx";
import LogIn from "./ui/screens/authscreen/LogIn.jsx";
import RegScreen from "./ui/screens/authscreen/RegScreen.jsx";
import UserAgreement from "./ui/screens/useragree/UserAgreePage.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LogIn />} />
                    <Route path="RegScreen" element={<RegScreen />}/>
                    <Route path="LogIn" element={<LogIn />}/>
                    <Route path="UserAgreement" element={<UserAgreement />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
