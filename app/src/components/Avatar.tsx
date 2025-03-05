import { BeneficiaryEmoji } from '../modules/giftCard/types/giftCardTypes'

export const Avatar = ({
  emoji,
  overlap,
}: {
  emoji: BeneficiaryEmoji
  overlap?: boolean
}) => {
  return (
    <div
      data-testid="avatar-container"
      className={`flex w-8 h-8 rounded-4xl bg-slate-100 ${overlap ? '-ml-1 outline-2 outline-white' : ''}`}
    >
      <div className="text-xs font-medium m-auto">{emoji}</div>
    </div>
  )
}
