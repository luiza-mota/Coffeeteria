import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) =>
    props.isSolid ? "rgba(0, 0, 0, 0.9)" : "transparent"};
  transition-duration: 0.5s;
  z-index: 999;

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
  }

  @media screen and (max-width: 560px) {
    .logo {
      z-index: 999;
    }
  }
`;

export const Navigation = styled.nav`
  ul {
    display: flex;
    gap: 20px;
  }
  ul li {
    list-style: none;
    font-size: 32px;
    color: white;

    &.selected {
      border-bottom: 1px solid white;
    }
  }

  @media screen and (max-width: 560px) {
    position: fixed;
    right: -100%;
    right: ${(props) => (props.isOpened ? "0" : "-100%")};
    top: 0;
    background-color: rgba(0, 0, 0, 0.9);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 0.5s;

    ul {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 24px;
  color: white;

  svg {
    cursor: pointer;
  }

  div.menu {
    display: none;
  }

  @media screen and (max-width: 560px) {
    z-index: 999;

    div.menu {
      display: initial;
    }
  }
`;
