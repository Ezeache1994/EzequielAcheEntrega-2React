import {BrowserRouter,Route, Routes} from "react-router-dom"
import Layout from './1Components/2Layout/Layout'
import './App.css'
import DonationList from "./1Components/5DonationList/DonationList"
function App() {
  return (
    <div>
            <BrowserRouter>
        <Layout>
          <Routes>          
            <Route path="/Category/:CategoryName" element={<DonationList />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App;