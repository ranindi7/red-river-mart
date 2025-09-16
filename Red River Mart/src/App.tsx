import './App.css'
import './components/buyPage/buyPage.css'
import MarketplacePage from './components/buyPage/marketplacePage'
import Header from "./components/common/header";
import Inbox from "./components/pages/inboxPage";
import Footer from './components/common/footerPage'

function App() {
  return (
    <>
      <Header />
      <MarketplacePage />
      <Inbox />
      <Footer />
    </>
  )
}

export default App  