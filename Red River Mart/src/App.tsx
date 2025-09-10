import "./App.css";
import Header from "./components/headerComponent/header";
import LandingPageMain from './components/buyComponent/buyPage'
import Footer from './components/footerComponent/Footer';
import Login from "./components/loginComponent/signInComponent";

function App() {
  return (
    <>
      <Login />
      <Header />
      <LandingPageMain />
      <Footer />
    </>
  )
}

export default App