import { useEffect, useState } from "react";

export function useHooks() {
    const [showZoomIn, setShowZoomIn] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowZoomIn(true);
      }, 2000); // 2 seconds delay for ZoomIn
  
      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, []);
    return { 
        showZoomIn,
        
     }
}