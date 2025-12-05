
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const WebLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default WebLayout
