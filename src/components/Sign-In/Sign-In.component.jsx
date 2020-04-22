import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import CustomButton from "../Custom-Button/Custom-Button.component";

import {
  AuthButtonsContainer,
  SignInContainer,
  SignInCard,
  SignInCardBody,
  FormInput,
} from "./Sign-In.styles";

const SignIn = () => {
  return (
    <SignInContainer>
      <SignInCard>
        <SignInCardBody>
          <h3>Welcome back!</h3>
          <p>Login to your account</p>
          <AuthButtonsContainer>
            <Button type="submit">
              <i class="fab fa-google"></i>
            </Button>
            <Button type="submit">
              <i class="fab fa-github"></i>
            </Button>
            <Button type="submit">
              <i class="fa fa-linkedin"></i>
            </Button>
          </AuthButtonsContainer>
          <p>Or</p>
          <Form>
            <FormInput>
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <input type="email" placeholder="Enter your email" />
            </FormInput>
            <FormInput>
              <i className="fa fa-lock"></i>
              <input type="password" placeholder="Enter your password" />
            </FormInput>
          </Form>
          <CustomButton isCardButton>Sign in</CustomButton>
          <p>
            Dont have an acount?{" "}
            <span>
              <Link to="/sign_up">Sign Up</Link>
            </span>
          </p>
        </SignInCardBody>
      </SignInCard>
    </SignInContainer>
  );
};

export default SignIn;
