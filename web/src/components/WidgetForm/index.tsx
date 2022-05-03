import { useState } from "react";
import { CloseButton } from "../CloseButton";
import bugImageUrl  from "../../assets/bug.svg";
import ideaImageUrl  from "../../assets/idea.svg";
import thoughtImageUrl  from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";


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
            alt: ''
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

    return (
    <div className="bg-blue-700 p-3 relative rounded-md text-white nb-3 flex flex-col items-center shadow-lg w-[cal(100vm-1rem)] md:w-auto">
        <header>
            <span className="text-xl leading-6">Give us Your Feedback</span>

            <CloseButton />

        </header>

        
        {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
        ) : (
        <p>Hello World</p>
    )}
        
        <footer className="text-xs text-neutral-50">
            Done by <a className="underline underline-offset-2" href="">Jose Alberto</a>

        </footer>
    </div>
    );
}