import React from 'react'
import styled from 'styled-components'

const ProppedStyledAvatar = styled.div<{ size: string }>``
const StyledAvatar = styled(ProppedStyledAvatar)`
  border-radius: 50%;
  overflow: hidden;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  margin: 0.5em;
`

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  text-align: center;
  object-fit: cover;
`

interface AvatarProps {
  displayName: string
  avatarUrl?: string
  size?: string
  className?: string
}

const Avatar: React.FC<AvatarProps> = ({
  displayName,
  avatarUrl,
  size = '3em',
  className,
}) => {
  return (
    <StyledAvatar className={className} size={size} title={displayName}>
      {avatarUrl ? <StyledImage src={avatarUrl} /> : <span>{displayName}</span>}
    </StyledAvatar>
  )
}

export default Avatar
