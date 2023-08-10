import React, { useState, useEffect } from "react";

const TypingAnimation = ({ classProps, words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [write, setWrite] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const typingSpeed = 150; // Adjust typing speed in milliseconds

    const typeText = () => {
      const word = words[currentWordIndex];
      const wordLength = word.length;

      console.log("in typeText word: " + word);

      if (write) {
        if (displayedText.length < word.length) {
          const nextCharacter = word.slice(
            displayedText.length,
            displayedText.length + 1
          );

          console.log("nextCharacter: " + nextCharacter);

          setDisplayedText((prevText) => prevText + nextCharacter);
        }
      }

      if (!write) {
        if (displayedText.length > 0) {
          setDisplayedText((prevText) => prevText.slice(0, -1));
        }
      }

      if (displayedText.length == word.length) {
        setWrite(false);
      }

      if (displayedText.length == 0 && !write) {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setWrite(true);
      }
      setTimeout(() => setCounter((prev) => prev + 1), typingSpeed);
    };
    if (counter == 0) {
      setTimeout(() => setCounter(1), 1200);
    } else {
      typeText();
    }
  }, [counter]);

  return (
    <div className="typing-animation">
      <div className={`${classProps}`}>
        <span>{displayedText}</span>
        <span className="cursor">|</span>
      </div>
    </div>
  );
};

export default TypingAnimation;
