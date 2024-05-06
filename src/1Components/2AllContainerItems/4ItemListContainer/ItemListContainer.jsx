import useDonations from "../../../2Hooks/3useDonations_DB";
import ItemList from "../2ItemList/ItemList";
import "./ItemListContainer.css"

function DBItemListContainer({}){
    const{isLoading, products}= useDonations();
    if(isLoading)return <div style={{textAlign:"center", display:"flex"}}> 
    
    <span style={{fontSize:"17rem",color:"springgreen",textAlign:"center"}}> C </span> <h1 style={{fontSize:"17rem",textAlign:"center"}} >argan </h1> <span style={{fontSize:"17rem",color:"springgreen",textAlign:"center"}} >do... </span>
    
    </div>;

    return(
        <div className="ItemListContainer__All--Elements">
                <ItemList products={products}/>
        </div>
    )
};

export default DBItemListContainer;