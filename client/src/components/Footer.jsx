import styled from "styled-components"
import GitHubIcon from '@mui/icons-material/GitHub';
import BookIcon from '@mui/icons-material/Book';
import MapIcon from '@mui/icons-material/Map';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { Payment } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection:"column" })}
`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    margin-left: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
`

const Center = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ display:"none" })}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;

`

const Right = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ backgroundColor:"#eee" })}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>WWE.</Logo>
        <Desc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam similique beatae quos praesentium, vero ab, sint tempore modi, provident ad deserunt asperiores. Reprehenderit rem, repudiandae vitae incidunt amet doloremque inventore.
        </Desc>
        <SocialContainer>
            <SocialIcon color="3B5999">
                <GitHubIcon></GitHubIcon>
            </SocialIcon>
            <SocialIcon color="E4405F">
                <BookIcon></BookIcon>
            </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>userful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
            <MapIcon style={{marginRight: "10px"}}/>Adress
        </ContactItem>
        <ContactItem>
            <LocalPhoneIcon style={{marginRight: "10px"}}/>phoneNumber
        </ContactItem>
        <ContactItem>
            <EmailIcon style={{marginRight: "10px"}}/>email
        </ContactItem>
        <Payment/>
      </Right>
    </Container>
  )
}

export default Footer
