export type GiftCardState = 'active' | 'archived'

export type BeneficiaryEmoji = '🙋‍♂️' | '💙' | '👶'
export type BeneficiaryType = 'user' | 'companion' | 'child'

export interface Beneficiary {
  id: number
  type: BeneficiaryType
  firstName: string
  consumption: {
    allowedAmount: number
    consumedAmount: number
  }
}

export interface GiftCard {
  id: number
  name: string
  description: string
  openingDate: string
  closingDate: string
  state: GiftCardState
  allowedAmount: number
  consumedAmount: number
  beneficiaries: Beneficiary[]
}
