import React, { useEffect, useState } from "react";

const Hero = () => {
    const words = ["Aim", "Career", "Learning", "Future"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false); // Hide the word briefly before showing the next
            setTimeout(() => {
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                setIsVisible(true); // Show the new word
            }, 200); // Brief hide duration
        }, 1000); // Word change interval

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center h-screen p-5">
            <h1 className="text-9xl font-bold w-2/5">
                Build Your{" "}
                <span className={isVisible ? "opacity-100 transition-opacity duration-500 text-[#0014f9]" : "opacity-10"}>
                    {words[currentWordIndex]}
                </span>{" "}
                With Us.
            </h1>
        </div>
    );
};

export default Hero;
