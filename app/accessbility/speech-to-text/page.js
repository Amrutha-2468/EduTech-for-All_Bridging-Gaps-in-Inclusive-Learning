"use client";
// pages/speechToText.js
import { useState, useEffect } from 'react';
import annyang from 'annyang'; // Import annyang

export default function SpeechToText() {
  const [text, setText] = useState('');
  const [isListening, setIsListening] = useState(false);

  // Define commands for annyang
  const commands = {
    '*spokenText': (spokenText) => {
      setText(spokenText); // Set the spoken text in the text area
    },
  };

  // Function to start or stop listening
  const toggleListening = () => {
    if (isListening) {
      annyang.abort(); // Stop listening
      setIsListening(false);
    } else {
      if (annyang) {
        annyang.addCommands(commands); // Add the commands
        annyang.start(); // Start listening
        setIsListening(true);
      }
    }
  };

  useEffect(() => {
    return () => {
      // Cleanup: stop listening when component unmounts
      if (isListening) {
        annyang.abort();
      }
    };
  }, [isListening]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl text-gray-500 font-bold mb-8">Speech to Text</h1>

      {/* Text Area */}
      <textarea
        className="w-3/4 p-4 text-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6"
        rows="6"
        placeholder="Speak something..."
        value={text}
        readOnly // Make text area read-only for spoken input
      ></textarea>

      {/* Button to start/stop listening */}
      <button
        onClick={toggleListening}
        className={`bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition ${
          isListening ? 'bg-red-500 hover:bg-red-600' : ''
        }`}
      >
        {isListening ? 'Stop Listening' : 'Start Listening'}
      </button>

      <p className="text-lg mt-4 text-gray-600">
        Click the button and speak. The recognized text will appear above!
      </p>
    </div>
  );
}
