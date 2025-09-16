import './App.css'
import './components/buyPage/buyPage.css'
import MarketplacePage from './components/buyPage/marketplacePage'
import SellPage from './components/sellPage/sellPage'
import Header from './components/common/headerPage'
import Footer from './components/common/footerPage'

function App() {
  return (
    <>
      <Header />
      <MarketplacePage />
      <SellPage />
      <Footer />
    </>
  )
}

export default App