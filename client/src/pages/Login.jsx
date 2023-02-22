import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { login } from "../redux/apiCalls"
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://cdn.9oodnews.com/news/photo/202201/13182_19086_1431.jpg") center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 25%;
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
    flex-direction: column;
`
const Input = styled.input`
    min-width: 25%;
    margin: 10px 0;
    padding: 10px;
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
    margin-bottom: 10px;
    &:disabled{
      color: green;
      cursor:not-allowed;
    }
`
const Link = styled.a`
  font-size: 12px;
  cursor: pointer;
`
const Error = styled.span`
  color:red;
`

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispath = useDispatch();
  const {isFetching,error} = useSelector(state =>state.user);

  const handleClick = (e) =>{
    e.preventDefault();
    login(dispath,{username, password});
  }
  return (
    <Container>
      <Wrapper>
        <Title >SIGN IN</Title>
        <Form>
            <Input placeholder="username" 
              onChange={(e)=>setUsername(e.target.value)}
            ></Input>
            <Input placeholder="password"
              type={"password"}
              onChange={(e)=>setPassword(e.target.value)}
            ></Input>
            <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
            {error && <Error>Something went wrong...</Error>} 
            <Link>Do Not your username or passwrod?</Link>
            <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login