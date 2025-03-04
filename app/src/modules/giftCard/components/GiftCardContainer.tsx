import { useTranslation } from 'react-i18next'

import { GiftCard } from '../types/giftCardTypes'
import { ProgressBar } from '../../../components/ProgressBar'
import { getPercentage } from '../../../utils/utils'
import { useGetTimeDifference } from '../utils/useGetTimeDifference'

export const GiftCardContainer = ({
  id,
  name,
  state,
  consumedAmount,
  allowedAmount,
  closingDate,
}: Omit<GiftCard, 'description' | 'openingDate' | 'beneficiaries'>) => {
  const { t } = useTranslation()

  const consumedPercentage = getPercentage(consumedAmount, allowedAmount)
  const timeRemaining = useGetTimeDifference({ closingDate, state })

  return (
    <div key={id} className="p-6 border border-slate-300 rounded-xl">
      <div className="mb-4">
        <img
          src="/images/giftCardIcon.svg"
          alt="Gift card icon"
          width="32px"
          height="32px"
        />
      </div>

      <p className="text-xs font-normal text-slate-600">{timeRemaining}</p>
      <p className="mb-2 text-base font-medium text-slate-800">{name}</p>

      <p className="mb-1 text-xs font-normal text-slate-600">
        {t('gift_card.list.consumed_state', {
          consumedAmount: consumedAmount,
          allowedAmount: allowedAmount,
        })}
      </p>

      <div className="flex items-center gap-2">
        <ProgressBar percentage={consumedPercentage} />
        <p className="text-xs font-medium text-slate-800">
          {t('gift_card.list.consumed_progress', {
            consumedPercentage,
          })}
        </p>
      </div>
    </div>
  )
}
