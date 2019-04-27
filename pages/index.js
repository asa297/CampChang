import React from 'react'
import styled, { keyframes } from 'styled-components'
import { bounceInUp } from 'react-animations'

const bounceAnimation = keyframes`${bounceInUp}`

class Main extends React.PureComponent {
  render() {
    return (
      <Container>
        <ContainerCenter>
          <ImageContainer>
            <ImageView src={'/static/character/_1.jpg'} />
          </ImageContainer>

          <TextContainer>
            <Text>Coming Soon</Text>
          </TextContainer>
        </ContainerCenter>
      </Container>
    )
  }
}

export default Main

const Container = styled.div`
  width: 100%;
  height: 100vh;
`

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  transform: translateY(25%);
`

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const ImageView = styled.img`
  @media (max-width: 600px) {
    width: 70%;
    height: 50vh;
  }

  @media (min-width: 600px) and (max-width: 960px) {
    @media (max-height: 600px) {
      width: 25%;
    }
    width: 55%;
    height: 50vh;
  }

  @media (min-width: 960px) and (max-width: 1280px) {
    width: 40%;
    height: 50vh;
  }

  @media (min-width: 1280px) {
    width: 20%;
    height: 50vh;
  }
`
const TextContainer = styled.div`
  animation: 1s ${bounceAnimation};

  width: 100%;
  display: flex;
  justify-content: center;
  padding-left: 15px;
`
const Text = styled.div`
  font-size: 36px;
  font-weight: lighter;
`
