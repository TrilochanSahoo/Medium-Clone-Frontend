import { useState, useEffect, useCallback } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Switch } from "@/components/ui/switch"
// import { Label } from "@/components/ui/label"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Card, CardContent } from "@/components/ui/card"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
// import { Badge } from "@/components/ui/badge"
// import { ScrollArea } from "@/components/ui/scroll-area"
import { CalendarIcon, ImageIcon, Link2Icon, Bold, Italic, List, ListOrdered, Undo, Redo, Code, Quote, LayoutDashboard, FileText, Settings, LogOut } from "lucide-react"
// import { Editor, EditorContent, useEditor } from '@tiptap/react'
// import StarterKit from '@tiptap/starter-kit'
// import Image from '@tiptap/extension-image'
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { CardContent } from "../components/CardContent"
import { Link } from "react-router-dom"

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
  const [tags, setTags] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)
  const [wordCount, setWordCount] = useState(0)
  const [readingTime, setReadingTime] = useState(0)

//   const editor = useEditor({
//     extensions: [
//       StarterKit,
//       Image,
//     ],
//     content: content,
//     onUpdate: ({ editor }) => {
//       const newContent = editor.getHTML()
//       setContent(newContent)
//       updateWordCountAndReadingTime(newContent)
//     },
//   })

//   const updateWordCountAndReadingTime = useCallback((text) => {
//     const words = text.split(/\s+/).filter(word => word.length > 0)
//     const wordCount = words.length
//     const readingTime = Math.ceil(wordCount / 200) // Assuming 200 words per minute reading speed
//     setWordCount(wordCount)
//     setReadingTime(readingTime)
//   }, [])

//   useEffect(() => {
//     const autoSaveInterval = setInterval(() => {
//       console.log("Auto-saving...")
//       // Implement your auto-save logic here
//     }, 60000) // Auto-save every minute

//     return () => clearInterval(autoSaveInterval)
//   }, [])

//   const addTag = (tag) => {
//     if (!tags.includes(tag)) {
//       setTags([...tags, tag])
//     }
//   }

//   const removeTag = (tag) => {
//     setTags(tags.filter(t => t !== tag))
//   }

//   const MenuBar = ({ editor }) => {
//     if (!editor) {
//       return null
//     }

