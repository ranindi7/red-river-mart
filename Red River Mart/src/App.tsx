import "./App.css";

import UserAccount from "./components/userAccountComponent/userAccountComponent";
import Login from "./components/loginComponent/signInComponent";
import MarketplacePage from './components/buyComponent/marketplacePage';
import Header from "./components/common/headerPage";
import Inbox from "./components/inboxComponent/inboxPage";
import Footer from './components/common/footerPage';
import Info from "./components/productInfoComponent/productInfo";

function App() {
  return (
    <>
      <Header />
      <Login />
      <UserAccount />
      <MarketplacePage />
      <Inbox />
      <Info />
      <Footer />
    </>
  )
}

export default App  