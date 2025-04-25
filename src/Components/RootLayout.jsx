import NavBar from "./NavBar";
import { Outlet } from "@tanstack/react-router";

const RootLayout = () => {
    return (
        
        <div className="flex flex-col min-h-screen">
            <NavBar />            
            <div className="container mx-auto px-4 py-30">
                <Outlet/>
            </div>
        </div>    
        
    )
}

export default RootLayout;