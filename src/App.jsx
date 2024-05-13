import {BrowserRouter,Route, Routes} from "react-router-dom"
import Layout from './1Components/2Layout/Layout'
import './App.css'
import Home from "./1Components/4Home/Home";
import ItemListContainer from "./3AllContainerItems/4ItemListContainer/ItemListContainer";
import ItemError from "./3AllContainerItems/4ItemListContainer/itemError";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="" element={<Home/>} />
          <Route path="Category/Tecnologia" element = {<ItemListContainer category="Tecnologia"/>} />
          <Route path="Category/Musica" element = {<ItemListContainer category="Musica"/>}/>
          <Route path="Category/Cocina" element = {<ItemListContainer category="Cocina"/>}/>
          <Route path="Category/Construccion" element = {<ItemListContainer category="Construccion"/>}/>
          <Route path="Category/Cine" element = {<ItemListContainer category="Cine"/>}/>
          <Route path="/*" element = {<ItemError category="*"/>}/>
        </Routes>
      </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App;