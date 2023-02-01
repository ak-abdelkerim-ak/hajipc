import {RxAvatar,} from "react-icons/rx"
import {IoIosArrowDown,} from 'react-icons/io'

function ChatPanel({feedback}){

    return(
        <div className="chatpanel">
            <div><div></div></div>
            <div>
                <div>
                    <RxAvatar />
                    <div>
                        <p>{feedback.name}</p>
                        <p>{feedback.date}</p>
                    </div>
                    <div>
                        <a>{feedback.replay} | Replays</a>
                    </div>
                </div>
                <p>{feedback.feedback} </p>
            </div>
            <div></div>
        </div>
    )
}


export default function Feedback({feedbacks}) {

    return (
        <div className="feedback">
            <div></div>
            <div>
                {feedbacks.map(feedback => <ChatPanel feedback={feedback}/>)}
                <IoIosArrowDown className="more" />
            </div>          
        </div>
    )
}