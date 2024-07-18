import { InferOutput } from "valibot";
import { WordSchema, PhoneticSchema } from '../hooks/useDictionary';

export type Word = InferOutput<typeof WordSchema>
export type Phonetic = InferOutput<typeof PhoneticSchema>