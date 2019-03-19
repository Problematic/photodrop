import React from 'react'

import { IUser } from 'common/types'
import Avatar from './Avatar'
import styled from 'styled-components'

const StyledByline = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const DisplayName = styled.span``

interface BylineProps {
  user: IUser
}

const Byline: React.FC<BylineProps> = ({ user }) => {
  return (
    <StyledByline>
      <Avatar size="2em" {...user} />
      <DisplayName>{user.displayName}</DisplayName>
    </StyledByline>
  )
}

export default Byline
