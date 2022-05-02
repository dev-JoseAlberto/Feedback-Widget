import { ChatCenteredText } from "phosphor-react";
import { useState } from "react";

export function Widget () {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false)

  function toggleWidgetVisibility(){
    setIsWidgetOpen(!isWidgetOpen)
  }

  return (
    <div className="absolute bottom-4 right-4">
      { isWidgetOpen && <p>Hello World</p>}
    <button onClick={toggleWidgetVisibility} className="bg-blue-700 rounded-md px-3 h-12 text-white flex items-center group">
    <ChatCenteredText className="w-8 h-8" />
    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
      <span className="pl-2"></span>
      Feedback
    </span>
    </button>
    </div>
  )

}
