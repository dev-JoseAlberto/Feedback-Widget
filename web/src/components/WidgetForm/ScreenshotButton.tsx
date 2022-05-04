import { useState } from "react";
import { Camera } from "phosphor-react";
import html2canvas from "html2canvas";
import { Loading } from "../Loading";

export function ScreenshotButton () {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)
    
    async function handleTakeScreenShot () {
        setIsTakingScreenshot(true);
        
        const canvas = await html2canvas(document.querySelector('html')!);
        const base64image = canvas.toDataURL('image/png');

        console.log(base64image);

        setIsTakingScreenshot(false);
    }

    return (
        <button 
        type="button"  
        onClick ={handleTakeScreenShot}
        className="p-2 bg-[#0d0c22] rounded-md border-transparent hover:bg-blue-700 transition-colors focus:outline-none focus-ring-2 focus:ring-offset-2">
            { isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6"/>}
        </button>

    )
}