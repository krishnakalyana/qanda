import UserIcon from "@/assets/icons/User";
import { Button } from "../ui/button";
import ModeToggle from "./ThemeToggle";

export default function Navbar(){
    return <nav className=" h-full p-2 flex flex-col bg-accent justify-between">
        <div className="flex flex-col gap-2">
        <Button size={"sm"} className="tracking-widest uppercase text-primary" variant={"ghost"}>Home</Button>
        <Button size={"sm"} className="tracking-widest uppercase" variant={"ghost"}>Trending</Button>
        <Button size={"sm"} className="tracking-widest uppercase" variant={"ghost"}>Profile</Button>
        </div>
        <div className=" flex flex-col gap-2">
            <Button size={"sm"} variant={"link"}><UserIcon/></Button>
        <ModeToggle/>
        </div>
    </nav>
}