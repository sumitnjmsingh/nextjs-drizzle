import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

type Language = keyof typeof LANGUAGE_VERSIONS;

interface ExecuteCodeRequest {
    language: string;
    version: string;
    files: Array<{
        content: string;
    }>;
}

interface ExecuteCodeResponse {
    data: any; // Replace 'any' with the actual type if known
}

export const executeCode = async (language: Language, sourceCode: string): Promise<ExecuteCodeResponse> => {
    const requestBody: ExecuteCodeRequest = {
        language: language,
        version: LANGUAGE_VERSIONS[language],
        files: [
            {
                content: sourceCode,
            },
        ],
    };

    const response = await API.post<ExecuteCodeResponse>("/execute", requestBody);
    return response.data;
};