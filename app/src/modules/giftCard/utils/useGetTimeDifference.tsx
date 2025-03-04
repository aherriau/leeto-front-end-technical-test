import { useTranslation } from 'react-i18next'
import { GiftCard } from '../types/giftCardTypes'

export const useGetTimeDifference = ({
  closingDate,
  state,
}: Pick<GiftCard, 'closingDate' | 'state'>) => {
  const { t } = useTranslation()

  const currentTime = new Date()
  const targetTime = new Date(new Date(closingDate).setHours(24, 0, 0, 0))

  let diff, translationKeyword
  if (state === 'archived') {
    diff = Math.floor(currentTime.getTime() - targetTime.getTime())
    translationKeyword = 'closed_at'
  } else {
    diff = Math.floor(targetTime.getTime() - currentTime.getTime())
    translationKeyword = 'closed_in'
  }

  const day = 1000 * 60 * 60 * 24
  const days = Math.floor(diff / day)
  const months = Math.floor(days / 31)
  const years = Math.floor(months / 12)

  if (years > 0)
    return t(`gift_card.list.${translationKeyword}.years`, { count: years })
  if (months > 0)
    return t(`gift_card.list.${translationKeyword}.months`, { count: months })
  if (days > 6)
    return t(`gift_card.list.${translationKeyword}.weeks`, {
      count: Math.floor(days / 7),
    })
  if (days > 0)
    return t(`gift_card.list.${translationKeyword}.days`, { count: days })

  return ''
}
