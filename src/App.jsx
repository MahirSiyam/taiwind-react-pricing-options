import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navber from './components/Navber/Navber'
import PricingOptions from './components/PricingOptions/PricingOptions'


const pricingPromise = fetch('pricingData.json').then(res => res.json())

function App() {

  return (
    <>
    <header>
      <Navber></Navber>
      
      {/* <DaisyNav></DaisyNav> */}
    </header>  

    <main>
      <Suspense fallback = {<span className="loading loading-spinner loading-lg"></span>}>
        <PricingOptions pricingPromise = {pricingPromise}></PricingOptions>
      </Suspense>
    </main>
    </>
  )
}

export default App
