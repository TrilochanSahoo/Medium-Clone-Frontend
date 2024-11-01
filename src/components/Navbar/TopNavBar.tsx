import {SearchIcon, MenuIcon, XIcon, LayoutGridIcon, LayoutListIcon} from "lucide-react";
import { useState } from "react";

interface TopNavProps {
    isCardView : boolean,
    CardViewBtnHandler : ()=>void
}

export const TopNavBar = ({isCardView, CardViewBtnHandler} : TopNavProps)=>{
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);

    return (
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
              <button className='ml-2 h-10 w-10 hover:bg-accent hover:text-accent-foreground' onClick={CardViewBtnHandler} aria-label={isCardView ? "Switch to list view" : "Switch to card view"}>
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
    )
}