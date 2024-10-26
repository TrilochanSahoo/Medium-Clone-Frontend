interface ImgSrcType {
    src: string
}

export const ImgPanel = ({src}:ImgSrcType)=>{
    return (
        <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
            <div className="max-w-md text-center">
                <img src={src} alt="Welcome..." width="524.67004" height="531.39694" className="w-full"/>
            </div>
        </div>
    )
}