import useCount from "../../4CustomsHooks/1useCount";
import ItemCount from "../3ItemCount/ItemCount";
import "./Item.css"
export default function Item({item}){
    const{count, increment, decrement}=useCount(0)
    const onAdd =(iniciativaDonacion, dineroDonado)=>{
        console.log("iniciativaDonacion", iniciativaDonacion);
        console.log("dinerDonado", dineroDonado);
    };
    
    console.log({count, item});
    
    return(
        
        <div className="First--Container__all--Items" >
            <section style={{margin:"1rem"}}>
    
            <h4 style={{textAlign:"center"}}>
            Negocio de: {item.Category}
            </h4>
            </section>
        <div className="all--Items__IMG">
    
        <img className="IMG__Items" src={item.image} alt={item.title} />
        </div>
        <div>
        </div>
        <div className="all--Items__Second--Container">
        <h2 className="Second--Container__Item--Title">
            {item.title}
        </h2>
        <h4 className="Second--Container__Item--business_volume">
            {item.business_volume}
        </h4>
        <hr style={{margin:"2rem"}}/>
        <h1>
            ¿ <span style={{color:"springgreen",letterSpacing:"-0.6rem"}}>P</span> orque donarme?
        </h1>
        <h3 className="Second--Container__Item--reason_To_Donate">
            {item.reason_To_Donate}
        </h3>
        <h1>
        <span style={{color:"springgreen",letterSpacing:"-0.1rem"}}>C</span>onoceme
        </h1>
        <p className="Second--Container__Item--Description">
            {item.description}
        </p>
        <div className="Second--Container__Item--Logic">
        <ItemCount count={count}
        increment={increment}
        decrement={decrement}
        />
        </div>
        <div className="Second--Container__Item--Button">
            <button onClick={()=>onAdd(item,count)}>
                Donar
            </button>
        <hr style={{margin:"2rem"}}/>
            <div className="LikeDislike" style={{display:"flex", textAlign:"center", justifyContent:"center"}}>
                <a  href="">
                <svg style={{margin:"0.9rem",backgroundColor:"springgreen", borderRadius:"50%"}} width="2rem" height="2rem" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.9707 19.42V13.89" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2.28234 12.67C2.25751 12.2167 2.32536 11.7631 2.48175 11.3369C2.63813 10.9106 2.87975 10.5208 3.19187 10.1911C3.504 9.86141 3.88006 9.59877 4.29708 9.41931C4.71411 9.23985 5.16335 9.14734 5.61735 9.14734C6.07135 9.14734 6.52058 9.23985 6.9376 9.41931C7.35463 9.59877 7.73069 9.86141 8.04281 10.1911C8.35493 10.5208 8.59657 10.9106 8.75296 11.3369C8.90934 11.7631 8.97717 12.2167 8.95234 12.67V18.3C8.97717 18.7533 8.90934 19.207 8.75296 19.6332C8.59657 20.0594 8.35493 20.4492 8.04281 20.7789C7.73069 21.1086 7.35463 21.3712 6.9376 21.5507C6.52058 21.7301 6.07135 21.8227 5.61735 21.8227C5.16335 21.8227 4.71411 21.7301 4.29708 21.5507C3.88006 21.3712 3.504 21.1086 3.19187 20.7789C2.87975 20.4492 2.63813 20.0594 2.48175 19.6332C2.32536 19.207 2.25751 18.7533 2.28234 18.3V12.67Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.97076 18.3C8.96813 18.7399 9.05217 19.176 9.21809 19.5835C9.38402 19.9909 9.62857 20.3617 9.93779 20.6747C10.247 20.9876 10.6148 21.2366 11.0203 21.4073C11.4257 21.5781 11.8608 21.6674 12.3008 21.67H16.4208C17.3814 21.6693 18.316 21.357 19.0841 20.78C19.8522 20.203 20.4125 19.3924 20.6808 18.47L22.1808 13.39C22.3002 13.0523 22.3372 12.691 22.2889 12.3361C22.2405 11.9812 22.1081 11.643 21.9028 11.3496C21.6974 11.0562 21.4249 10.816 21.108 10.6491C20.7911 10.4822 20.4389 10.3934 20.0808 10.39H14.5608V5.10999C14.5621 4.91825 14.5256 4.72818 14.4535 4.55054C14.3813 4.3729 14.2749 4.21121 14.1402 4.07471C14.0056 3.9382 13.8454 3.82953 13.6687 3.75494C13.4921 3.68036 13.3025 3.64132 13.1108 3.64001V3.64001C12.7953 3.64144 12.4889 3.74572 12.2381 3.93701C11.9872 4.1283 11.8056 4.39617 11.7208 4.70001L8.97076 13.86" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
        <h6>
            Like
        </h6>
                </a>
                
        
    
                <a href="">
                <svg style={{margin:"0.9rem",backgroundColor:"red", borderRadius:"50%"}} width="2rem" height="2rem" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.66992 5.5V11.03" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.66992 11.03L11.4199 20.19C11.5048 20.4938 11.6864 20.7617 11.9372 20.953C12.1881 21.1443 12.4944 21.2486 12.8099 21.25V21.25C13.0016 21.2487 13.1912 21.2097 13.3679 21.1351C13.5445 21.0605 13.7047 20.9518 13.8394 20.8153C13.974 20.6788 14.0805 20.5171 14.1526 20.3395C14.2248 20.1618 14.2612 19.9718 14.2599 19.78V14.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2.00109 12.25C1.97626 12.7033 2.04411 13.157 2.2005 13.5832C2.35688 14.0094 2.59852 14.3993 2.91064 14.7289C3.22276 15.0586 3.59881 15.3212 4.01583 15.5007C4.43286 15.6801 4.88209 15.7727 5.33609 15.7727C5.79008 15.7727 6.23931 15.6801 6.65634 15.5007C7.07336 15.3212 7.44944 15.0586 7.76156 14.7289C8.07368 14.3993 8.31532 14.0094 8.47171 13.5832C8.62809 13.157 8.69594 12.7033 8.67111 12.25V6.62C8.69594 6.16668 8.62809 5.71308 8.47171 5.28687C8.31532 4.86065 8.07368 4.47074 7.76156 4.14105C7.44944 3.81136 7.07336 3.54878 6.65634 3.36932C6.23931 3.18986 5.79008 3.09729 5.33609 3.09729C4.88209 3.09729 4.43286 3.18986 4.01583 3.36932C3.59881 3.54878 3.22276 3.81136 2.91064 4.14105C2.59852 4.47074 2.35688 4.86065 2.2005 5.28687C2.04411 5.71308 1.97626 6.16668 2.00109 6.62V12.25Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.66998 6.62C8.66735 6.18006 8.75137 5.74394 8.9173 5.33649C9.08322 4.92904 9.32777 4.55824 9.63699 4.2453C9.94621 3.93237 10.314 3.68341 10.7195 3.51263C11.1249 3.34186 11.56 3.25262 12 3.25H16.12C17.0806 3.25072 18.0152 3.56303 18.7833 4.14001C19.5514 4.717 20.1117 5.52755 20.38 6.45001L21.88 11.53C21.9994 11.8677 22.0365 12.229 21.9881 12.5839C21.9397 12.9387 21.8074 13.277 21.602 13.5704C21.3966 13.8638 21.1241 14.104 20.8072 14.2709C20.4903 14.4378 20.1381 14.5266 19.78 14.53H14.28" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <h6>
        dislike
    </h6>
                </a>
            </div>
        </div>
        </div>
        </div>
    
    );
    ;}













