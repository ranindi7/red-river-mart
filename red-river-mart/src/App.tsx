import './App.css'
import './components/buyComponent/buyPage.css'
import './components/sellComponent/sellPage.css'
import MarketplacePage from './components/buyComponent/marketplacePage'
import SellPage from './components/sellComponent/sellPage'
import Header from './components/common/headerPage'
import Footer from './components/common/footerPage'
import UserAccount from "./components/userAccountComponent/userAccountComponent";
import Login from "./components/loginComponent/signInComponent";
import Inbox from "./components/inboxComponent/inboxPage";
import Info from "./components/productInfoComponent/productInfo";

function App() {
  return (
    <>
      <Header />
      <Login />
      <UserAccount />
      <MarketplacePage />
      <SellPage />
      <Inbox />
      <Info />
      <Footer />
    </>
  )
}

export default App  