import { ThreeDots } from "react-loader-spinner"

const PageLoader = () => {
    return (
        <div className="h-screen flex items-center justify-center"> 
            <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}

export default PageLoader