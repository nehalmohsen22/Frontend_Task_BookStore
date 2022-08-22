import axios from 'axios'
import { API_URL } from '../utils/constants'

export const searchBook = async (query: string) => {
  const response = await axios.get(`${API_URL}?search=${query}`)
  return response.data
}

export const getBook = async (id: string) => {
  const response = await axios.get(`${API_URL}${id}`)
  return response.data
}

export const getBooksByPage = async (page: number = 1) => {
  const response = await axios.get(`${API_URL}?page=${page}`)
  return response.data
}

export const getSingleBook = async (id: string) => {
  const response = await axios.get(`${API_URL}${id}`)
  return response.data
}
