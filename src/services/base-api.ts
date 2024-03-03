import { CreateDeckArgs, Deck, DecksResponse, GetDecksArgs } from '@/services/decks/decks.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => ({
    createDeck: builder.mutation<Deck, CreateDeckArgs>({
      query: body => ({
        body,
        method: 'POST',
        url: 'v1/decks',
      }),
    }),
    getDecks: builder.query<DecksResponse, GetDecksArgs | void>({
      query: arg => ({
        params: arg ?? undefined,
        url: `v2/decks`,
      }),
    }),
  }),
  reducerPath: 'baseApi',
})

export const { useCreateDeckMutation, useGetDecksQuery } = baseApi
