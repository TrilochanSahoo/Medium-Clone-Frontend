import { useState } from "react"
import { ChevronRight, Upload, Home, FileText, Settings, User, Bell, Search, Menu, Sun, Moon } from "lucide-react"
import { TopNavBar } from "../components/Navbar/TopNavBar"
import { LeftNavBar } from "../components/Navbar/LeftNavBar"
import { Card } from "../components/Card"
import { CardContent } from "../components/CardContent"
import { Inputfield } from "../components/Inputfield"
import { Avatar } from "../components/Avatar"


export const UserProfile = ()=>{
  const [avatarSrc, setAvatarSrc] = useState("/placeholder.svg?height=128&width=128")
  const [activeMenuItem, setActiveMenuItem] = useState("profile")
  // const { theme, setTheme } = useTheme()

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setAvatarSrc(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  // const toggleDarkMode = () => {
  //   setTheme(theme === "dark" ? "light" : "dark")
  // }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Navbar */}
      {/* <header className='bg-white shadow-sm'>
        <TopNavBar isCardView={true} CardViewBtnHandler = {()=>{}} ></TopNavBar>
      </header> */}
      <LeftNavBar></LeftNavBar>

      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-card border-b px-4 py-3 flex items-center justify-between">
        <TopNavBar isCardView={true} CardViewBtnHandler = {()=>{}} ></TopNavBar>
        </header>
      


        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="w-auto mx-16 space-y-6">
            {/* Breadcrumb */}
            {/* <div className="flex items-center text-sm text-muted-foreground">
              <span>My profile</span>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span>Edit Profile</span>
              <div className="ml-auto">
                <button className="bg-primary hover:bg-primary/90">
                  Save
                  <ChevronRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div> */}
            

            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                  <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                    <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                    </svg>
                    Edit Profile
                  </a>
                </li>
                
                <li>
                  <div className="flex items-center">
                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Saved Posts</a>
                  </div>
                </li>
                
              </ol>
            </nav>


            {/* Main Form */}
            <Card>
              <CardContent className="pt-6 bg-gray-300">
                <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
                  {/* Profile Photo */}
                  <div className="text-center">
                    {/* <Avatar className="w-32 h-32 mx-auto mb-4">
                      <AvatarImage src={avatarSrc} alt="Profile photo" />
                      <AvatarFallback>GK</AvatarFallback>
                    </Avatar> */}
                    <div className="w-32 h-32 mx-auto mb-4">
                      <img className='aspect-square h-full w-full' src="https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                      {/* <div className='flex h-full w-full items-center justify-center rounded-full bg-muted'>
                          {src.author.split(" ").map((n) => n[0]).join("")}
                      </div> */}
                  </div>
                    <label htmlFor="avatar-upload" className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      <div className="flex items-center justify-center text-sm text-primary hover:text-primary/90">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload new photo
                      </div>
                      {/* <Input
                        id="avatar-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleAvatarChange}
                      /> */}
                      <input type="file" id="avatar-upload" className="hidden" onChange={handleAvatarChange} accept="image/*"/>
                    </label>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 w-3/5">
                        <Inputfield label="First Name" inpType="text" inpId="firstName" inpName="firstName" inpPlaceholder="firstName" onChange={()=>{}}></Inputfield>
                      </div>
                      <div className="space-y-2 w-3/5">
                        <Inputfield label="Last Name" inpType="text" inpId="lastName" inpName="lastName" inpPlaceholder="lastName" onChange={()=>{}}></Inputfield>
                      </div>
                    </div>

                    <div className="space-y-2 w-4/5">
                    <Inputfield label="Email" inpType="email" inpId="email" inpName="email" inpPlaceholder="email" onChange={()=>{}}></Inputfield>
                      
                    </div>

                    <div className="space-y-2 w-4/5">
                    <Inputfield label="phone" inpType="tel" inpId="phone" inpName="phone" inpPlaceholder="phone" onChange={()=>{}}></Inputfield>
                    </div>

                    <div className="space-y-2 w-4/5">
                    <Inputfield label="Address" inpType="text" inpId="Address" inpName="Address" inpPlaceholder="Address" onChange={()=>{}}></Inputfield>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* <div className="space-y-2 w-4/5">
                        <Label htmlFor="gender">Gender</Label>
                        <Select defaultValue="male">
                          <SelectTrigger id="gender">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div> */}
                      <div className="space-y-2 w-4/5">
                      <Inputfield label="Date of Birth" inpType="date" inpId="birthdate" inpName="birthdate" inpPlaceholder="birthdate" onChange={()=>{}}></Inputfield>
                        
                      </div>
                    </div>

                    <div className="space-y-2 w-4/5">
                    <label className="block text-sm font-medium text-gray-700">Bio</label>
                    <textarea className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" name="bio" id="bio" onChange={()=>{}}></textarea>
                    </div>

                    {/* <div className="space-y-2">
                      <Label htmlFor="twitter">Twitter</Label>
                      <Input id="twitter" placeholder="twitter.com/example" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn</Label>
                      <Input id="linkedin" placeholder="linkedin.com/in/example" />
                    </div> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        </div>
      </div>
  )
}