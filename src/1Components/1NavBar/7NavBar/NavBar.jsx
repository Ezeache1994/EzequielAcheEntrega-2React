import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryList from "../4CategoryList/1CategoryList/CategoryList";
import Brand from "../1Brand/Brand";
import "./NavBar.css"
import CartWidget from "../3CartWidget/CartWidget";

export default function NavBar() {
  return (
    <div > 
    <BrowserRouter >
    <div className="NavBar__Container"  >
        <Brand/>
        <CategoryList/>
        <CartWidget/>
            </div> 

      <Routes>
        <Route path="/" element={<div style={{padding:"1rem", textAlign:"center",display:"flex"}}><h1>Home</h1> </div>} />
        <Route path="/Tecnologia" element={<div style={{padding:"1rem", textAlign:"center",display:"flex"}}><h1>Tecnologia</h1> </div>} />
        <Route path="/Musica" element={<div style={{padding:"1rem", textAlign:"center",display:"flex"}}><h1>Musica</h1> </div>} />
        <Route path="/Cocina" element={<div style={{padding:"1rem", textAlign:"center",display:"flex"}}><h1>Cocina</h1> </div>} />
        <Route path="/Construccion" element={<div style={{padding:"1rem", textAlign:"center",display:"flex"}}><h1>Construccion</h1> </div>} />
        <Route path="/Cine" element={<div style={{padding:"1rem", textAlign:"center",display:"flex"}}><h1>Cine</h1> </div>} />
        <Route path="*" element={<div style={{padding:"1rem", textAlign:"center",display:"flex"}}><h1>error 404</h1> </div>} />
      </Routes>
    </BrowserRouter>    
    </div>
  );
}









