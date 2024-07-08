import { useEffect, useState } from "react";

export const useWindowSize = () => {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

    useEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        };
        
        window.addEventListener('resize', updateSize);
        
        // Call updateSize once to set the initial size
        updateSize();
        
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return {
        width: size[0],
        height: size[1]
    };
};
