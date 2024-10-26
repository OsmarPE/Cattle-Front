import Aside from "@/components/dashboard/Aside";
import { Toaster } from "@/components/ui/sonner";
import {  Outlet } from "react-router-dom";

export default function Dashboard() {
    return (
        <div className="grid grid-cols-[250px_1fr]">
           <Aside/>
            <div>
                <Outlet />
            </div>
            <Toaster />
        </div>
    )
}
