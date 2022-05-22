import { fetchCommonData, fetchPhotos } from './api'
import { Photos } from './components/App/appTypes'
import { PHOTOS_URL } from './constants'
import axios from 'axios'

interface ResponseType {
  data: Photos
  status: number
  statusText: string
  headers: Record<string,unknown>
  config: Record<string,unknown>
}

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('get data', () => {
  let response: ResponseType

  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          url: 'https://via.placeholder.com/600/92c952',
        },
      ],
      status: 200,
      statusText: 'Ok',
      headers: {},
      config: {},
    }
  })

  it('test fetchPhotos resolved', async () => {
    mockedAxios.get.mockResolvedValueOnce(response)
    const data = await fetchPhotos()
    expect(data).toEqual(response.data)
    expect(mockedAxios.get).toHaveBeenCalledWith(PHOTOS_URL)
    expect(mockedAxios.get).toHaveBeenCalledTimes(1)
  })

  it('test fetchPhotos rejected', async () => {
    mockedAxios.get.mockRejectedValueOnce(null)
    const data = await fetchPhotos()
    expect(data).toBeNull()
    expect(mockedAxios.get).toHaveBeenCalledWith(PHOTOS_URL)
    expect(mockedAxios.get).toHaveBeenCalledTimes(1)
  })

  it('test commonData', async () => {
    mockedAxios.get.mockResolvedValueOnce(response)
    const data = await fetchCommonData()
    expect(data[0]).toEqual(response.data)
  })
})
