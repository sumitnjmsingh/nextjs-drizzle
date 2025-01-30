"use client";
import { useState } from "react";
import { LANGUAGE_VERSIONS } from "../../constants";

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "text-blue-400";

const LanguageSelector = ({ language, onSelect }:any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ml-2 mb-4 ">
      <p className="mb-2 text-lg text-white">Language:</p>
      <div className="relative inline-block text-left">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 bg-gray-800 text-white rounded-md shadow-md border-solid border-2 border-white"
        >
          {language}
        </button>
        {isOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-gray-900 text-white rounded-md shadow-lg z-10">
            {languages.map(([lang, version]) => (
              <div
                key={lang}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-800 ${lang === language ? "bg-gray-800 " + ACTIVE_COLOR : ""}`}
                onClick={() => {
                  onSelect(lang);
                  setIsOpen(false);
                }}
              >
                {lang} <span className="text-gray-600 text-sm">({version as string})</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;
