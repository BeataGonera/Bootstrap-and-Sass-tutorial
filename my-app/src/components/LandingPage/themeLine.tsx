import { useState, useEffect, FC, useRef } from "react";

interface ThemeLineProps{
    text: string;
}

export const ThemeLine:FC<ThemeLineProps> = ({text}) => {

    const index = useRef(0) 
    const [currentText, setCurrentText] = useState('')

    useEffect(() => {
        index.current = 0
        setCurrentText('')
    },[text])

    useEffect(() => {
        if(index.current < text.length){
            const timeoutId = setTimeout(() => {
                setCurrentText((value) => value + text.charAt(index.current))
                index.current += 1
            }, 200)
            return()=> {
                clearTimeout(timeoutId)
            }
        }  
    },[currentText, text])


    return ( 
        <p>{currentText}</p>
     );
}
 
