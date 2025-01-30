import { useState } from "react";
import { executeCode } from "../../api";

const Output = ({ editorRef, language }: any) => {
  const [output, setOutput] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result }:any = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      setIsError(!!result.stderr);
    } catch (error: any) {
      console.log(error);
      alert(error.message || "Unable to run code");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-[80vw] sm:w-[40vw] mr-4 ">
      <h2 className="mb-2 text-lg font-semibold text-white">Output</h2>
      <button
        className="px-4 py-2 bg-gray-800 text-white rounded-md shadow-md border-solid border-2 border-white mb-4 hover:bg-green-500 hover:text-white transition disabled:opacity-50"
        disabled={isLoading}
        onClick={runCode}
      >
        {isLoading ? "Running..." : "Run Code"}
      </button>
      <div
        className={`h-[75vh] p-2  rounded text-white border-solid border-2 border-white bg-[#282727] ${
          isError ? "border-red-500 text-red-400" : "border-gray-700"
        }`}
      >
        {output
          ? output.map((line, i) => <p key={i}>{line}</p>)
          : 'Click "Run Code" to see the output here...'}
      </div>
    </div>
  );
};

export default Output;
