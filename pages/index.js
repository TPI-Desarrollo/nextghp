import Link from 'next/link'
import styled from 'styled-components'
import { prefix } from '../utils/prefix.js';

const Container = styled.div`
  background-color: red;
`

const Goto = styled.button`
  background-color: blue;
  border: none;

  :hover {
    cursor: pointer;
  }
`

const Login = () => {
  return (
    <Container>
      <div>Bienvenido a Quanticon Valley</div>
      <Link href="/principal"><Goto>
        Comenzar
      </Goto></Link>
    </Container>
  )
}
export default Login
