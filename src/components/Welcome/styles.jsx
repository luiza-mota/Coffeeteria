import styled from "styled-components";

import WelcomeBg from "../../assets/welcome-bg.png";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${WelcomeBg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;

  .header {
    padding: 20px;
    width: calc(100% - 15px);
    position: absolute;
  }
`;

export const Content = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 72px;
    color: white;
    text-align: center;
  }
  .divisor {
    display: flex;
    gap: 40px;
    margin: 30px 0;
    align-items: center;
    justify-content: center;

    hr {
      width: 150px;
      height: 1px;
      background-color: white;
    }
  }

  @media screen and (max-width: 560px) {
    width: 90%;

    h1 {
      font-size: 50px;
    }
  }
`;

export const Button = styled.a`
  font-size: 32px;
  line-height: 40.32px;
  padding: 8px 40px;
  border: 2px solid white;
  cursor: pointer;
  color: white;
  transition: .4s;

  &:hover {
    background: #FFFFFF;
    color: #000000de;
  }

  @media screen and (max-width: 560px) {
    padding: 4px 20px;
    font-size: 28px;
  }
`;
