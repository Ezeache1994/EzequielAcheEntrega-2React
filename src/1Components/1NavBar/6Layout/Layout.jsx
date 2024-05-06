import Footer from "../5Footer/Footer"
import NavBar from "../7NavBar/NavBar"

export default function Layout({children}){
    return(
        <div>
            <div>
            <NavBar/>
            </div>
            <main>
                {children}
            </main>
        <Footer/>
        </div>
    )
}









