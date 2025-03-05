import Icon from '@mdi/react'
import { mdiWalletGiftcard } from '@mdi/js'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'

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
  const navigate = useNavigate()

  const consumedPercentage = getPercentage(consumedAmount, allowedAmount)
  const timeRemaining = useGetTimeDifference({ closingDate, state })

  return (
    <div
      data-testid="giftcard-container"
      key={id}
      className="p-6 border border-slate-300 rounded-xl cursor-pointer hover:border-slate-400"
      onClick={() => navigate(`/gift_cards/${id}`)}
    >
      <div className="flex mb-4 bg-pink-100 rounded-lg w-8 h-8">
        <div className="text-pink-800 m-auto">
          <Icon path={mdiWalletGiftcard} size="16px" />
        </div>
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
