"use client"
// pages/speechToText.js
import { useState } from 'react';

export default function textToSpeech() {
  const [text, setText] = useState('');

  // Text-to-Speech function
  const handleSpeech = () => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';  // Set language to English
    speech.volume = 1;      // Set volume level (0 to 1)
    speech.rate = 0.9;        // Speed of speech (0.1 to 10)
    speech.pitch = 1;       // Pitch of voice (0 to 2)

    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl text-gray-400 font-bold mb-8">Text to Speech</h1>

      {/* Text Area */}
      <textarea
        className="w-3/4 text-gray-500 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6"
        rows="6"
        placeholder="Type your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      {/* Button to trigger speech */}
      <button
        onClick={handleSpeech}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
      >
        Convert Text to Speech
      </button>
    </div>
  );
}
