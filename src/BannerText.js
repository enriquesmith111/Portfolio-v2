import React, { useState, useEffect, useRef } from 'react';


const BannerText = ({ initialText, fontSize }) => {
    const letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'L', 'K', 'J', 'H', 'G', 'F', 'D', 'S', 'A', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'l', 'k', 'j', 'h', 'g', 'f', 'd', 's', 'a', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
    const textRef = useRef(null);
    const [text, setText] = useState(initialText);

    const randomizeText = () => {
        let iterations = 0;

        const interval = setInterval(() => {
            const textArray = text.split('').length;
            const ranText = Array(textArray)
                .fill(null)
                .map((letter, index) => {
                    if (index < iterations) {
                        return text[index];
                    }

                    return letters[Math.floor(Math.random() * 52)]
                })
                .join("");
            setText(ranText); // Call setText here to update the state

            if (iterations >= text.length) clearInterval(interval)

            iterations += 1;
        }, 50)
    };

    useEffect(() => {
        const intervalId = setInterval(randomizeText, 2000); // Call randomizeText every 2 seconds

        return () => clearInterval(intervalId); // Clear interval on cleanup
    }, []);

    if (textRef.current) {
        textRef.current.style.fontSize = `${fontSize}px`;
    }

    return (
        <h1 ref={textRef} style={{ fontSize: `${fontSize}px` }}>{text}</h1>
    );
};

export default BannerText;