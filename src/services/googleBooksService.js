import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = process.env.GOOGLE_BOOKS_API_KEY;

export const searchBooks = async (query) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: query,
        key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error.message);
    throw error;
  }
};
