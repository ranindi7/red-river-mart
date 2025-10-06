import './App.css'
import './components/pages/buyComponent/buyPage.css'
import './components/pages/sellComponent/sellPage.css'
import UserAccount from "./components/pages/userAccountComponent/userAccountComponent";
import Login from "./components/pages/loginComponent/signInComponent";
import Info from "./components/pages/productInfoComponent/productInfo";
import Inbox from './components/pages/inboxComponent/inboxPage'
import { Routes, Route } from "react-router-dom"; 
import { Layout } from './components/layout/layout';
import MarketplaceContainer from './components/pages/buyComponent/marketplaceContainer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MarketplaceContainer path="" />} /> 
        <Route path="/sell" element={<MarketplaceContainer path="sell" />} />

        {/* <Route path="/sell" element={<SellPage />} /> */}
        <Route path="/account" element={<UserAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/info" element={<Info />} />
        <Route path="/inbox" element={<Inbox />} />
      </Route>
    </Routes>
  );
}

export default App
