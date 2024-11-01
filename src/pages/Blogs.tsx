import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Badge } from "@/components/ui/badge"

import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BlogTitleCard } from "../components/Card/BlogTitleCard";
import { TopNavBar } from "../components/Navbar/TopNavBar";
import { LeftNavBar } from "../components/Navbar/LeftNavBar";
import { Footer } from "../components/Navbar/Footer";
// import Link from "next/link"


interface Blog {
  title : string,
  content : string,
  category : string,
  tag : string,
  readTime : string,
  image : string,
  published : boolean,
  publishedDate : string,
  authorId : string
}

export const Blogs = () => {
  
  const [isCardView, setIsCardView] = useState(true);
  const [blogPosts,setBlogPosts] = useState<Blog[]>([])
  const navigate = useNavigate()

  const categories = ["All", "Technology", "Design", "Business", "Lifestyle"];
  const blogPost = [
    {
      title: "The Future of Artificial Intelligence in 2024",
      excerpt:
        "Explore the groundbreaking advancements in AI and how they're reshaping industries across the globe.",
      author: "Dr. Jane Smith",
      date: "2024-05-15",
      readTime: "8 min read",
      category: "Technology",
      tags: ["AI", "Machine Learning", "Future Tech"],
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Mastering the Art of Minimalist Design",
      excerpt:
        "Discover how to create stunning, clutter-free designs that captivate users and improve user experience.",
      author: "Alex Chen",
      date: "2024-05-12",
      readTime: "6 min read",
      category: "Design",
      tags: ["UX/UI", "Minimalism", "Web Design"],
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The Rise of Sustainable Business Practices",
      excerpt:
        "Learn how companies are adopting eco-friendly strategies to reduce their carbon footprint and appeal to conscious consumers.",
      author: "Emma Green",
      date: "2024-05-10",
      readTime: "7 min read",
      category: "Business",
      tags: ["Sustainability", "Green Business", "Corporate Responsibility"],
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  useEffect(()=>{
    const apiUrl:string = `${BACKEND_URL}api/v1/blog/bulk`
    const token = localStorage.getItem("token")
    if(token){
      async function fetchBlog(){
        await axios({
          method : "get",
          url : apiUrl,
          headers : {
            authorization : `Bearer ${token}`
          }
        })
        .then(function (res){
          setBlogPosts(res.data.blogInfo)
        })
      }

      fetchBlog()
    }
    else{
      navigate("/signin")
    }
    
  },[])

  const CardViewBtnHandler = ()=>{
    setIsCardView(!isCardView)
  }

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      <header className='bg-white shadow-sm'>
        <TopNavBar isCardView={isCardView} CardViewBtnHandler = {CardViewBtnHandler} ></TopNavBar>
      </header>

      <LeftNavBar></LeftNavBar>

      <main className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold text-gray-900 mb-6'>
          Latest Blog Posts
        </h1>

        {/* category */}
        <div className='flex flex-wrap gap-2 mb-8'>
          {categories.map((category) => (
            <button key={category} className='h-9 rounded-md px-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground'>
              {category}
            </button>
          ))}
        </div>

        {/* BlogCard */}

        <div className={`grid gap-8 ${isCardView ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
          {blogPosts.map((post, index) => (
            <BlogTitleCard post={post} index={index} isCardView={isCardView}></BlogTitleCard>
          ))}
        </div>
      </main>

      
      <Footer></Footer>
      
    </div>
  );
};

