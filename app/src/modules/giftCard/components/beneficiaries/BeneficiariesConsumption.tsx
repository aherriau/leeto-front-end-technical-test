import { mdiChartLineVariant } from '@mdi/js'
import { useTranslation } from 'react-i18next'

import { BeneficiaryCard } from './BeneficiaryCard'
import { Beneficiary } from '../../types/giftCardTypes'
import { Avatar } from '../../../../components/Avatar'
import { ProgressBar } from '../../../../components/ProgressBar'
import { getPercentage } from '../../../../utils/utils'
import { getBeneficiaryTypeEmoji } from '../../utils/beneficiariesUtils'

export const BeneficiariesConsumption = ({
  beneficiaries,
}: {
  beneficiaries: Beneficiary[]
}) => {
  const { t } = useTranslation()

  const content = (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 sm:[&>*:first-child]:col-span-2">
      {beneficiaries.map((beneficiary) => {
        const { id, type, firstName } = beneficiary
        const { consumedAmount, allowedAmount } = beneficiary.consumption
        const consumedPercentage = getPercentage(consumedAmount, allowedAmount)

        return (
          <div key={id} className="flex items-center gap-4">
            <div>
              <Avatar emoji={getBeneficiaryTypeEmoji(type)} />
            </div>
            <div className="flex flex-col w-full">
              <p className="mb-1 text-xs font-normal text-slate-600">
                {t(
                  'gift_card.details.beneficiaries.consumption.consumed_state',
                  {
                    name:
                      type === 'user'
                        ? t('gift_card.details.beneficiaries.list.own_name')
                        : firstName,
                    consumedAmount,
                    allowedAmount,
                  }
                )}
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
        )
      })}
    </div>
  )

  return (
    <BeneficiaryCard
      icon={mdiChartLineVariant}
      title={t('gift_card.details.beneficiaries.consumption.title')}
      content={content}
    />
  )
}
