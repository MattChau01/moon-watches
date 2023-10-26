import { BrowserRouter } from "react-router-dom"

// import HelloWorld from "./components/hello-world"
import Home from "./pages/home"

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <HelloWorld /> */}
        <Home />
      </BrowserRouter>
    </>
  )
}

export default App
