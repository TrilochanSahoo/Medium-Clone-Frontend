import { CalendarIcon, ClockIcon} from "lucide-react";
import { BACKEND_URL } from "../../config";
import axios from "axios";
import { useState } from "react";
import { UserProfileCard } from "../UserProfileCard";

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

interface BlogTitleType {
    index : number,
    post : Blog,
    isCardView : boolean,
    onClick : ()=>void
}

interface UserDetails {
    name: string,
    avatar: string,
    role: string,
    bio: string,
    location: string,
    joined: string,
    posts: number,
    followers: number,
    email: string,
    twitter: string,
    instagram: string,
    linkedin: string

}

export const BlogTitleCard = ({index,post,isCardView,onClick}:BlogTitleType)=>{

  const [userdetails,setUserDetails] = useState<UserDetails>()
  const [loading,setLoading] = useState(true)

  const mouseOverHandler = async (e : React.MouseEvent<HTMLButtonElement | HTMLImageElement>)=>{
    const url = `${BACKEND_URL}api/v1/user/userProfileInfo/${post.authorId}`
    const token = localStorage.getItem("token")
    try{
      // const res = await axios({
      //   method : "get",
      //   url : `url`,
      //   headers : {
      //     authorization : `Bearer ${token}`
      //   }
      // })

      // console.log(res.data)
      setLoading(false)
    }
    catch(error){
      console.log(error)
    }
  }

    return (
        <div key={index} className={`rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 ${isCardView ? "" : "flex"}`} onClick={onClick}>
            <img src={post.image} alt={post.title} className={`object-cover ${isCardView ? "w-full h-48" : "w-1/3 h-full"}`}/>
              <div className={`flex flex-col ${isCardView ? "" : "w-2/3"}`}>
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className='flex justify-between items-center mb-2'>
                    <div className='inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-neutral-100 hover:bg-neutral-200/80'>
                      {post.category}
                    </div>
                    <div className='flex items-center text-sm text-muted-foreground'>
                      <ClockIcon className='w-4 h-4 mr-1' />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className='font-semibold leading-none tracking-tight text-xl mb-2'>
                    {/* <Link href="#" className="hover:text-blue-600 transition-colors duration-200"> */}
                    {post.title}
                    {/* </Link> */}
                  </h3>
                </div>
                {/* card content  */}
                <div className="p-6 pt-0">
                  <p className='text-muted-foreground mb-4'>
                    {post.content}
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {post.tag.split(",").map((tag, tagIndex) => (
                      // badge 
                      <div key={tagIndex} className='inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground'>
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
                {/* card footer  */}
                <div className='flex items-center p-6 justify-between bg-gray-100 mt-auto'>
                  <div className='flex items-center space-x-2'>
                    {/* avatar */}
                    <div className='w-8 h-8 relative flex shrink-0 overflow-hidden rounded-full'>
                      <img
                        className='aspect-square h-full w-full'
                        src="https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        // alt={post.author}
                        onMouseEnter={mouseOverHandler} 
                      />
                      

                      {/* <div className='flex h-full w-full items-center justify-center rounded-full bg-muted'>
                        {post.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div> */}
                    </div>
                    <span className='text-sm font-medium'>{post.author.name}</span>
                  </div>
                  <div className='flex items-center text-sm text-muted-foreground'>
                    <CalendarIcon className='w-4 h-4 mr-1' />
                    {post.publishedDate.split("T")[0]}
                  </div>
                </div>
                {loading?"": <UserProfileCard></UserProfileCard>}
                      <UserProfileCard></UserProfileCard>
              </div>
              
            </div>
    )
}