import { CalendarDays, MapPin, Twitter, Instagram, Linkedin } from "lucide-react"
import { Card } from "./Card"
import { Button } from "./Button"
import { Avatar } from "./Avatar"

export const UserProfileCard = ()=>{
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
  
  const post = {
    title: "The Future of AI: Transforming Industries and Reshaping Our World",
    category: "TECHNOLOGY",
    author: "Dr. Jane Smith",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    publishedDate: "May 15, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>Artificial Intelligence (AI) has been rapidly evolving, transforming industries and reshaping our daily lives. As we look ahead to the future, the potential applications and implications of AI are both exciting and profound.</p>
      
      <h2 id="current-state">Current State of AI</h2>
      <p>In recent years, we've seen significant advancements in machine learning, natural language processing, and computer vision. These developments have led to more sophisticated AI systems capable of performing complex tasks with increasing accuracy and efficiency.</p>
      
      <h2 id="emerging-trends">Emerging Trends</h2>
      <p>Several key trends are expected to shape the AI landscape in the coming years:</p>
      <ul>
        <li>Explainable AI (XAI)</li>
        <li>AI-powered cybersecurity</li>
        <li>Edge AI</li>
        <li>AI in healthcare</li>
      </ul>
      
      <h2 id="ethical-considerations">Ethical Considerations</h2>
      <p>As AI becomes more prevalent, addressing ethical concerns and establishing guidelines for responsible AI development and deployment will be crucial.</p>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>The future of AI promises groundbreaking advancements across various sectors. As we embrace these technologies, it's essential to consider both the opportunities and challenges they present.</p>
    `
  }

  return (
    <div>
      {/* <HoverCardTrigger asChild> */}
        <button className="text-primary underline-offset-4 hover:underline text-base font-semibold inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
          {author.name}
        </button>
      {/* </HoverCardTrigger> */}
      <div className="w-80 p-0 z-50 rounded-md border bg-popover  text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
        <Card className="border-none shadow-none">
          <div className="p-6 bg-gradient-to-br from-purple-300 to-purple-100 rounded-t-lg">
            <div className="flex justify-between items-start">
              <Avatar className="h-20 w-20 border-4 border-white" src={post}>
              </Avatar>
              <div className="bg-white text-purple-600 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                {author.posts} posts
              </div>
            </div>
            <div className="mt-4 space-y-1">
              <h4 className="text-lg font-semibold">{author.name}</h4>
              <p className="text-sm text-purple-800">{author.role}</p>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-sm text-gray-600">{author.bio}</p>
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="mr-2 h-4 w-4" />
              <span>{author.location}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <CalendarDays className="mr-2 h-4 w-4" />
              <span>Joined {author.joined}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>{author.followers.toLocaleString()} followers</span>
              <a href={`mailto:${author.email}`} className="text-purple-600 hover:underline">
                {author.email}
              </a>
            </div>
            <div className="flex space-x-2">
              <Button className="flex-1 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                <Twitter className="mr-2 h-4 w-4" />
                Twitter
              </Button>
              <Button className="flex-1 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                <Instagram className="mr-2 h-4 w-4" />
                Instagram
              </Button>
              <Button className="flex-1 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}