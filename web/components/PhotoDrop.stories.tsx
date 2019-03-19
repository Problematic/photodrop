import { storiesOf } from '@storybook/react'

import PhotoDrop from './PhotoDrop'

const user = {
  username: 'testuser',
  displayName: 'Johnny B. Goode',
  avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/mlane/128.jpg',
}

storiesOf('Components|PhotoDrop', module)
  .add('with tall image', () => {
    return (
      <PhotoDrop
        user={user}
        src="https://images.unsplash.com/photo-1551334741-0f11da38e980?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512&q=80"
        caption="Photo by Casey Horner on Unsplash"
        createdAt={Date.now() - 1000 * 60 * 20}
      />
    )
  })
  .add('with wide image', () => {
    return (
      <PhotoDrop
        user={user}
        src="https://images.unsplash.com/photo-1551334787-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        caption="Photo by Casey Horner on Unsplash"
        createdAt={new Date('2019-03-17')}
      />
    )
  })
  .add('with no caption', () => {
    return (
      <PhotoDrop
        user={user}
        src="https://images.unsplash.com/photo-1551334787-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        createdAt={new Date('2018-09-15')}
      />
    )
  })
  .add('with comments', () => {
    const commenters = [
      {
        username: 'test_a',
        displayName: 'Test A',
        avatarUrl:
          'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
      },
      {
        username: 'test_b',
        displayName: 'Test B',
        avatarUrl:
          'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
      },
      {
        username: 'test_c',
        displayName: 'Test C',
        avatarUrl:
          'https://s3.amazonaws.com/uifaces/faces/twitter/jina/128.jpg',
      },
      {
        username: 'test_d',
        displayName: 'Test D',
        avatarUrl:
          'https://s3.amazonaws.com/uifaces/faces/twitter/abinav_t/128.jpg',
      },
      {
        username: 'test_e',
        displayName: 'Test E',
        avatarUrl:
          'https://s3.amazonaws.com/uifaces/faces/twitter/_hartjeg/128.jpg',
      },
    ]

    return (
      <PhotoDrop
        user={user}
        src="https://images.unsplash.com/photo-1551262919-892a6c84d26d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512&q=80"
        createdAt={new Date('2018-09-15')}
        caption="Photo by Valdemaras D. on Unsplash"
        commenters={commenters}
      />
    )
  })
