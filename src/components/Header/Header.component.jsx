import React from "react";
import { Link } from "react-router-dom";

import CustomButton from "../Custom-Button/Custom-Button.component";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLinks,
  FormContainer,
  InnerForm,
  InputField,
  AuthLinks,
} from "./Header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" style={{ width: "70px", height: "50px" }} />
        <p>E Learner</p>
      </LogoContainer>
      <OptionsContainer>
        <FormContainer>
          <InnerForm>
            <InputField>
              <input
                id="search"
                type="text"
                placeholder="Search for category or course"
              />
            </InputField>
            <InputField style={{ width: "30%" }}>
              <button className="btn-search" type="button">
                Search
              </button>
            </InputField>
          </InnerForm>
        </FormContainer>
        <OptionLinks to="/courses">Courses</OptionLinks>
        <OptionLinks to="/">About</OptionLinks>
        <Link to="/sign_in" style={{ textDecoration: "none" }}>
          <CustomButton isLogin>Log In</CustomButton>
        </Link>
        <Link to="/sign_up" style={{ textDecoration: "none" }}>
          <CustomButton>Sign Up</CustomButton>
        </Link>
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
