import { GiftCard } from '../types/giftCardTypes'
import { BeneficiariesConsumption } from './beneficiaries/BeneficiariesConsumption'
import { BeneficiariesList } from './beneficiaries/BeneficiariesList'

export const GiftCardDetailsBeneficiaries = ({
  beneficiaries,
}: Pick<GiftCard, 'beneficiaries'>) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <BeneficiariesList beneficiaries={beneficiaries} />
      <BeneficiariesConsumption beneficiaries={beneficiaries} />
    </div>
  )
}
