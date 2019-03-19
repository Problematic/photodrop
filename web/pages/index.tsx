import React, { useMemo } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Link from 'next/link'

import PhotoDrop from '../components/PhotoDrop'

const StyledStream = styled.div`
  max-width: 32em;
  margin: 0 auto;
`

const StyledDrop = styled(PhotoDrop)`
  margin-bottom: 1em;
`

const AppBar = styled.div`
  position: fixed;
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 100;
  width: 100%;
  height: 2em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.55);

  a {
    color: black;
    text-decoration: none;
  }

  h1 {
    margin: 0.25em;
    font-size: larger;
  }
`

const App: React.FC = () => {
  const user = useMemo(
    () => ({
      username: 'problematic',
      displayName: 'Derek Stobbe',
      avatarUrl:
        'https://lh5.googleusercontent.com/-GpJiTL3r6XE/AAAAAAAAAAI/AAAAAAAACaU/yT_aKbSZ4N8/photo.jpg',
    }),
    []
  )

  const drops = useMemo(
    () => [
      {
        src: 'https://pbs.twimg.com/media/DFmh5bVXkAAxV1u.jpg:large',
        caption: 'A portal thing. I wonder where it goes?',
        createdAt: '2017-07-25T17:49:00Z',
        user,
      },
      {
        src: 'https://pbs.twimg.com/media/DFgVt3aU0AAREVR.jpg:large',
        caption: 'Doggo',
        createdAt: '2017-07-24T12:58:00Z',
        user,
      },
      {
        src: 'https://pbs.twimg.com/media/DFMs5AhUAAA6Zke.jpg:large',
        caption: '"Dead Planet"',
        createdAt: '2017-07-20T17:27:00Z',
        user,
      },
      {
        src: 'https://pbs.twimg.com/media/C6cADM2VUAE-o1s.jpg:large',
        caption: 'Just finished up this little scene, "Bathyscape"',
        createdAt: '2017-03-08T22:54:00Z',
        user,
      },
    ],
    []
  )

  return (
    <>
      <Head>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <AppBar>
        <Link href="/">
          <a>
            <h1>photodrop</h1>
          </a>
        </Link>
      </AppBar>
      <div style={{ height: '3em' }} />
      <StyledStream>
        {drops.map(drop => (
          <StyledDrop key={drop.src} {...drop} />
        ))}
      </StyledStream>
    </>
  )
}

export default App
