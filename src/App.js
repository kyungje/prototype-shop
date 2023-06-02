import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Checkout from "./components/Checkout";
import AppStateProvider from "./providers/AppStateProvider";

const App = () => {
    return (
        <AppStateProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </Router>
        </AppStateProvider>
    );
};

export default App;
