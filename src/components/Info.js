import { Footer } from '../layout/Footer'
import { Header } from "../layout/Header";
import { LoginScreen } from "./LoginScreen";

export const Info = () => {
    return (
        <div className="section-4">
            <br/><br/>
            <div className="popup-container">
                <LoginScreen />
            </div>   
            <Header />  
            <div className="el-club">
                    <h1 className="heading-3">Sé parte <strong>del club</strong></h1>
                    <p className="paragraph-22">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum.</p>
                    
            </div>
            <br/>
            <Footer />
            <br/><br/><br/><br/>
        </div>
    )
}
