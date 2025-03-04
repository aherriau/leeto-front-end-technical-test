import { useTranslation } from 'react-i18next'

import { GiftCard } from '../types/giftCardTypes'
import { GiftCardContainer } from './GiftCardContainer'

export const GiftCardList = ({
  giftCards,
  isLoading,
}: {
  giftCards: GiftCard[]
  isLoading: boolean
}) => {
  const { t } = useTranslation()

  if (isLoading) return t('gift_card.list.loading')

  if (giftCards?.length === 0) return t('gift_card.list.empty_state')

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {giftCards.map((giftCard) => {
          const {
            id,
            name,
            state,
            consumedAmount,
            allowedAmount,
            closingDate,
          } = giftCard

          return (
            <GiftCardContainer
              key={id}
              id={id}
              name={name}
              state={state}
              consumedAmount={consumedAmount}
              allowedAmount={allowedAmount}
              closingDate={closingDate}
            />
          )
        })}
      </div>
    </>
  )
}
