import React from 'react'
import styled from 'styled-components'
import { images } from '<static>/data.json'

const ImageViewFunction = ({ src }) => {
  console.log(src.toString())
  return <img src={'<static>/images/_1.jpg'} />
}

class Main extends React.PureComponent {
  render() {
    return (
      <>
        {/* {images.map(image => (
          <ImageViewFunction src={image.image} />
        ))} */}
        <img src="/static/images/_1.jpg" alt="my image" />
      </>
    )
  }
}

export default Main

const ImageView = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('../static/images/_1.jpg');
`
