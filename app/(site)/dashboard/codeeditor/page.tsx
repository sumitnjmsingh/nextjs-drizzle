"use client"; 
import { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "../../../components/LanguageSelector";
import { CODE_SNIPPETS } from "../../../../constants";
import Output from "../../../components/Output";
import { FiHome, FiBarChart2, FiCalendar, FiSettings } from "react-icons/fi";
import { TbCodeCircle2Filled } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

const CodeEditor = () => {
  const editorRef = useRef(null);
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState<keyof typeof CODE_SNIPPETS>("javascript");

  const onMount = (editor:any) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language: keyof typeof CODE_SNIPPETS) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <div className=" flex flex-col sm:flex-row justify-center items-center sm:justify-between gap-5 ml-3  bg-[url('https://cpwebassets.codepen.io/assets/packs/lines-2-4e66616a5ef291c3566a7ddfe1ffaaa8.svg')] bg-no-repeat bg-right-top bg-contain relative">
       <div className="absolute z-[-1] top-20 left-0 w-full h-full bg-[url('https://cpwebassets.codepen.io/assets/packs/lines-3-4541e35a1939230404d773f7eeddcc9b.svg')] bg-no-repeat bg-left-bottom bg-contain"></div>
       
       
       <aside className=" sm:w-[50px] w-full bg-white sm:rounded-[40px] gap-5 p-4 flex sm:flex-col flex-row justify-between items-center">
        <div className="sm:space-y-6 flex sm:flex-col  flex-row justify-between sm:space-x-0 space-x-5">
          <Link href="/dashboard"><FiHome className="text-2xl cursor-pointer hover:text-green-400" /></Link>
          <FiBarChart2 className="text-2xl cursor-pointer hover:text-green-400" />
          <FiCalendar className="text-2xl cursor-pointer hover:text-green-400" />
          {/* <Link href="/codeeditor"><TbCodeCircle2Filled className="text-2xl cursor-pointer hover:text-green-400" /></Link> */}
          <FiSettings className="text-2xl cursor-pointer hover:text-green-400" />
        </div>
        <FaUserCircle className="text-4xl cursor-pointer" />
      </aside>


        <div className='w-[80vw] sm:w-[50vw] '>
          <LanguageSelector  language={language} onSelect={onSelect} />
          <Editor className="border-solid border-2 border-white rounded-md"
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="75vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value || "")}
          />
        </div>
        <div className="">
        <Output  editorRef={editorRef} language={language} />
        </div>
    </div>
  );
};
export default CodeEditor;