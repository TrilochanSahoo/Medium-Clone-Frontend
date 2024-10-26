import { useState } from "react";
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Badge } from "@/components/ui/badge"
import {
  CalendarIcon,
  ClockIcon,
  SearchIcon,
  MenuIcon,
  XIcon,
  LayoutGridIcon,
  LayoutListIcon,
} from "lucide-react";
// import Link from "next/link"

export const Blogs = () => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isCardView, setIsCardView] = useState(true);

  const categories = ["All", "Technology", "Design", "Business", "Lifestyle"];
  const blogPosts = [
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

  return (
    <div className='min-h-screen bg-gray-50'>
      <header className='bg-white shadow-sm'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              {/* <Link href="/" className="flex items-center"> */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='w-6 h-6 mr-2 text-blue-600'
              >
                <path d='M12 19l7-7 3 3-7 7-3-3z'></path>
                <path d='M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z'></path>
                <path d='M2 2l7.586 7.586'></path>
                <circle cx='11' cy='11' r='2'></circle>
              </svg>
              <span className='font-bold text-xl text-gray-900'>
                TechInsight
              </span>
              {/* </Link> */}
            </div>
            <div className='flex items-center'>
              <div
                className={`relative ${
                  isSearchExpanded ? "w-64" : "w-0"
                } transition-all duration-300 ease-in-out overflow-hidden`}
              >
                <input
                  className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10 pr-4'
                  type='search'
                  placeholder='Search blog posts...'
                ></input>
                <SearchIcon className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
              </div>
              <button
                className='ml-2 h-10 w-10 hover:bg-accent hover:text-accent-foreground'
                onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                aria-label={isSearchExpanded ? "Close search" : "Open search"}
              >
                {isSearchExpanded ? (
                  <XIcon className='h-5 w-5' />
                ) : (
                  <SearchIcon className='h-5 w-5' />
                )}
              </button>
              <button
                className='ml-2 h-10 w-10 hover:bg-accent hover:text-accent-foreground'
                onClick={() => setIsCardView(!isCardView)}
                aria-label={
                  isCardView ? "Switch to list view" : "Switch to card view"
                }
              >
                {isCardView ? (
                  <LayoutListIcon className='h-5 w-5' />
                ) : (
                  <LayoutGridIcon className='h-5 w-5' />
                )}
              </button>
              <button
                className='ml-2 h-10 w-10 hover:bg-accent hover:text-accent-foreground lg:hidden'
                aria-label='Open menu'
              >
                <MenuIcon className='h-5 w-5' />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold text-gray-900 mb-6'>
          Latest Blog Posts
        </h1>

        <div className='flex flex-wrap gap-2 mb-8'>
          {categories.map((category) => (
            <button
              key={category}
              className='h-9 rounded-md px-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground'
            >
              {category}
            </button>
          ))}
        </div>

        <div
          className={`grid gap-8 ${
            isCardView ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
          }`}
        >
          {blogPosts.map((post, index) => (
            // card
            <div
              key={index}
              className={`rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
                isCardView ? "" : "flex"
              }`}
            >
              <img
                src={post.image}
                alt={post.title}
                className={`object-cover ${
                  isCardView ? "w-full h-48" : "w-1/3 h-full"
                }`}
              />
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
                    {post.excerpt}
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {post.tags.map((tag, tagIndex) => (
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
                        alt={post.author}
                      />

                      <div className='flex h-full w-full items-center justify-center rounded-full bg-muted'>
                        {post.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    </div>
                    <span className='text-sm font-medium'>{post.author}</span>
                  </div>
                  <div className='flex items-center text-sm text-muted-foreground'>
                    <CalendarIcon className='w-4 h-4 mr-1' />
                    {post.date}
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

