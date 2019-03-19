import React, { useState } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import Moment from 'react-moment'

import { IUser } from 'common/types'
import Byline from './Byline'
import AvatarList from './AvatarList'

const StyledPhotoDrop = styled.div`
  display: inline-block;
  position: relative;
`

const OverlayContainer = styled.div`
  border-radius: 0.5em;
  padding: 1em;
  background: rgba(0, 0, 0, 0.65);
  color: rgba(255, 255, 255, 0.85);
`

const Metadata = styled(OverlayContainer)`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0.5em;
  height: 3em;
  background: rgba(0, 0, 0, 0.85);
  box-shadow: 0.25em 0.25em 0.25em 0 rgba(0, 0, 0, 0.25);

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;

    &:first-child > *:not(:first-child) {
      margin-left: 0.5em;
    }

    &:last-child {
      margin-left: auto;
    }
  }
`

const DropImage = styled.img`
  border-bottom-left-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  height: auto;
  max-width: 100%;
  box-shadow: 0.25em 0.25em 0.25em 0 rgba(0, 0, 0, 0.25);
`

const INFO_FADE_OPACITY = 0.55

const StyledInfoContainer = styled.div`
  opacity: ${INFO_FADE_OPACITY};
`
const InfoContainer = posed(StyledInfoContainer)({
  hidden: {
    opacity: INFO_FADE_OPACITY,
    transition: { duration: 300 },
  },
  visible: {
    opacity: 1,
    transition: { duration: 150 },
  },
})

const CaptionContainer = styled(OverlayContainer)`
  position: absolute;
  bottom: 2em;
  left: 2em;
  right: 2em;
`

const CommenterContainer = styled.div`
  > div {
    margin: -0.25em;
    border: 2px solid rgba(255, 255, 255, 0.75);
  }

  padding-right: 0.5em;
`

interface PhotoDropProps {
  user: IUser
  src: string
  caption?: string
  className?: string
  createdAt: Date | string | number
  commenters?: IUser[]
}

const PhotoDrop: React.FC<PhotoDropProps> = ({
  user,
  src,
  caption,
  createdAt,
  className,
  commenters = [],
}) => {
  const [showInfo, setShowInfo] = useState(false)
  const [isDragging, setDragging] = useState(false)
  const pose = showInfo ? 'visible' : 'hidden'

  return (
    <StyledPhotoDrop
      className={className}
      onTouchStart={() => setDragging(false)}
      onTouchMove={() => setDragging(true)}
      onTouchEnd={e => {
        if (isDragging) return

        e.preventDefault()
        setShowInfo(!showInfo)
      }}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <Metadata>
        <div>
          <Byline user={user} />
          <span>&bull;</span>
          <Moment withTitle fromNow date={createdAt} />
        </div>
        <AvatarList users={commenters} />
      </Metadata>
      <DropImage src={src} alt="" />
      <InfoContainer pose={pose}>
        {caption && (
          <CaptionContainer>
            <span>{caption}</span>
          </CaptionContainer>
        )}
      </InfoContainer>
    </StyledPhotoDrop>
  )
}

export default PhotoDrop
