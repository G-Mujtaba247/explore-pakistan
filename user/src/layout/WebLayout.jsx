
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const WebLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col ">
            <Navbar className="bg-white/80" />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default WebLayout
