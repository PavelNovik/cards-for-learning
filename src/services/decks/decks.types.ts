export type DecksResponse = {
  items: Deck[]
  pagination: Pagination
}
export type DeckAuthor = {
  id: string
  name: string
}
export type Deck = {
  author: DeckAuthor
  cardsCount: number
  cover: null | string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}
export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export type GetDecksArgs = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardCount?: number
  minCardCount?: number
  name?: string
  userId?: string
}

export type CreateDeckArgs = {
  isPrivate?: boolean
  name: string
}
