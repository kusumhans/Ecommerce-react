// import css
import './App.css'
// import custom component
import Footer from './component/Footer/Footer'
import Header from './component/Navbar/Header'
import MainRouters from './routers/MainRouters'

function App() {

  return (
    <div>
    {/* common header for all pages */}
    <Header 
    expand="md" 
    container="md" 
    />
    <MainRouters />

    {/* common footer for all pages */}
    <Footer />
   
    </div>
  )
} 

export default App
