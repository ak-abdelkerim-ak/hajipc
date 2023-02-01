import Application from "./application.jsx"
import Feedback from "./feedback.jsx"
import applications from '../data/applications.json'
import feedbacks from '../data/feedbacks.json'
import {FaDonate,} from 'react-icons/fa'

function Comment(){

    return (
        <form method="" action="" className="comment" >
            <textarea name="" placeholder="Message ..."></textarea>
            <div>
                <input type="text" name="" placeholder="Abdelkerim AK" required />
                <input type="email" name="" placeholder="example@gmail.com" required />
                <input type="submit" name="" value="Send Comment" />
            </div>
            
        </form>
    )
}

export default function Main(){
    
    return(
        <main className="flex flex-col w-full">
            <div className="dua ">
                <p className="arabic"> اللهم اجعل عملي خالصا لوجهك الكريم </p>
                <p className='amharic'>አላህ ሆይ! ስራዬን ተቀበለኝ! አባቴንም ማርልኝ! </p>
                <a href=""><FaDonate /><span>DONATE</span></a>
            </div>
            <div className="grid gap-4 p-4  grid-cols-2 sm:grid-cols-3 sm:px-10 md:grid-cols-4 py-5 lg:px-20 lg:gap-10">
                {applications.map(application => <Application application={application}/>)}
            </div>
            <Feedback feedbacks={feedbacks} />
            <Comment />
        </main>
    )
}