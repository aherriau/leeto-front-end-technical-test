export const Tabs = ({
  tabs,
  activeTab,
  onTabClick,
}: {
  tabs: { name: string; label: string }[]
  activeTab: string
  onTabClick: (tabName: string) => void
}) => {
  return (
    <div className="text-sm font-semibold text-center text-slate-600 border-b border-slate-300 mb-4">
      <ul className="flex flex-wrap -mb-px">
        {tabs.map((tab) => (
          <li
            key={tab.name}
            onClick={() => onTabClick(tab.name)}
            className={`
              inline-block px-4 py-2 border-b-2 cursor-pointer grow md:grow-0
              ${
                tab.name === activeTab
                  ? 'text-leeto-blue border-leeto-blue'
                  : 'border-transparent hover:text-slate-700 hover:border-slate-400'
              }
              `}
          >
            {tab.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
