import { useState, useEffect, useCallback, MouseEventHandler } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BlogTitleCard } from "../components/Card/BlogTitleCard";
import { TopNavBar } from "../components/Navbar/TopNavBar";
import { LeftNavBar } from "../components/Navbar/LeftNavBar";
import { Footer } from "../components/Navbar/Footer";

interface author{
  name : string
}
interface Blog {
  id : string,
  title : string,
  content : string,
  category : string,
  tag : string,
  readTime : string,
  image : string,
  publishedDate : string,
  authorId : string,
  author : author
}

export const Blogs = () => {
  
  const [isCardView, setIsCardView] = useState(true);
  const [blogPosts,setBlogPosts] = useState<Blog[]>([])
  const navigate = useNavigate()

  const categories = ["All", "Technology", "Design", "Business", "Lifestyle"];

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

  const btnSearchHandler = async(e : React.MouseEvent<HTMLButtonElement>)=>{
    const token = localStorage.getItem("token")
    const url = `${BACKEND_URL}api/v1/blog/search`
    const btnText =  e.currentTarget.innerText
    const payload = {
      type : "category",
      info : btnText
    }
    try {
      if (btnText == "All"){
        const res = await axios({
          method : "get",
          url : `${BACKEND_URL}api/v1/blog/bulk`,
          headers : {
            authorization : `Bearer ${token}`
          }
        })
        
        if(res.status==200){
          setBlogPosts(res.data.blogInfo)
        }
      }
      else{
        const res = await axios({
          method : "post",
          url : url,
          headers : {
            authorization : `Bearer ${token}`
          },
          data : payload
        })
        
        if(res.status==200){
          setBlogPosts(res.data.bloginfo)
        }
      }
    } catch (error) {
      console.log(error)
    }
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
            <button key={category} onClick={btnSearchHandler} className='h-9 rounded-md px-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground'>
              {category}
            </button>
          ))}
        </div>

        {/* BlogCard */}

        <div className={`grid gap-8 ${isCardView ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
          {blogPosts.map((post, index) => (
            <BlogTitleCard post={post} index={index} isCardView={isCardView} onClick={()=>{
              navigate(`/blog?id=${post.id}`)
            }}></BlogTitleCard>
          ))}
        </div>
      </main>
      <Footer></Footer>
      
    </div>
  );
};

