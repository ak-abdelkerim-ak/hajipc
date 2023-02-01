import {MdDownload, } from "react-icons/md";

export default function Application({application}){

    return(
        <div className="flex flex-col relative bg-gray-200  rounded-xl transition hover:bg-gray-50 hover:shadow-xl hover:shadow-black ">
            <a className="mr-14 pt-4 text-center text-sky-500 text-xs sm:text-sm  lg:text-lg hover:text-green-400" href="">
                <p className="app-title-arabic ">{application.arabic}</p>
                <p className="">{application.english} </p>
                <p className="">{application.amharic} </p>
            </a>
            <img src={application.img} className="w-full rounded-[45px] p-4" />
            <a href={application.play} className="absolute right-0 top-0 rounded-tr-xl rounded-bl-xl  border-b border-l border-green-500 bg-green-200 hover:bg-green-600">
                <MdDownload className="h-full w-14 p-2  text-green-500  hover:text-white" />    
            </a>
        </div>

    )
}