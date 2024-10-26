interface Props {
    className?: string;
    children?: React.ReactNode;
    // Any other props you want to pass to the wrapped element
}

export const Card = ({className="",children}:Props)=>{
    return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>
        {children}
    </div>
    )
}