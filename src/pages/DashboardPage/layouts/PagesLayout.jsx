import { PlusCircleIcon } from '@heroicons/react/16/solid'
import React from 'react'

const PagesLayout = ({ headerText, buttonText, children, onClick }) => {
    return (
        <div className='p-10 flex flex-col gap-y-16 w-full'>
            <div className='flex justify-between w-full'>
                <h1 className='text-3xl font-bold'>{headerText}</h1>
                <button className='text-white bg-primary px-6 py-2 flex items-center gap-x-2 rounded-full drop-shadow-md' onClick={onClick}><PlusCircleIcon width={20} height={20} />{buttonText}</button>
            </div>
            <div className=''>{children}</div>
        </div>
    )
}

export default PagesLayout




// import { PlayCircleIcon } from "lucide-react"

// const PagesLayout = ({headerText, buttonText, children}) => {
//   return (
//     <div className="p-10 flex flex-col gap-y-16">
//         <div className="flex ">
//             <h1 className="text-3xl font-bold">{headerText}</h1>
//             <button className="bg-primary text-white px-6 py-3 ml-auto rounded-lg flex" onClick={}>
//               <PlayCircleIcon />
//               {buttonText}</button>

//         </div>
//         <div>
//             {children}
//         </div>
//     </div>
//   )
// }

// export default PagesLayout