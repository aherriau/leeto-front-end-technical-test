import { useQuery } from '@tanstack/react-query'

import { GiftCard } from '../types/giftCardTypes'

const fetchGiftCard = async (id: string): Promise<GiftCard> => {
  const response = await fetch(`http://localhost:3001/gift-cards/${id}`)
  if (response.status === 200) return response.json()
  throw new Error()
}

export const useGetGiftCard = (id: string | undefined) =>
  useQuery({
    enabled: Boolean(id),
    // @ts-expect-error: id can't be undefined in fetch method because we check it with enabled above
    queryFn: () => fetchGiftCard(id),
    queryKey: ['QUERY_GET_GIFT_CARD', `${id}`],
  })
