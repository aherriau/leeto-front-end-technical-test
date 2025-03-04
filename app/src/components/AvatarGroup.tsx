import { BeneficiaryEmoji } from '../modules/giftCard/types/giftCardTypes'
import { Avatar } from './Avatar'

export const AvatarGroup = ({ avatars }: { avatars: BeneficiaryEmoji[] }) => {
  return (
    <div className="flex">
      {avatars.map((avatar, index) => (
        <Avatar key={index} emoji={avatar} overlap={index > 0} />
      ))}
    </div>
  )
}
