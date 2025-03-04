import { BeneficiaryType } from '../types/giftCardTypes'

export const getBeneficiaryTypeEmoji = (beneficiaryType: BeneficiaryType) => {
  switch (beneficiaryType) {
    case 'user':
      return '🙋‍♂️'
    case 'companion':
      return '💙'
    case 'child':
      return '👶'
  }
}
