import Header from "../Header"
import { Button, Container, Content } from "./styles";


import Coffee from "../../assets/icons/coffe.png"

const Welcome = () => {
    return (
        <Container id="home">
           <Header className="header" />
           <Content>
                <h1>We are a bakery and a coffee shop</h1>
                <div className="divisor">
                    <hr />
                    <img src={Coffee} alt="" />
                    <hr />
                </div>
                <div style={{ textAlign: "center" }}>
                    <Button href="#menu">Discover menu</Button>
                </div>
            </Content>
        </Container>        
    )
}

export default Welcome