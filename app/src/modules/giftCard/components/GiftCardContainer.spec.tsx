import { fireEvent, render } from '@testing-library/react'
import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router'
import { I18nextProvider } from 'react-i18next'
import { expect, describe, it } from 'vitest'

import { GiftCardContainer } from './GiftCardContainer'
import { GiftCard } from '../types/giftCardTypes'
//@ts-expect-error - need to load the translations manually
import i18n from '../../../i18n'
import { getPercentage } from '../../../utils/utils'

describe('GiftCardContainer', () => {
  const today = new Date()
  const closingDate = new Date(today.setFullYear(today.getFullYear() + 1))
  const componentProps: Omit<
    GiftCard,
    'description' | 'openingDate' | 'beneficiaries'
  > = {
    id: 1,
    name: 'Carte cadeau Noyeux Joël',
    state: 'active',
    consumedAmount: 100,
    allowedAmount: 150,
    closingDate: closingDate.toLocaleDateString('fr'),
  }
  const percentage = getPercentage(
    componentProps.consumedAmount,
    componentProps.allowedAmount
  )

  const Wrapper = ({ children }: { children: ReactNode }) => (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </BrowserRouter>
  )

  it('should display the right information on the GiftCardContainer', () => {
    const { getByText } = render(<GiftCardContainer {...componentProps} />, {
      wrapper: Wrapper,
    })

    expect(getByText(componentProps.name)).toBeVisible()
    expect(getByText('Se clôture dans 1 an')).toBeVisible()
    expect(
      getByText(
        `${componentProps.consumedAmount} € dépensés / ${componentProps.allowedAmount} €`
      )
    ).toBeVisible()
    expect(getByText(`${percentage} %`)).toBeVisible()
  })

  it('should handle the navigation to the details page', () => {
    const { getByTestId } = render(<GiftCardContainer {...componentProps} />, {
      wrapper: Wrapper,
    })

    const cardContainer = getByTestId('giftcard-container')
    fireEvent.click(cardContainer)

    expect(window.location.pathname).toBe(`/gift_cards/${componentProps.id}`)
  })
})
