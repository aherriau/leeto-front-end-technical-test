import { mdiHumanMaleFemaleChild } from '@mdi/js'
import { useTranslation } from 'react-i18next'

import { BeneficiaryCard } from './BeneficiaryCard'
import { AvatarGroup } from '../../../../components/AvatarGroup'
import { Beneficiary } from '../../types/giftCardTypes'
import { getBeneficiaryTypeEmoji } from '../../utils/beneficiariesUtils'

export const BeneficiariesList = ({
  beneficiaries,
}: {
  beneficiaries: Beneficiary[]
}) => {
  const { t } = useTranslation()

  const avatars = beneficiaries.map((beneficiary) =>
    getBeneficiaryTypeEmoji(beneficiary.type)
  )

  const getNames = () => {
    const ownName = t('gift_card.details.beneficiaries.list.own_name')
    const names = beneficiaries.map((beneficiary) => {
      if (beneficiary.type === 'user') return ownName
      return beneficiary.firstName
    })

    if (names.length === 0) return ''
    if (names.length === 1)
      return t(
        `gift_card.details.beneficiaries.list.one_name.${names[0] === ownName ? 'own' : 'other'}`,
        {
          name: names[0],
        }
      )
    return t('gift_card.details.beneficiaries.list.several_names', {
      namesList: names.slice(0, -1).join(', '),
      lastName: names.slice(-1),
    })
  }

  const content = (
    <div className="flex gap-2 items-center">
      <AvatarGroup avatars={avatars} />
      <p className="text-sm font-normal text-slate-600">{getNames()}</p>
    </div>
  )

  return (
    <BeneficiaryCard
      icon={mdiHumanMaleFemaleChild}
      title={t('gift_card.details.beneficiaries.list.title')}
      content={content}
    />
  )
}
