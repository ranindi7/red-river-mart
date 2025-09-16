import './App.css'
import './components/buyPage/buyPage.css'
import './components/sellPage/sellPage.css'
import MarketplacePage from './components/buyPage/marketplacePage'
import SellPage from './components/sellPage/sellPage'
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