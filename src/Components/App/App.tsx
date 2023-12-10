import './App.css'

import InputForm from '../InputForm/InputForm'
import Effects from '../Effects/Effects'
import Loader from '../Loader/Loader'

function App() {
  return (
    <>
      <Loader />
      <div class="blackout"></div>
      <div class="main-shadow"></div>
      <div class="main">
        <div class="content">
          <div class="header">Dungeons And Dragons</div>

          <InputForm />
        </div>
      </div>
      <Effects />
    </>
  )
}

export default App
