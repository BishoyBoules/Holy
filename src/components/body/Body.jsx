import Home from './Home'
import WhoWeR from './WhoWeR'
import Offers from './Offers'
import Footer from './Footer'
import Copyrights from './Copyrights'

const Body = () => {
  return (
    <div className='mt-20 w-full'>
        <Home/>
        <WhoWeR/>
        <Offers/>
        <Footer/>
        <Copyrights/>
    </div>
  )
}

export default Body