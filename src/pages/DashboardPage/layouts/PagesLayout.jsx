import { PlayCircleIcon } from "lucide-react"

const PagesLayout = ({headerText, buttonText, children}) => {
  return (
    <div className="p-10 flex flex-col gap-y-16">
        <div className="flex ">
            <h1 className="text-3xl font-bold">{headerText}</h1>
            <button className="bg-primary text-white px-6 py-3 ml-auto rounded-lg flex">
              <PlayCircleIcon />
              {buttonText}</button>

        </div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default PagesLayout