import axios from "axios";
import { useState } from "react";
import { object, string, array, InferOutput, parse } from "valibot";

export const PhoneticSchema = object({
    text: string(),
    audio: string(),
});

const DefinitionSchema = object({
    definition: string(),
    synonyms: array(string()),
    antonyms: array(string()),
});

const MeaningSchema = object({
    partOfSpeech: string(),
    definitions: array(DefinitionSchema),
    synonyms: array(string()),
});

export const WordSchema = object({
    word: string(),
    phonetics: array(PhoneticSchema),
    meanings: array(MeaningSchema),
    sourceUrls: array(string()),
});

// const initialState: InferOutput<typeof WordSchema> = {
//     word: "",
//     phonetics: [
//         {
//             audio: "",
//             text: "",
//         },
//     ],
//     meanings: [],
//     sourceUrls: [],
// };

export type Definition = InferOutput<typeof WordSchema>;

export const useDictionary = () => {
    const [word, setWord] = useState<Definition>();
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchDictionary = async (word: string) => {
        try {
            setLoading(true);
            setNotFound(false);
            setError(null);

            const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
            const { data } = await axios(URL);

            if (!data || !data[0]) {
                setNotFound(true);
                return;
            }

            const result = parse(WordSchema, data[0]);
            if (result) {
                setWord(result);
            } else {
                console.error("Respuesta mal formada ...");
                setError("Respuesta mal formada ...");
            }
        } catch (error) {
            console.error(error);
            setError("Ocurrió un error al buscar la palabra.");
        } finally {
            setLoading(false);
        }
    };

    return {
        word,
        loading,
        notFound,
        error,
        fetchDictionary,
    };
};
