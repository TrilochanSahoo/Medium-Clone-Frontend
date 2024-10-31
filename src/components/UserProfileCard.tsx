// import { Card } from "@/components/ui/card"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "@/components/ui/hover-card"
// import { CalendarDays, MapPin, Twitter, Instagram, Linkedin } from "lucide-react"

export const AuthorPopupCard = ()=>{
  const author = {
    name: "Joeylene Rivera",
    avatar: "/placeholder.svg?height=96&width=96",
    role: "Web Developer",
    bio: "A fullstack web developer and UI/UX designer with experience in web development. ",
    location: "San Francisco, CA",
    joined: "September 2018",
    posts: 142,
    followers: 12500,
    email: "joeylene.rivera@gmail.com",
    twitter: "joeylenerivera",
    instagram: "joeylenerivera",
    linkedin: "joeylene-rivera",
  }

  return (
    // <HoverCard>
    //   <HoverCardTrigger asChild>
    //     <Button variant="link" className="text-base font-semibold">
    //       {author.name}
    //     </Button>
    //   </HoverCardTrigger>
    //   <HoverCardContent className="w-80 p-0">
    //     <Card className="border-none shadow-none">
    //       <div className="p-6 bg-gradient-to-br from-purple-300 to-purple-100 rounded-t-lg">
    //         <div className="flex justify-between items-start">
    //           <Avatar className="h-20 w-20 border-4 border-white">
    //             <AvatarImage src={author.avatar} alt={author.name} />
    //             <AvatarFallback>{author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
    //           </Avatar>
    //           <Badge variant="secondary" className="bg-white text-purple-600">
    //             {author.posts} posts
    //           </Badge>
    //         </div>
    //         <div className="mt-4 space-y-1">
    //           <h4 className="text-lg font-semibold">{author.name}</h4>
    //           <p className="text-sm text-purple-800">{author.role}</p>
    //         </div>
    //       </div>
    //       <div className="p-6 space-y-4">
    //         <p className="text-sm text-gray-600">{author.bio}</p>
    //         <div className="flex items-center text-sm text-gray-500">
    //           <MapPin className="mr-2 h-4 w-4" />
    //           <span>{author.location}</span>
    //         </div>
    //         <div className="flex items-center text-sm text-gray-500">
    //           <CalendarDays className="mr-2 h-4 w-4" />
    //           <span>Joined {author.joined}</span>
    //         </div>
    //         <div className="flex justify-between text-sm text-gray-500">
    //           <span>{author.followers.toLocaleString()} followers</span>
    //           <a href={`mailto:${author.email}`} className="text-purple-600 hover:underline">
    //             {author.email}
    //           </a>
    //         </div>
    //         <div className="flex space-x-2">
    //           <Button variant="outline" size="sm" className="flex-1">
    //             <Twitter className="mr-2 h-4 w-4" />
    //             Twitter
    //           </Button>
    //           <Button variant="outline" size="sm" className="flex-1">
    //             <Instagram className="mr-2 h-4 w-4" />
    //             Instagram
    //           </Button>
    //           <Button variant="outline" size="sm" className="flex-1">
    //             <Linkedin className="mr-2 h-4 w-4" />
    //             LinkedIn
    //           </Button>
    //         </div>
    //       </div>
    //     </Card>
    //   </HoverCardContent>
    // </HoverCard>
    <></>
  )
}