import { ArrowLeft, Camera } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "../../WidgetForm/index";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";
import { useState } from "react";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep ({ 
    feedbackType, 
    onFeedbackRestartRequested 
}: FeedbackContentStepProps) {
    const [screenshot, setScreenshot] = useState<string | null>(null)
    
    const feedbackTypeInfo = feedbackTypes[feedbackType];

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
        
        <form className="my-4 w-full">
            <textarea 
            className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-white border-[#091F8E] bg-transparent rounded-md  focus:border-[#091F8E] focus:ring-[#091F8E] focus:ring-6 focus:outline-none resize-none scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent"
            placeholder="Tell me details what is happening..."
            />

            <footer className="flex gap-2 mt-2">
                <ScreenshotButton onScreenshotTook={setScreenshot}/>
                <button 
                type="submit"
                className="p-2 bg-[#0d0c22] rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-[#091F8E] focus:ring-[#091F8E] transition-colors">
                    To Send Feedback
                </button>
            </footer>
        </form>
    </>
    )
}