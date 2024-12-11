import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Header from "./components/Header"
import Footer from "./components/Footer"
import MyButton from './components/CustomButton/MyButton'
import UseState from './components/UseState'
import ProductList from './components/ProductList'
import UseEffectComponent from './components/UseEffectComponent'
import UseRefComponent from './components/UseRefComponent'

function App() {
  // const [count, setCount] = useState(0)
  let [showState, setShowState] = useState(false);
  function changeShowState(){
    setShowState(showState=>!showState);
  }
  return (
    <>
      <div className="container py-3">
        <Header></Header>
        {/* <MyButton></MyButton> */}
        <hr />
        {/* <button className="custom">
          Global style
        </button> */}
        {/* <UseState></UseState> */}
        {/* <ProductList></ProductList> */}
        <UseRefComponent></UseRefComponent>
        {/* <div>
                <button onClick={changeShowState} className="btn btn-info">
                    {showState? 'Close': 'Open'}
                </button>
                {showState?<UseEffectComponent></UseEffectComponent>: null}
        </div> */}

        <Footer></Footer>            
      </div>

    </>
  )
}

export default App
