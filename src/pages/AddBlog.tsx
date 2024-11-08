import { useState, useEffect, useCallback, useRef, FocusEvent } from "react"

import { CalendarIcon, ImageIcon, Link2Icon, Bold, Italic, List, ListOrdered, Undo, Redo, Code, Quote, LayoutDashboard, FileText, Settings, LogOut, ChevronDown } from "lucide-react"
import JoditEditor from "jodit-react"
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { CardContent } from "../components/CardContent"
import { Link, replace, useNavigate } from "react-router-dom"
import { TopNavBar } from "../components/Navbar/TopNavBar"
import { LeftNavBar } from "../components/Navbar/LeftNavBar"
import { Avatar } from "../components/Avatar"
import axios from "axios"
import { BACKEND_URL } from "../config"

// Mock data for tag suggestions and image gallery
const tagSuggestions = ["Technology", "Web Development", "React", "JavaScript", "UI/UX", "Design", "Programming"]
const imageGallery = [
  { id: 1, src: "/placeholder.svg?height=100&width=100", alt: "Image 1" },
  { id: 2, src: "/placeholder.svg?height=100&width=100", alt: "Image 2" },
  { id: 3, src: "/placeholder.svg?height=100&width=100", alt: "Image 3" },
  { id: 4, src: "/placeholder.svg?height=100&width=100", alt: "Image 4" },
]

