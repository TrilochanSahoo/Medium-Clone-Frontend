interface Post {
    title?: string
    category?: string
    author: string
    authorAvatar?: string
    date?: string
    readTime?: string
    headerImage?: string
    content : string
}
interface Avatar {
    className ?: string;
    src : Post;
}

export const Avatar = ({className,src}:Avatar)=>{
    return (
        <div className={className}>
            <img className='aspect-square h-full w-full' src="https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={src.author}/>
            <div className='flex h-full w-full items-center justify-center rounded-full bg-muted'>
                {src.author.split(" ").map((n) => n[0]).join("")}
            </div>
        </div>
    )
}