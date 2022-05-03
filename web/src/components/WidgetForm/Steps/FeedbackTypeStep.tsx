import { FeedbackType, feedbackTypes } from "../index"

interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void;

}

export function FeedbackTypeStep ({ onFeedbackTypeChanged }:FeedbackTypeStepProps ) {
    return (
    <div className="flex py-8 gap-2 w-full">
        { Object.entries(feedbackTypes).map(([key, value]) => {
            return (
            <button 
            key={key} 
            className="bg-blue-700 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-[#091F8E] focus:border-[#091F8E] focus:outline-none"
            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            type="button"
            >
            
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
            </button>
        )
      })}
    </div>
    )
}