import styled from 'styled-components'

const Card = styled.div`
  position: relative;
  border: 1px solid #ccc;
`

const CardImageStyled = styled.div`
  background: url("${props => props?.bgImage}") no-repeat center / cover;
`

const CardContent = styled.div`
  color: #000;
  padding: 10px;

  button {
    color: #ffffff;
    background-color: grey;
  }
`

const CardText = styled.p`
  color: #000;
`
const CardImage = ({ bgImage }) => {
  <CardImageStyled data={bgImage} />
}

export {
  Card,
  CardContent,
  CardText,
  CardImage
}
