import {FaBars, } from 'react-icons/fa'
import {TfiSearch,} from 'react-icons/tfi'
import Nav from './nav.jsx'

export default function Header(){

    return(
        <header className="h-20 px-2 bg-white flex flex-row">
            <img  className="h-20 w-20 mx-4" src="https://hajipc.com/wp-content/uploads/2023/01/cropped-hajipro1-1-e1674087224455.png" alt="" />
            <div className="w-full">
                <p className="name">
                AHMEDHAJI SADIK OMER
                </p>
                <div className="flex flex-row h-10">
                    <div className="flex-1 md:basis-1/3 m-1 px-3 py-1 bg-gray-300 rounded-full flex flex-row  items-center">
                        <TfiSearch className="text-slate-500"/>
                        <input className="pl-2 bg-gray-300 container focus-visible:outline-none text-gray-500" name="search" placeholder="Search" />       
                    </div>
                    <Nav />
                </div>
            </div>
            <FaBars class="hidden mr-3 h-10 w-10 my-auto"/>
        </header>
    )
}