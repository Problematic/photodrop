import React, { useMemo } from 'react'

import { IUser } from 'common/types'
import Avatar from './Avatar'
import styled from 'styled-components'

const StyledAvatarList = styled.div``

const StyledAvatar = styled(Avatar)`
  margin: 0 0.125em;
`

const ProppedMoreCount = styled.div<{ size: string }>``
const MoreCount = styled(ProppedMoreCount)`
  border-radius: 50%;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

interface AvatarListProps {
  max?: number
  avatarSize?: string
  users: IUser[]
}

const AvatarList: React.FC<AvatarListProps> = ({
  max = 2,
  avatarSize: size = '2em',
  users = [],
}) => {
  const displayed = useMemo(() => users.slice(0, max), [max, users])
  const moreCount = Math.max(users.length - max, 0)

  return (
    <StyledAvatarList>
      {displayed.map(user => (
        <StyledAvatar key={user.displayName} size={size} {...user} />
      ))}
      {moreCount > 0 && <MoreCount size={size}>+{moreCount}</MoreCount>}
    </StyledAvatarList>
  )
}

export default AvatarList
