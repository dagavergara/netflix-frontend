import { styled } from "styled-components"

const Footer = () => {
  return (
    <Container>
      <div align="center" opacity={0.4} fontSize="sm" padding="15px">
        <p>
          &copy; {new Date().getFullYear()} Dairo García &nbsp;  &nbsp;   All Rights Reserved.
        </p>
      </div>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  color: white;
  padding: 30px;
`