import React from 'react'
import styled from 'styled-components'
import LoadingImage from '../assets/icons/5.gif'

const PageLoading = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 30px;
  }
  p {
    font-size: 12px;
  }
`

const Loading = ({ text }) => {
  return (
    <PageLoading>
      <img src={LoadingImage} alt="app loading" />
      {text && <p>{text}</p>}
    </PageLoading>
  )
}

export default Loading
