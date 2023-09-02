import dotenv from 'dotenv';
dotenv.config();

export const OPENAI_KEY = process.env.OPENAI_KEY;
export const WEAVIATE_API_KEY = process.env.WEAVIATE_API_KEY ?? '';
export const WEAVIATE_HOST = process.env.WEAVIATE_HOST ?? '';
export const WEAVIATE_URL = process.env.WEAVIATE_URL ?? '';
export const DATA_CLASSNAME = process.env.DATA_CLASSNAME ?? '';

