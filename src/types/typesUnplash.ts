export type TPhotoFetchUnplash = {
  total: number
  total_pages: number
  results: TDataPhotoUnplash[]
}

type TDataPhotoURL = {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}

type TDataUserUnplash = {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: string
  twitter_username: null
  portfolio_url: string
  bio: null
  location: string
  links: object
  profile_image: object
  instagram_username: string
  total_collections: number
  total_likes: number
  total_photos: number
  accepted_tos: boolean
  for_hire: boolean
  social: object
}

export type TDataPhotoUnplash = {
  id: string
  created_at: string
  updated_at: string
  promoted_at: null
  width: number
  height: number
  color: string
  blur_hash: string
  description: null | string
  alt_description: string
  urls: TDataPhotoURL
  links: object
  likes: number
  liked_by_user: boolean
  current_user_collections: unknown[]
  sponsorship: null
  topic_submissions: object
  user: TDataUserUnplash
  tags: unknown[]
}
