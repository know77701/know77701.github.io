import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://cdn.9oodnews.com/news/photo/202201/13182_19086_1431.jpg") center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: transparent;
    ${mobile({ width:"70%"})}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
   
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 10px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    color: white;
    cursor: pointer;
    &:hover{
        background-color: teal;
        
        transition: all 1s ease;
    }
`
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title >Create an account</Title>
        <Form>
            <Input placeholder="name"></Input>
            <Input placeholder="last name"></Input>
            <Input placeholder="username"></Input>
            <Input placeholder="email"></Input>
            <Input placeholder="password"></Input>
            <Input placeholder="confirm password"></Input>
            <Agreement>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id deserunt accusantium doloremque magni nesciunt quas amet dolor vero est accusamus! Ea ratione enim tempora! Qui similique doloremque quidem laboriosam quis?
            </Agreement>
            <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}
export default Register
