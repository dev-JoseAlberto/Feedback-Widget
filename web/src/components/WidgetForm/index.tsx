import { useState } from "react";
import bugImageUrl  from "../../assets/bug.svg";
import ideaImageUrl  from "../../assets/idea.svg";
import thoughtImageUrl  from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";


export const feedbackTypes = {
    BUG: {
        title: 'Problem',
        image: {
            source: bugImageUrl,
            alt: 'Image of insect'
        }

    },
    SUGGESTION: {
        title:'Idea',
        image: {
            source: ideaImageUrl,
            alt: 'Thought balloon'
        }

    },
    OTHER: {
        title:'Other',
        image: {
            source: thoughtImageUrl,
            alt: 'Image of lamp'
        }


    }
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm () {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback (){
        setFeedbackType(null);
     }
    
    return (
    <div className="bg-blue-700 p-3 relative rounded-md text-white nb-3 flex flex-col items-center shadow-lg w-[cal(100vm-2rem)] md:w-auto">
       { feedbackSent ? (
           <FeedbackSucessStep />
       ) : (
           <>
            {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
        ) : (
        <FeedbackContentStep 
        feedbackType={feedbackType}
        onFeedbackRestartRequested={handleRestartFeedback}
        onFeedbackSent ={() => setFeedbackSent(true)}
        />
    )}
        </>
       )}
    
    <footer className="text-xs text-neutral-50">
        Done by <a className="underline underline-offset-2" href="">Rocketseat</a>
    </footer>
    </div>
    );
}