import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../redux/apiCalls"
import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 93vh;
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
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
`


const Input = styled.input`
    min-width: 25%;
    margin: 10px 0;
    padding: 10px;
    width: 100%;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    color: white;
    cursor: pointer;
    background-color: teal;
    margin: 20px 0;
    &:hover{
      background-color: #16a1a1;
      color: lightgray;
      transition: all 0.5s ease-in;
    }
`

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispath = useDispatch();

  const handleClick = (e) =>{
    e.preventDefault();
    login(dispath,{username,password});
  }
  return (
    <Container>
      <Wrapper>
        <Title >SIGN IN</Title>
            <Input placeholder="username" 
              onChange={(e)=>setUsername(e.target.value)}
            ></Input>
            <Input placeholder="password"
              type="password"
              onChange={(e)=>setPassword(e.target.value)}
            ></Input>
            <Button onClick={handleClick}>LOGIN</Button>
      </Wrapper>
    </Container>
  )
}

export default Login;