import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  color: #000;
`;

export const LogoContainer = styled(Link)`
  width: 20%;
  display: flex;
  padding: 10px 0;

  p {
    font-family: "Fredoka One", cursive;
    text-transform: uppercase;
    color: #FC3C64;
    margin: 3px 2px 0 0;
    padding: 6px 0px;
    font-size: 1.5em;
  }

  &:hover {
    text-decoration: none;
  }
`;

export const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OptionLinks = styled(Link)`
  margin: 0 2px;
  padding: 12px 15px;
  color: rgb(95, 93, 93);

  &:hover {
    text-decoration: none;
    color: rgb(95, 93, 93);
    background-color: #f2f2f2;
    padding: 12px 15px;
  }
`;

export const AuthButton = styled.button`
  font-size: 15px;
  margin: 0 2px;
  padding: 12px 22px;
  color: #fff;
  border: 0;
  cursor: pointer;
  background: #FC3C64;
  transition: all 0.2s ease-out, color 0.2s ease-out;

  &:firt-child {
    background: transparent;
  }

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    outline: none;
  }
`;

export const FormContainer = styled.form`
  width: 50%;
  margin-bottom: 0;
`;

export const InnerForm = styled.div`
  background: #fff;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 3px;
`;

export const InputField = styled.div`
  height: 3rem;
  width: 100%;

  input {
    height: 100%;
    background: #f2f2f2;
    border: 0;
    display: block;
    width: 100%;
    padding: 10px 32px;
    font-size: 16px;
    outline: none;

    &:placeholder {
      color: #888;
      font-size: 16px;
    }
  }

  button {
    height: 100%;
    width: 100%;
    white-space: nowrap;
    color: #fff;
    border: 0;
    cursor: pointer;
    background: #FC3C64;
    transition: all 0.2s ease-out, color 0.2s ease-out;
    outline: none;

    &:hover {
        background: #E44F6E;
    }
  }
`;
