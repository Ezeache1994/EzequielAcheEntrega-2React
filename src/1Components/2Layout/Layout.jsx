import NavBar from "../1NavBar/0NavBar/NavBar";
import Footer from "../3Footer/Footer";

export default function Layout({ children }) {
    return (
        <div>
            <NavBar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}