//     return (
//       <div className="flex flex-wrap gap-2 mb-4">
//         <Button
//           variant="outline"
//           size="icon"
//           onClick={() => editor.chain().focus().toggleBold().run()}
//           disabled={!editor.can().chain().focus().toggleBold().run()}
//           className={editor.isActive('bold') ? 'is-active' : ''}
//         >
//           <Bold className="h-4 w-4" />
//         </Button>
//         <Button
//           variant="outline"
//           size="icon"
//           onClick={() => editor.chain().focus().toggleItalic().run()}
//           disabled={!editor.can().chain().focus().toggleItalic().run()}
//           className={editor.isActive('italic') ? 'is-active' : ''}
//         >
//           <Italic className="h-4 w-4" />
//         </Button>
//         <Button
//           variant="outline"
//           size="icon"
//           onClick={() => editor.chain().focus().toggleBulletList().run()}
//           className={editor.isActive('bulletList') ? 'is-active' : ''}
//         >
//           <List className="h-4 w-4" />
//         </Button>
//         <Button
//           variant="outline"
//           size="icon"
//           onClick={() => editor.chain().focus().toggleOrderedList().run()}
//           className={editor.isActive('orderedList') ? 'is-active' : ''}
//         >
//           <ListOrdered className="h-4 w-4" />
//         </Button>
//         <Button
//           variant="outline"
//           size="icon"
//           onClick={() => editor.chain().focus().toggleCodeBlock().run()}
//           className={editor.isActive('codeBlock') ? 'is-active' : ''}
//         >
//           <Code className="h-4 w-4" />
//         </Button>
//         <Button
//           variant="outline"
//           size="icon"
//           onClick={() => editor.chain().focus().toggleBlockquote().run()}
//           className={editor.isActive('blockquote') ? 'is-active' : ''}
//         >
//           <Quote className="h-4 w-4" />
//         </Button>
//         <Button
//           variant="outline"
//           size="icon"
//           onClick={() => editor.chain().focus().undo().run()}
//           disabled={!editor.can().chain().focus().undo().run()}
//         >
//           <Undo className="h-4 w-4" />
//         </Button>
//         <Button
//           variant="outline"
//           size="icon"
//           onClick={() => editor.chain().focus().redo().run()}
//           disabled={!editor.can().chain().focus().redo().run()}
//         >
//           <Redo className="h-4 w-4" />
//         </Button>
//       </div>
//     )
//   }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Navigation Bar */}
      {/* <nav className="w-64 bg-gray-100 border-r p-4 hidden md:block"> */}
        <aside className="w-16 bg-gray-100 border-r flex flex-col items-center py-8 space-y-6 fixed left-0 top-16 bottom-0">

        
          {/* <Button variant="ghost" size="icon" className="w-full">
            <LayoutDashboard className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="w-full">
            <FileText className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="w-full">
            <Settings className="h-5 w-5" />
          </Button> */}
          <Button className="text-gray-600 h-10 w-10 hover:bg-accent hover:text-accent-foreground hover:text-gray-900">
            <Link to="/blogs" >
              <LayoutDashboard className="w-6 h-6 mx-auto" />
            </Link>
          </Button>
          <Button className="text-gray-600 h-10 w-10 hover:bg-accent hover:text-accent-foreground hover:text-gray-900">
            <FileText className="w-6 h-6 mx-auto" />
          </Button>
          <Button className="text-gray-600 h-10 w-10 hover:bg-accent hover:text-accent-foreground hover:text-gray-900">
            <Settings className="w-6 h-6 mx-auto" />
          </Button>
        {/* </div> */}
        </aside>
      {/* </nav> */}

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
                <Button>Save</Button>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Publish</Button>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-4 py-8">
            <div className="grid gap-8 md:grid-cols-3">
              {/* <div className="md:col-span-2 space-y-6">
                <Input
                  type="text"
                  placeholder="Enter your blog title"
                  className="text-3xl font-bold"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <Tabs defaultValue="write" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="write">Write</TabsTrigger>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                  </TabsList>
                  <TabsContent value="write">
                    <Card>
                      <CardContent className="p-4">
                        <MenuBar editor={editor} />
                        <EditorContent editor={editor} className="min-h-[400px] prose max-w-none" />
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="preview">
                    <Card>
                      <CardContent className="prose max-w-none p-4">
                        <h1>{title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>

                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Word count: {wordCount}</span>
                  <span>Estimated reading time: {readingTime} min</span>
                </div>
              </div> */}

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-4 space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="category">Category</label>
                      
                      <select id="category">
                          <option value="technology">Technology</option>
                          <option value="lifestyle">Lifestyle</option>
                          <option value="travel">Travel</option>
                          <option value="food">Food</option>
                      </select>
                    </div>

                    {/* <div className="space-y-2">
                      <Label htmlFor="tags">Tags</Label>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="cursor-pointer" onClick={() => removeTag(tag)}>
                            {tag} ✕
                          </Badge>
                        ))}
                      </div>
                      <Select onValueChange={addTag}>
                        <SelectTrigger id="tags">
                          <SelectValue placeholder="Add a tag" />
                        </SelectTrigger>
                        <SelectContent>
                          {tagSuggestions.map(tag => (
                            <SelectItem key={tag} value={tag}>{tag}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="featured-image">Featured Image</Label>
                      <Dialog>
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
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label>Author</Label>
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Author"   />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">John Doe</p>
                          <p className="text-sm text-muted-foreground">john@example.com</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Publish Date</Label>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>Pick a date</span>
                      </Button>
                    </div> */}
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

        <footer className="border-t py-4 px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 BlogCMS. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}