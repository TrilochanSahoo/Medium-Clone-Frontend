interface Props {
    className?: string;
    children?: React.ReactNode;
    // Any other props you want to pass to the wrapped element
}

export const CardContent = ({className="",children}:Props)=>{
    return (
    <div className={`p-6 pt-0 ${className}`}>
        {children}
    </div>
    )
}