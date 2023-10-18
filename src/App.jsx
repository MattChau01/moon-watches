import { BrowserRouter } from "react-router-dom"

import HelloWorld from "./components/hello-world"


function App() {

  return (
    <>
      <BrowserRouter>
        <HelloWorld />
      </BrowserRouter>
    </>
  )
}

export default App
