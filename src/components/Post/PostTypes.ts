import { Photo } from '../App/appTypes'

export interface PostProps {
  photo: Photo
}

export interface PostState {
  mode: Mode
  user: User
  userPost: User
  comments: CommentPost[]
  inputValue: string
  message: string
}

export interface Mode {
  isViewAllComments: boolean
  isViewFullComment: boolean
}

export interface User {
  avatar: string
  username: string
}

export interface CommentPost extends User {
  id: string
  title: string
}
