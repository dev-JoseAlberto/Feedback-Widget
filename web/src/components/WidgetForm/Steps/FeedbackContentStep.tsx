import { FormEvent, useState } from "react";
import { ArrowLeft, Camera } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "../../WidgetForm/index";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";


interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
    onFeedbackSent: () => void;
}

export function FeedbackContentStep ({ 
    feedbackType, 
    onFeedbackRestartRequested,
    onFeedbackSent,
}: FeedbackContentStepProps) {
    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState('');
    
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    function handleSubmitFeedback (event:FormEvent) {
        event.preventDefault();
        console.log({
            screenshot,
            comment,
        })
        
        onFeedbackSent();
    }

    return (
        <>
        <header>
            <button 
            type="button" 
            className="top-5 left-5 absolute text-white hover:text-white"
            onClick={onFeedbackRestartRequested}>
                <ArrowLeft weight="bold" className="w-4 h-4"/>
            </button>
            <span className="text-xl leading-6 flex items-center gap-2">
                <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6"/>
                {feedbackTypeInfo.title}
            </span>
            <CloseButton />
        </header>
        
        <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
            <textarea 
            className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-white border-[#091F8E] bg-transparent rounded-md  focus:border-[#091F8E] focus:ring-[#091F8E] focus:ring-6 focus:outline-none resize-none scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent"
            placeholder="Tell me details what is happening..."
            onChange={event => setComment(event.target.value)}
            />

            <footer className="flex gap-2 mt-2">
                <ScreenshotButton 
                screenshot={screenshot} 
                onScreenshotTook={setScreenshot}/>
                <button 
                type="submit"
                disabled = {comment.length == 0}
                className="p-2 bg-[#0d0c22] rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-[#091F8E] focus:ring-[#091F8E] transition-colors disabled:opacity-80 disabled:bg-blue-700">
                    To Send Feedback
                </button>
            </footer>
        </form>
    </>
    )
}