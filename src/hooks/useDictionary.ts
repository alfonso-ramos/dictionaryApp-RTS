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
    definitions: array(DefinitionSchema)
});

const WordSchema = object({
    word: string(),
    phonetics: array(PhoneticSchema),
    meanings: array(MeaningSchema),
})

const initialState = {
    word: '',
    phonetics: [

    ],
    meanings: [{
        partOfSpeech: 'noun',
}       
    ]
}


export type Definition = InferOutput<typeof WordSchema>

export const useDictionary = () => {
    const [definition, setDefintion] = useState<Definition>()
    const [loading, setLoading] = useState(false)
    const [notFound, setNotFound] = useState(false)

    const fetchDictionary = async (word: string) => {
        try {
            setLoading(true)
            const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
            const { data } = await axios(URL)
            if (!data[0]) {
                setNotFound(true)
                return
            }

            const { data: definitionResults } = await axios(URL)
            console.log(definitionResults[0])
            const result = parse(WordSchema, definitionResults[0])
            console.log(result)
            if (result) {
                setDefintion(result)
            } else {
                console.error('Respuesta mal formada ...')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    return {
        definition,
        loading,
        notFound,
        fetchDictionary
    }
}