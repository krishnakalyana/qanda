import { ReactNode } from "react";
import Navbar from "../Navbar";

export default  function MainLayout ({children,}:Readonly<{children:ReactNode;}>){
    return <div className="flex h-full">
       <div className="flex-1 overflow-auto p-4">
        {children}
       </div>
       <Navbar/>
    </div>
}