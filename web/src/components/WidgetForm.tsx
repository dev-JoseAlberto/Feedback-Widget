import { useState } from "react";
import { CloseButton } from "./CloseButton";
import bugImageUrl  from "../assets/bug.svg";
import ideaImageUrl  from "../assets/idea.svg";
import thoughtImageUrl  from "../assets/thought.svg";


const feedbackTypes = {
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

type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm () {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

    return (
    <div className="bg-blue-700 p-3 relative rounded-md text-white nb-3 flex flex-col items-center shadow-lg w-[cal(100vm-1rem)] md:w-auto">
        <header>
            <span className="text-xl leading-6">Give us Your Feedback</span>

            <CloseButton />

        </header>

        
        {!feedbackType ? (
        <div className="flex py-8 gap-2 w-full">
            { Object.entries(feedbackTypes).map(([key, value]) => {
                return (
                <button 
                key={key} 
                className="bg-blue-700 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-[#091F8E] focus:border-[#091F8E] focus:outline-none"
                onClick={() => setFeedbackType(key as FeedbackType)}
                type="button"
                >
                
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title}</span>
                </button>
            )
          })}
        </div>
    ) : (
        <p>Hello World</p>
    )}
        
        <footer className="text-xs text-neutral-50">é
            Done by <a className="underline underline-offset-2" href="">José Alberto</a>

        </footer>
    </div>
    );
}