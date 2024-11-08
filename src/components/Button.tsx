interface Props {
    className?: string;
    children?: React.ReactNode;
    // Any other props you want to pass to the wrapped element
  }

export const Button = ({children, className}:Props)=>{
    return (
        <button className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 ${className}`}>
            {children}
        </button>
    )
}