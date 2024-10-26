import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
export default function Auth() {
  return (
    <div className="grid h-screen grid-cols-2">
      <div className="flex items-center max-w-lg mx-auto w-[90%]">
        <Outlet/>
        <Toaster />
      </div>
      <div className="bg-primary"></div>
    </div>
  )
}
