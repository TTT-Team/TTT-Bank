import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./global/Layout.jsx";
import LogIn from "./ui/screens/authscreen/LogIn.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LogIn />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
