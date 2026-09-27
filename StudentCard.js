"use client";

import { useState } from "react";

export default function StudentCard({ name, course, year }) {
  const [message, setMessage] = useState("Hello, Student!");

  const handleClick = () => {
    setMessage("Welcome to Next.js!");
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-80 text-center">
      <h2 className="text-sm font-bold tracking-widest text-gray-400 mb-4">
        STUDENT CARD
      </h2>

      <p className="text-xl font-semibold text-gray-800">{name}</p>
      <p className="text-gray-600">{course}</p>
      <p className="text-gray-600 mb-4">{year}</p>

      <button
        onClick={handleClick}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
      >
        Click Me
      </button>

      <p className="mt-4 text-gray-700">{message}</p>
    </div>
  );
}
