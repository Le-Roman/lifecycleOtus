export interface Photo {
  id: number
  url: string
}

export type Photos = Photo[] | null

export interface AppState {
  photos: Photos
  coord: {
    x?: number,
    y?: number
  }
  hi: string
}

export type FetchCommonData = Array<Photos | null>
