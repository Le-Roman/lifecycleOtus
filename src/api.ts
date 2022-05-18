import { PHOTOS_URL } from './constants'
import { Photos } from './components/App/appTypes'
import axios, { AxiosResponse } from 'axios'

export const fetchPhotos = async (): Promise<Photos | null> => {
  try {
    const response: AxiosResponse<Photos> = await axios.get(PHOTOS_URL)
    return response.data
  } catch (e) {
    return null
  }
}

export const fetchCommonData = async (): Promise<(Photos | null)[]> => {
  return Promise.all([fetchPhotos()])
}
