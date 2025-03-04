export type GiftCardState = 'active' | 'archived'

type BeneficiaryType = 'user' | 'companion' | 'child'

interface Beneficiary {
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
  openingDate: Date
  closingDate: Date
  state: GiftCardState
  allowedAmount: number
  consumedAmount: number
  beneficiaries: Beneficiary[]
}
