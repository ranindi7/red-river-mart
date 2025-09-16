import "./App.css";

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
      <MarketplacePage />
      <Inbox />
      <Info />
      <Footer />
    </>
  )
}

export default App  