import Icon from '@mdi/react'
import { mdiCalendarBlank, mdiClockOutline } from '@mdi/js'
import { useTranslation } from 'react-i18next'
import moment from 'moment'
// @ts-expect-error: need to load locale manually
import 'moment/dist/locale/fr'

import { useGetTimeDifference } from '../utils/useGetTimeDifference'
import { getPercentage } from '../../../utils/utils'
import { ProgressBar } from '../../../components/ProgressBar'
import { GiftCard } from '../types/giftCardTypes'

export const GiftCardDetailsInformation = ({
  consumedAmount,
  allowedAmount,
  openingDate,
  closingDate,
  state,
}: Pick<
  GiftCard,
  'consumedAmount' | 'allowedAmount' | 'openingDate' | 'closingDate' | 'state'
>) => {
  const { t } = useTranslation()
  moment.locale('fr')

  const consumedPercentage = getPercentage(consumedAmount, allowedAmount)

  const timeRemaining = useGetTimeDifference({
    closingDate: closingDate,
    state: state,
  })

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 sm:mb-6">
        <div className="flex items-center gap-1">
          <Icon path={mdiCalendarBlank} size="16px" />
          <p className="text-sm font-normal text-slate-600">
            {t('gift_card.details.date_range', {
              startDate: moment(openingDate).format('ll'),
              endDate: moment(closingDate).format('ll'),
            })}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Icon path={mdiClockOutline} size="16px" />
          <p className="text-sm font-normal text-slate-600">{timeRemaining}</p>
        </div>
      </div>

      <div className="flex items-end gap-4 sm:gap-6">
        <div className="flex flex-col gap-1">
          <p className="text-xl sm:text-2xl font-semibold text-slate-800">
            {t('gift_card.details.remainingAmount', {
              value: allowedAmount - consumedAmount,
            })}
          </p>
          <p className="text-xs sm:text-sm font-medium text-slate-800">
            {t('gift_card.details.available')}
          </p>
        </div>

        <div className="w-full sm:max-w-96">
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
      </div>
    </>
  )
}
