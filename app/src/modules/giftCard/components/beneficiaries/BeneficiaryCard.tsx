import Icon from '@mdi/react'
import { ReactNode } from 'react'

export const BeneficiaryCard = ({
  icon,
  title,
  content,
}: {
  icon: string
  title: string
  content: ReactNode
}) => {
  return (
    <div className="p-6 border border-slate-300 rounded-lg">
      <div className="flex mb-4 bg-green-100 rounded-lg w-10 h-10">
        <div className="text-green-800 m-auto">
          <Icon path={icon} size="18px" />
        </div>
      </div>

      <p className="mb-2 text-base font-medium text-slate-800">{title}</p>

      {content}
    </div>
  )
}
