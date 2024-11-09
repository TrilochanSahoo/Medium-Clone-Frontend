import { useState } from "react"
import { ChevronRight, Upload, Home, FileText, Settings, User, Bell, Search, Menu, Sun, Moon } from "lucide-react"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet"
// import { useTheme } from "next-themes"

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
    <></>
    // <div className="min-h-screen bg-background flex">
    //   {/* Left Navbar */}
    //   <nav className="hidden md:flex flex-col w-16 bg-card border-r p-4">
    //     <div className="flex flex-col items-center space-y-4">
    //       <Button
    //         variant={activeMenuItem === "dashboard" ? "secondary" : "ghost"}
    //         size="icon"
    //         onClick={() => setActiveMenuItem("dashboard")}
    //       >
    //         <Home className="h-5 w-5" />
    //       </Button>
    //       <Button
    //         variant={activeMenuItem === "posts" ? "secondary" : "ghost"}
    //         size="icon"
    //         onClick={() => setActiveMenuItem("posts")}
    //       >
    //         <FileText className="h-5 w-5" />
    //       </Button>
    //       <Button
    //         variant={activeMenuItem === "profile" ? "secondary" : "ghost"}
    //         size="icon"
    //         onClick={() => setActiveMenuItem("profile")}
    //       >
    //         <User className="h-5 w-5" />
    //       </Button>
    //       <Button
    //         variant={activeMenuItem === "settings" ? "secondary" : "ghost"}
    //         size="icon"
    //         onClick={() => setActiveMenuItem("settings")}
    //       >
    //         <Settings className="h-5 w-5" />
    //       </Button>
    //     </div>
    //   </nav>

    //   <div className="flex-1 flex flex-col">
    //     {/* Top Navbar */}
    //     <header className="bg-card border-b px-4 py-3 flex items-center justify-between">
    //       <div className="flex items-center space-x-4">
    //         <div className="md:hidden">
    //           <Sheet>
    //             <SheetTrigger asChild>
    //               <Button variant="ghost" size="icon">
    //                 <Menu className="h-5 w-5" />
    //               </Button>
    //             </SheetTrigger>
    //             <SheetContent side="left" className="w-64">
    //               <SheetHeader>
    //                 <SheetTitle>BlogCMS</SheetTitle>
    //                 <SheetDescription>Navigation</SheetDescription>
    //               </SheetHeader>
    //               <div className="space-y-2 mt-4">
    //                 <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveMenuItem("dashboard")}>
    //                   <Home className="mr-2 h-4 w-4" /> Dashboard
    //                 </Button>
    //                 <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveMenuItem("posts")}>
    //                   <FileText className="mr-2 h-4 w-4" /> Posts
    //                 </Button>
    //                 <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveMenuItem("profile")}>
    //                   <User className="mr-2 h-4 w-4" /> Profile
    //                 </Button>
    //                 <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveMenuItem("settings")}>
    //                   <Settings className="mr-2 h-4 w-4" /> Settings
    //                 </Button>
    //               </div>
    //             </SheetContent>
    //           </Sheet>
    //         </div>
    //         <div className="flex items-center">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidth="2"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             className="w-6 h-6 mr-2 text-primary"
    //           >
    //             <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
    //             <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
    //             <path d="M2 2l7.586 7.586"></path>
    //             <circle cx="11" cy="11" r="2"></circle>
    //           </svg>
    //           <span className="font-bold text-xl">BlogCMS</span>
    //         </div>
    //       </div>
    //       <div className="flex-1 px-4 md:px-8">
    //         <Input
    //           placeholder="Search..."
    //           className="max-w-sm"
    //           startDecorator={<Search className="h-4 w-4 text-muted-foreground" />}
    //         />
    //       </div>
    //       <div className="flex items-center space-x-4">
    //         <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
    //           {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    //         </Button>
    //         <Button variant="ghost" size="icon">
    //           <Bell className="h-5 w-5" />
    //         </Button>
    //         <Avatar>
    //           <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
    //           <AvatarFallback>U</AvatarFallback>
    //         </Avatar>
    //       </div>
    //     </header>

    //     {/* Main Content */}
    //     <main className="flex-1 overflow-y-auto p-4 md:p-6">
    //       <div className="max-w-4xl mx-auto space-y-6">
    //         {/* Breadcrumb */}
    //         <div className="flex items-center text-sm text-muted-foreground">
    //           <span>My profile</span>
    //           <ChevronRight className="h-4 w-4 mx-2" />
    //           <span>Edit Profile</span>
    //           <div className="ml-auto">
    //             <Button className="bg-primary hover:bg-primary/90">
    //               Save
    //               <ChevronRight className="h-4 w-4 ml-2" />
    //             </Button>
    //           </div>
    //         </div>

    //         {/* Main Form */}
    //         <Card>
    //           <CardContent className="p-6">
    //             <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
    //               {/* Profile Photo */}
    //               <div className="text-center">
    //                 <Avatar className="w-32 h-32 mx-auto mb-4">
    //                   <AvatarImage src={avatarSrc} alt="Profile photo" />
    //                   <AvatarFallback>GK</AvatarFallback>
    //                 </Avatar>
    //                 <Label htmlFor="avatar-upload" className="cursor-pointer">
    //                   <div className="flex items-center justify-center text-sm text-primary hover:text-primary/90">
    //                     <Upload className="h-4 w-4 mr-2" />
    //                     Upload new photo
    //                   </div>
    //                   <Input
    //                     id="avatar-upload"
    //                     type="file"
    //                     accept="image/*"
    //                     className="hidden"
    //                     onChange={handleAvatarChange}
    //                   />
    //                 </Label>
    //               </div>

    //               {/* Form Fields */}
    //               <div className="space-y-6">
    //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //                   <div className="space-y-2">
    //                     <Label htmlFor="firstName">First Name</Label>
    //                     <Input id="firstName" placeholder="Arthur" />
    //                   </div>
    //                   <div className="space-y-2">
    //                     <Label htmlFor="lastName">Last Name</Label>
    //                     <Input id="lastName" placeholder="Nancy" />
    //                   </div>
    //                 </div>

    //                 <div className="space-y-2">
    //                   <Label htmlFor="email">Email</Label>
    //                   <Input id="email" type="email" placeholder="bradley.orta@gmail.com" />
    //                 </div>

    //                 <div className="space-y-2">
    //                   <Label htmlFor="phone">Phone</Label>
    //                   <Input id="phone" placeholder="477-046-1627" />
    //                 </div>

    //                 <div className="space-y-2">
    //                   <Label htmlFor="address">Address</Label>
    //                   <Input id="address" placeholder="196 Jadakuki Strevenue Suite 883" />
    //                 </div>

    //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //                   <div className="space-y-2">
    //                     <Label htmlFor="gender">Gender</Label>
    //                     <Select defaultValue="male">
    //                       <SelectTrigger id="gender">
    //                         <SelectValue placeholder="Select gender" />
    //                       </SelectTrigger>
    //                       <SelectContent>
    //                         <SelectItem value="male">Male</SelectItem>
    //                         <SelectItem value="female">Female</SelectItem>
    //                         <SelectItem value="other">Other</SelectItem>
    //                       </SelectContent>
    //                     </Select>
    //                   </div>
    //                   <div className="space-y-2">
    //                     <Label htmlFor="birthdate">Date of Birth</Label>
    //                     <Input id="birthdate" type="date" />
    //                   </div>
    //                 </div>

    //                 <div className="space-y-2">
    //                   <Label htmlFor="bio">Bio</Label>
    //                   <Input id="bio" placeholder="Land acquisition Specialist" />
    //                 </div>

    //                 <div className="space-y-2">
    //                   <Label htmlFor="twitter">Twitter</Label>
    //                   <Input id="twitter" placeholder="twitter.com/example" />
    //                 </div>

    //                 <div className="space-y-2">
    //                   <Label htmlFor="linkedin">LinkedIn</Label>
    //                   <Input id="linkedin" placeholder="linkedin.com/in/example" />
    //                 </div>
    //               </div>
    //             </div>
    //           </CardContent>
    //         </Card>
    //       </div>
    //     </main>
    //   </div>
    // </div>
  )
}