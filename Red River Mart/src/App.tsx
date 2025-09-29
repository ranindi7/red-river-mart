import './App.css'
import './components/pages/buyComponent/buyPage.css'
import './components/pages/sellComponent/sellPage.css'
import SellPage from './components/pages/sellComponent/sellPage'
import UserAccount from "./components/pages/userAccountComponent/userAccountComponent";
import Login from "./components/pages/loginComponent/signInComponent";
import Info from "./components/pages/productInfoComponent/productInfo";
import Inbox from './components/pages/inboxComponent/inboxPage'
import MarketplacePage from './components/pages/buyComponent/marketplacePage'
import { Routes, Route } from "react-router-dom"; 
import { Layout } from './components/layout/layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MarketplacePage />} />

        <Route path="/sell" element={<SellPage />} />
        <Route path="/account" element={<UserAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/info" element={<Info />} />
        <Route path="/inbox" element={<Inbox />} />
      </Route>
    </Routes>
  )
}

export default App
