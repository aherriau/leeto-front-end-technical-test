import Icon from '@mdi/react'
import { mdiArrowLeft } from '@mdi/js'
import { NavLink } from 'react-router'
import { useMediaQuery } from 'react-responsive'
import { useTranslation } from 'react-i18next'

import { GiftCard } from '../types/giftCardTypes'

export const GiftCardDetailsBackLink = ({ state }: Pick<GiftCard, 'state'>) => {
  const { t } = useTranslation()
  const isMobile = useMediaQuery({ query: `(max-width: 640px)` })

  return (
    <NavLink
      to={`/gift_cards?tab=${state === 'archived' ? 'archived' : 'active'}`}
    >
      {isMobile ? (
        <div className="flex w-8 h-8 border border-slate-300 rounded-lg mb-6">
          <div className="text-slate-900 m-auto w-3.5 h-3.5">
            <Icon path={mdiArrowLeft} />
          </div>
        </div>
      ) : (
        <div className="flex gap-1 items-center text-leeto-blue mb-6">
          <Icon path={mdiArrowLeft} size="14px" />
          <p className="text-sm font-medium">
            {t('gift_card.details.back_link')}
          </p>
        </div>
      )}
    </NavLink>
  )
}
