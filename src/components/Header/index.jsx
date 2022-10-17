import { useState } from "react";
import {
  CloseOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Actions, Container, Navigation } from "./styles";
import Logo from "../../assets/icons/logo.png";

const Header = (props) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const [selectedPage, setSelectedPage] = useState("home");

  const [isScrolled, setIsScrolled] = useState(
    document.getElementById("root").scrollTop > 200
  );

  document.getElementById("root").addEventListener("scroll", (e) => {
    setIsScrolled(e.target.scrollTop > 200);
  });
  
  return (
    <Container id="home" {...props} isSolid={isScrolled}>
      <div className="logo">
        <img src={Logo} alt="" />
        <h2>Coffeteria</h2>
      </div>
      <Navigation isOpened={isMenuOpened}>
        <ul>
          <a href="#home">
            <li
              className={selectedPage === "home" && "selected"}
              onClick={() => setSelectedPage("home")}
            >
              Home
            </li>
          </a>
          <a href="#about">
            <li
              className={selectedPage === "about" && "selected"}
              onClick={() => setSelectedPage("about")}
            >
              About
            </li>
          </a>
          <a href="#menu">
            <li
              className={selectedPage === "menu" && "selected"}
              onClick={() => setSelectedPage("menu")}
            >
              Menu
            </li>
          </a>
          <a href="#offers">
            <li
              className={selectedPage === "offers" && "selected"}
              onClick={() => setSelectedPage("offers")}
            >
              Offers
            </li>
          </a>
        </ul>
      </Navigation>
      <Actions>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          <ShoppingCartOutlined />
        </div>
        <div className="menu">
          {isMenuOpened ? (
            <CloseOutlined onClick={() => setIsMenuOpened(false)} />
          ) : (
            <MenuOutlined onClick={() => setIsMenuOpened(true)} />
          )}
        </div>
      </Actions>
    </Container>
  );
};

export default Header;
