import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router'

import { GiftCardList } from '../components/GiftCardList'
import { LIST_TABS } from '../constants/giftCardConstants'
import {
  useGetActiveGiftCards,
  useGetArchivedGiftCards,
} from '../queries/useGiftCardQueries'
import { Tabs } from '../../../components/Tabs'

export const PageGiftCardList = () => {
  const { t } = useTranslation()
  const [searchParams, setSearchParams] = useSearchParams()

  const tabQueryParam = searchParams.get('tab')
  const isTabInvalid =
    !tabQueryParam || !['active', 'archived'].includes(tabQueryParam)

  useEffect(() => {
    if (isTabInvalid)
      setSearchParams(`?${new URLSearchParams({ tab: 'active' })}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [activeTab, setActiveTab] = useState(
    isTabInvalid ? 'active' : tabQueryParam
  )

  const { data: activeGiftCards = [], isPending: isActiveGiftCardsPending } =
    useGetActiveGiftCards()
  const {
    data: archivedGiftCards = [],
    isPending: isArchivedGiftCardsPending,
  } = useGetArchivedGiftCards()

  const [activeData, setActiveData] = useState({
    giftCards: activeGiftCards,
    isLoading: isActiveGiftCardsPending,
  })

  useEffect(() => {
    if (activeTab === 'active')
      setActiveData({
        giftCards: activeGiftCards,
        isLoading: isActiveGiftCardsPending,
      })
    else if (activeTab === 'archived')
      setActiveData({
        giftCards: archivedGiftCards,
        isLoading: isArchivedGiftCardsPending,
      })

    setSearchParams(`?${new URLSearchParams({ tab: activeTab })}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, isActiveGiftCardsPending, isArchivedGiftCardsPending])

  const tabs: { name: string; label: string }[] = LIST_TABS.map((tab) => ({
    name: tab,
    label: t(`gift_card.list.tabs.${tab}`, {
      count:
        tab === 'active' ? activeGiftCards.length : archivedGiftCards.length,
    }),
  }))

  const onTabClick = useCallback(
    (tabName: string) => {
      if (tabName !== activeTab) setActiveTab(tabName)
    },
    [activeTab]
  )

  return (
    <div className="m-4 sm:m-6">
      <h1 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-6">
        {t('gift_card.list.title')}
      </h1>

      <Tabs tabs={tabs} activeTab={activeTab} onTabClick={onTabClick} />

      <GiftCardList
        giftCards={activeData.giftCards}
        isLoading={activeData.isLoading}
      />
    </div>
  )
}
