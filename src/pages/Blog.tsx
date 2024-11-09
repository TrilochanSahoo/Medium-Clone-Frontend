import { useState, useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { CalendarIcon, ClockIcon, ThumbsUpIcon, MessageCircleIcon, ShareIcon, SearchIcon } from "lucide-react"
import { Button } from "../components/Button"
import { Avatar } from "../components/Avatar"
import { LeftNavBar } from "../components/Navbar/LeftNavBar"
import { Footer } from "../components/Navbar/Footer"
import { BACKEND_URL } from "../config"
import axios from "axios"

interface post{
    title : string,
    category: string,
    author: string,
    authorAvatar: string,
    publishedDate: string,
    readTime: string,
    image: string,
    content : string
}

export const Blog = () => {
  const [isLiked, setIsLiked] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [searchParams] = useSearchParams()


  const posts = {
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
    `,
  }
  const [post, setPosts] = useState<post>(posts)

  useEffect(()=>{
    const url = `${BACKEND_URL}api/v1/blog/${searchParams.get("id")}`
    const token = localStorage.getItem("token")
    const loadContent = async()=>{
      await axios({
        method: "get",
        url : url,
        headers : {
          Authorization : `Bearer ${token}`
        }
      })
      .then(function(res){
        console.log(res.data.blogInfo)
        setPosts(res.data.blogInfo)
      })
    }
    loadContent()
  },[])

  const tableOfContents = [
    { id: "introduction", title: "Introduction" },
    { id: "current-state", title: "Current State of AI" },
    { id: "emerging-trends", title: "Emerging Trends" },
    { id: "ethical-considerations", title: "Ethical Considerations" },
    { id: "conclusion", title: "Conclusion" },
  ]

  const navLinks = [
    { href: "#", label: "Design Resources" },
    { href: "#", label: "Process" },
    { href: "#", label: "Videos" },
    { href: "#", label: "Inspiration" },
    { href: "#", label: "Teams" },
    { href: "#", label: "Design" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    tableOfContents.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-white border-b fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* <Link href="/" className="flex items-center"> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 mr-2 text-blue-600"
              >
                <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                <path d="M2 2l7.586 7.586"></path>
                <circle cx="11" cy="11" r="2"></circle>
              </svg>
              <span className="font-bold text-xl text-gray-900">TechInsight</span>
            {/* </Link> */}
            <nav className="hidden md:flex space-x-4">
              {navLinks.map((link) => (
                <Link key={link.label} to={link.href} className="text-gray-600 hover:text-gray-900">
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <Button className="h-10 w-10 hover:bg-accent hover:text-accent-foreground ">
                <SearchIcon className="h-5 w-5" />
              </Button>
              
              <Button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground hidden md:inline-flex">
                Subscribe
              </Button>
              {/* <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <MenuIcon className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <Link key={link.label} href={link.href} className="text-gray-600 hover:text-gray-900">
                        {link.label}
                      </Link>
                    ))}
                    <Button variant="outline">Subscribe</Button>
                  </nav>
                </SheetContent>
              </Sheet> */}
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex mt-16">
        {/* Left Sidebar */}

        <LeftNavBar></LeftNavBar>

        {/* Main Content */}
        <main className="flex-1 ml-16 mr-0 md:mr-64">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8 mb-12">
              <div className="lg:w-1/2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={post.image}
                    alt="Blog post header image"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-yellow-500/20"></div>
                </div>
              </div>
              <div className="lg:w-1/2 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-sm font-semibold text-purple-600">{post.category}</span>
                </div>
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <div className="flex items-center mb-4">
                  {/* <Avatar className="w-10 h-10 mr-4 relative flex shrink-0 overflow-hidden rounded-full" src={post}>
                  </Avatar> */}
                  <div>
                    <p className="font-semibold">{post.author}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      <span>{post.publishedDate.split("T")[0]}</span>
                      <span className="mx-2">•</span>
                      <ClockIcon className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <article className="prose max-w-none lg:prose-lg" dangerouslySetInnerHTML={{ __html: post.content }}/>

            {/* like and comment section */}
            <div className="flex items-center space-x-4 mt-8">
              <Button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground" 
              // onClick={() => setIsLiked(!isLiked)}
              >
                <ThumbsUpIcon className={`h-5 w-5 mr-2 ${isLiked ? "text-blue-500" : ""}`} />
                {isLiked ? "Liked" : "Like"}
              </Button>
              <Button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                <MessageCircleIcon className="h-5 w-5 mr-2" />
                Comment
              </Button>
              <Button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                <ShareIcon className="h-5 w-5 mr-2" />
                Share
              </Button>
            </div>

          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-64 border-l p-6 fixed right-0 top-16 bottom-0 overflow-y-auto hidden md:block">
          <h3 className="font-semibold text-lg mb-4">Table of Contents</h3>
          <div className="h-[calc(100vh-8rem)] ">
            <nav>
              {tableOfContents.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`block py-2 text-sm ${
                    activeSection === section.id
                      ? "text-blue-600 font-semibold"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>
      </div>

      <Footer></Footer>
    </div>
  )
}