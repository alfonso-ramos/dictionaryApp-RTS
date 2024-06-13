import axios from "axios"
import { useState } from "react"
import { object, string, array, InferOutput, parse, optional } from 'valibot';

const PhoneticSchema = object({
    text: optional(string()),
    audio: optional(string()),
})

const DefinitionSchema = object({
    definition: string(),
    synonyms: array(string()),
    antonyms: array(string())
})

const MeaningSchema = object({
    partOfSpeech: string(),
    definitions: array(DefinitionSchema),
    synonyms: array(string())
});


const WordSchema = object({
    word: string(),
    phonetics: array(PhoneticSchema),
    meanings: array(MeaningSchema),
    sourceUrls: array(string())
})

const initialState: InferOutput<typeof WordSchema> = {
    word: 'Keyboard',
    phonetics: [{
        audio: "https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3",
        text: "/ˈkibɔɹd/"
    }],
    meanings: [],
    sourceUrls: [],
};


export type Definition = InferOutput<typeof WordSchema>

export const useDictionary = () => {
    const [word, setWord] = useState<Definition>(initialState)
    const [loading, setLoading] = useState(false)
    const [notFound, setNotFound] = useState(false)

    const fetchDictionary = async (word: string) => {
        try {
            setLoading(true)
            setNotFound(false)
            const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
            const { data } = await axios(URL)
            if (!data || !data[0]) {
                setNotFound(true)
                return
            }

            const result = parse(WordSchema, data[0])
            console.log(result)
            if (result) {
                setWord(result)
            } else {
                console.error('Respuesta mal formada ...')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
        console.log(word)
        
    }
    return {
        word,
        loading,
        notFound,
        fetchDictionary
    }
}