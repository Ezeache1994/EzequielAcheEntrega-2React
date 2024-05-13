import Brand from "../1Brand/Brand";
import CategoryList from "../2CategoryList/CategoryList";
import CartWidget from "../4CartWidget/CartWidget";
import "./NavBar.css"


export default function NavBar(){
return(
    <div className="NavBar">
        <Brand/>
        <CategoryList/>
        <CartWidget/>
    </div>
)
};