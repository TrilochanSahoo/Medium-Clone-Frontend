import { LayoutDashboard, FileText, Settings } from "lucide-react"
import { Button } from "../Button"
import { Link } from "react-router-dom"


export const LeftNavBar = ()=>{
    return (
        <aside className="w-16 bg-gray-100 border-r flex flex-col items-center py-8 space-y-6 fixed left-0 top-16 bottom-0">
          <Button className="text-gray-600 h-10 w-10 hover:bg-accent hover:text-accent-foreground hover:text-gray-900">
            <Link to="/blogs" >
              <LayoutDashboard className="w-7 h-7" />
            </Link>
          </Button>
          <Button className="text-gray-600 h-10 w-10 hover:bg-accent hover:text-accent-foreground hover:text-gray-900">
            <FileText className="w-6 h-6" />
          </Button>
          <Button className="text-gray-600 h-10 w-10 hover:bg-accent hover:text-accent-foreground hover:text-gray-900">
            <Settings className="w-6 h-6" />
          </Button>
        </aside>
    )
}