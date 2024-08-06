import React from 'react'
import '../page/home.css'
import Navbar from '../components/Navbar/navbar.jsx';
import Solution from '../components/solution/sol.jsx'
import Info from '../components/info-section/info.jsx'
import Custom from '../components/custom/custom.jsx'
import Article from '../components/article/article.jsx';
import Footer from '../components/footer/footer.jsx';
const home = () => {
  return (
    <div>
     <Navbar/>
     <Solution/>
     <Info/>
     <Custom/>
     <Article/>
     <Footer/>
     </div>
  )
}

export default home