export const AddBlog = ()=> {

  


  const [isPublished, setIsPublished] = useState(false)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [category,setCategory] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [selectedImage, setSelectedImage] = useState(null)
  const [wordCount, setWordCount] = useState(0)
  const [readingTime, setReadingTime] = useState(0)
  const [publishedDate, setPublishedDate] = useState("")
  const navigate = useNavigate()
  let isBlogExist : boolean = false
  let blogId : string = ""

  const editors = useRef(null)

  const dateInputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = (event: FocusEvent<HTMLInputElement>) => {
    // Check if the ref exists, then trigger the date picker
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
    }
  };

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
    height: '450px',
    width: 'auto',
    // enableDragAndDropFileToEditor: true,
    // buttons: [
    //     'bold',
    //     'italic',
    //     'underline',
    //     '|',
    //     'ul',
    //     'ol',
    //     '|',
    //     'font',
    //     'fontsize',
    //     'brush',
    //     'paragraph',
    //     '|',
    //     'image',
    //     'table',
    //     'link',
    //     '|',
    //     'left',
    //     'center',
    //     'right',
    //     'justify',
    //     '|',
    //     'undo',
    //     'redo',
    //     '|',
    //     'hr',
    //     'eraser',
    //     'fullsize',
    // ],
    // uploader: { insertImageAsBase64URI: true },
    // removeButtons: ['brush', 'file'],
    showXPathInStatusbar: false,
    showCharsCounter: false,
    showWordsCounter: true,
    toolbarAdaptive: true,
    toolbarSticky: true,
    // style: {
    //     background: '#27272E',
    //     color: 'rgba(255,255,255,0.5)',
    // },
  }


  // const editor = useEditor({
  //   extensions: [
  //     StarterKit,
  //     Image,
  //   ],
  //   content: content,
  //   onUpdate: ({ editor }) => {
  //     const newContent = editor.getHTML()
  //     setContent(newContent)
  //     updateWordCountAndReadingTime(newContent)
  //   },
  // })

  // const updateWordCountAndReadingTime = useCallback((text) => {
  //   const words = text.split(/\s+/).filter(word => word.length > 0)
  //   const wordCount = words.length
  //   const readingTime = Math.ceil(wordCount / 200) // Assuming 200 words per minute reading speed
  //   setWordCount(wordCount)
  //   setReadingTime(readingTime)
  // }, [])

  useEffect(() => {
    const autoSaveInterval = setInterval(() => {
      console.log("Auto-saving...")
      
      console.log(new Date().toISOString())
      // Implement your auto-save logic here
    }, 60000) // Auto-save every minute

    return () => clearInterval(autoSaveInterval)
  }, [])

  const addTag = (e: React.ChangeEvent<{ value: unknown }>) => {
    if (!tags.includes(e.target.value as string)) {
      setTags([...tags, e.target.value as string])
    }
  }

  const removeTag = (tag:string) => {
    setTags(tags.filter(t => t !== tag))
  }

  const addCategory = (e : React.ChangeEvent<{ value: string }>)=>{
    setCategory(e.target.value)
  }


  const saveBlogHandler = async ()=>{
    const url : string = `${BACKEND_URL}api/v1/blog`
    const payload = {
      title : title,
      category : category,
      content : content,
      readTime : `${readingTime} min read`,
      tag : tags.toString(),
      image : "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      published : isPublished,
      publishedDate : "2024-10-23T18:25:43.511Z"
    }

    const authToken = `Bearer ${localStorage.getItem("token")}`
    
    try {
      const res = await axios({
        method : 'post',
        url : url,
        headers : {
          authorization : authToken
        },
        data : payload
      })

      if(res.status==200){
        alert(res.data.message)
        isBlogExist = true
        blogId = res.data.BlogInfo.id
        
      }
      else{
        alert(res.data.message)
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  const updateBlogHandler = async ()=>{
    const url : string = `${BACKEND_URL}api/v1/blog`
    const payload = {
      blogId : blogId,
      title : title,
      category : category,
      content : content,
      readTime : `${readingTime} min read`,
      tag : tags.toString(),
      image : "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      published : isPublished,
      publishedDate : "2024-10-23T18:25:43.511Z"
    }

    const authToken = `Bearer ${localStorage.getItem("token")}`
    try {
      const res = await axios({
        method : "put",
        url : url,
        headers : {
          Authorization : authToken
        },
        data : payload
      })

      if (res.status==200){
        alert(res.data.message)
        navigate(`/Blog?id=${blogId}`)
      }
      else{
        alert(res.data.message)
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Left Navigation Bar */}
      {/* <nav className="w-64 bg-gray-100 border-r p-4 hidden md:block"> */}
        {/* <aside className="w-16 bg-gray-100 border-r flex flex-col items-center py-8 space-y-6 fixed left-0 top-16 bottom-0"> */}


          {/* <Button variant="ghost" size="icon" className="w-full">
            <LayoutDashboard className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="w-full">
            <FileText className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="w-full">
            <Settings className="h-5 w-5" />
          </Button> */}
          {/* <Button className="text-gray-600 h-10 w-10 hover:bg-accent hover:text-accent-foreground hover:text-gray-900">
            <Link to="/blogs" >
              <LayoutDashboard className="w-6 h-6 mx-auto" />
            </Link>
          </Button>
          <Button className="text-gray-600 h-10 w-10 hover:bg-accent hover:text-accent-foreground hover:text-gray-900">
            <FileText className="w-6 h-6 mx-auto" />
          </Button>
          <Button className="text-gray-600 h-10 w-10 hover:bg-accent hover:text-accent-foreground hover:text-gray-900">
            <Settings className="w-6 h-6 mx-auto" />
          </Button> */}
        {/* </div> */}
        {/* </aside> */}
      {/* </nav> */}

      <header className='bg-white shadow-sm'>
        <TopNavBar isCardView={true} CardViewBtnHandler = {()=>{}} ></TopNavBar>
      </header>

      <LeftNavBar></LeftNavBar>

      <div className="flex-1 flex flex-col">
        <header className="border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* <h1 className="text-2xl font-bold">Enhanced Blog Editor</h1> */}
              <div className="flex items-center space-x-4">
                {/* <Switch
                  id="published"
                  checked={isPublished}
                  onCheckedChange={setIsPublished}
                />
                <Label htmlFor="published">
                  {isPublished ? "Published" : "Draft"}
                </Label> */}
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" 
                  onClick={()=>{
                     const res = isBlogExist ? updateBlogHandler() : saveBlogHandler()
                    }}
                    >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                    Save
                  </span>
                </button>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white  focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800" 
                  onClick={()=>{
                    setIsPublished(true)
                    const res = isBlogExist ? updateBlogHandler() : saveBlogHandler()
                    }}>
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                    Publish
                  </span>
                </button>
                
              </div>
            </div>
          </div>
        </header>

        <main >
          <div className="container mx-auto px-4 py-8">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2 space-y-6">
                <textarea placeholder="Enter your blog title" className="text-xl w-full h-20 p-2" value={title}
                  onChange={(e) => setTitle(e.target.value)}/>

                <div className="w-full">
                  <div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <JoditEditor
                        // config = {config} 
                        value = {content} 
                      
                        onBlur={(newContent)=>{
                        setContent(newContent)
                        console.log(newContent)}}

                        // onChange={(newContent)=>{
                        //   setContent(newContent)
                        //   console.log(newContent)}}
                          ></JoditEditor>
                  </div>
                </div>



                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Word count: {wordCount}</span>
                  <span>Estimated reading time: {readingTime} min</span>
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-4 space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="category">
                        Summary  
                      </label>
                      <textarea id="Summary" placeholder="Add Summary" className="flex h-10 w-full items-center justify-between rounded-md cursor-pointer border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"></textarea>
                      
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 space-y-4">
                    {/* single select */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="category">
                        Category 
                      </label>
                      <select id="category" className="flex h-10 w-full items-center justify-between rounded-md cursor-pointer border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
                      onChange={addCategory}>
                          <option value="" disabled selected>
                            Select your Category
                          </option>
                          <option value="Technology" >Technology</option>
                          <option value="Lifestyle" >Lifestyle</option>
                          <option value="Travel" >Travel</option>
                          <option value="Food">Food</option>
                      </select>
                    </div>

                    {/* Multiselect Tags */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="tags">
                        Tags 
                      </label>
                      
                      <div className="flex flex-wrap gap-2 mb-2">
                        {tags.map(tag => (
                          <div key={tag} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80" onClick={() => removeTag(tag)}>
                            {tag} ✕
                          </div>
                        ))}
                      </div>
                      <select id="tag" onChange={addTag} 
                      className="flex h-10 w-full items-center justify-between rounded-md cursor-pointer border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1">
                          <option value="" disabled selected>
                            Add a tag
                          </option>
                          {tagSuggestions.map(tag=>(
                            <option key={tag} value={tag} >{tag}</option>
                          ))}
                      </select>
                    </div>


                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="featured-image">
                        Featured Image
                      </label>
                      {/* <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline">
                            <ImageIcon className="mr-2 h-4 w-4" /> Select Image
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <ScrollArea className="h-[300px] p-4">
                            <div className="grid grid-cols-2 gap-4">
                              {imageGallery.map((image) => (
                                <div
                                  key={image.id}
                                  className={`cursor-pointer border-2 rounded ${selectedImage === image.id ? 'border-primary' : 'border-transparent'}`}
                                  onClick={() => setSelectedImage(image.id)}
                                >
                                  <img src={image.src} alt={image.alt} className="w-full h-auto" />
                                </div>
                              ))}
                            </div>
                          </ScrollArea>
                        </DialogContent>
                      </Dialog>
                      {selectedImage && (
                        <p className="text-sm text-muted-foreground">Selected image: {selectedImage}</p>
                      )} */}
                    </div>

                    <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="tags">
                        Author
                      </label>
                      <div className="flex items-center space-x-4">
                        
                        <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                          <img className='aspect-square h-full w-full' src="https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                          <div className='flex h-full w-full items-center justify-center rounded-full bg-muted'>
                            JD
                          </div>
                      </div>
                        <div>
                          <p className="font-medium">John Doe</p>
                          <p className="text-sm text-muted-foreground">john@example.com</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="tags">
                        Publish Date 
                      </label>
                      <div className="relative max-w-sm">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                          </svg>
                        </div>
                        <input id="default-datepicker" type="date" className="bg-gray-50 border tracking-wide border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5 " placeholder="Select date"
                        ref={dateInputRef}
                        onFocus={handleInputFocus}
                        onChange={(e)=>{
                          setPublishedDate(e.target.value)
                        }}/>
                      </div>
                      
                    </div>
                  </CardContent>
                </Card>

                {/* <Card>
                  <CardContent className="p-4 space-y-4">
                    <h3 className="font-semibold">SEO Settings</h3>
                    <div className="space-y-2">
                      <Label htmlFor="seo-title">SEO Title</Label>
                      <Input id="seo-title" placeholder="Enter SEO title" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="seo-description">SEO Description</Label>
                      <Textarea id="seo-description" placeholder="Enter SEO description" />
                    </div>
                  </CardContent>
                </Card> */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}