import Icon from '@mdi/react'
import { mdiWalletGiftcard } from '@mdi/js'
import { useParams } from 'react-router'
import { useTranslation } from 'react-i18next'

import { GiftCardDetailsBackLink } from '../components/GiftCardDetailsBackLink'
import { GiftCardDetailsInformation } from '../components/GiftCardDetailsInformation'
import { useGetGiftCard } from '../queries/useGiftCardDetailsQueries'
import { GiftCardDetailsBeneficiaries } from '../components/GiftCardDetailsBeneficiaries'

export const PageGiftCardDetails = () => {
  const { t } = useTranslation()
  const { id } = useParams()

  const { data: giftCard, isPending } = useGetGiftCard(id)

  if (isPending) return t('gift_card.details.loading')
  if (!giftCard) return t('gift_card.details.not_found')

  return (
    <div className="p-4 sm:p-6">
      <GiftCardDetailsBackLink state={giftCard.state} />

      <div className="flex mb-4 bg-pink-100 rounded-lg w-10 h-10 sm:w-16 sm:h-16">
        <div className="text-pink-800 m-auto w-4.5 h-4.5 sm:w-6 sm:h-6">
          <Icon path={mdiWalletGiftcard} />
        </div>
      </div>

      <h1 className="text-xl sm:text-2xl font-semibold text-slate-900 mt-2 mb-4 sm:mb-2">
        {giftCard.name}
      </h1>

      <GiftCardDetailsInformation
        consumedAmount={giftCard.consumedAmount}
        allowedAmount={giftCard.allowedAmount}
        openingDate={giftCard.openingDate}
        closingDate={giftCard.closingDate}
        state={giftCard.state}
      />

      <div className="my-6 p-4 rounded-lg bg-slate-50">
        <p className="text-sm font-semibold text-slate-800 mb-2">
          {t('gift_card.details.description')}
        </p>
        <p className="text-base font-normal text-slate-800">
          {giftCard.description}
        </p>
      </div>

      <GiftCardDetailsBeneficiaries beneficiaries={giftCard.beneficiaries} />
    </div>
  )
}
