import { useQuery } from '@tanstack/react-query'

import { GiftCard } from '../types/giftCardTypes'

const fetchActiveGiftCards = async (): Promise<GiftCard[]> => {
  const response = await fetch('http://localhost:3001/gift-cards?state=active')
  if (response.status === 200) return response.json()
  throw new Error()
}

export const useGetActiveGiftCards = () =>
  useQuery({
    queryFn: fetchActiveGiftCards,
    queryKey: ['QUERY_GET_ACTIVE_GIFT_CARDS'],
  })

const fetchArchivedGiftCards = async (): Promise<GiftCard[]> => {
  const response = await fetch(
    'http://localhost:3001/gift-cards?state=archived'
  )
  if (response.status === 200) return response.json()
  throw new Error()
}

export const useGetArchivedGiftCards = () =>
  useQuery({
    queryFn: fetchArchivedGiftCards,
    queryKey: ['QUERY_GET_ARCHIVED_GIFT_CARDS'],
  })
