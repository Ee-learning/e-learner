import React from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import FormInput from "../Form-Input/Form-Input.component";
import CustomButton from "../Custom-Button/Custom-Button.component";

import {
  AuthButtonsContainer,
  SignUpContainer,
  SignUpCard,
  SignUpCardBody,
} from "./Sign-Up.styles";

const SignUp = () => {
  return (
    <SignUpContainer>
      <SignUpCard>
        <SignUpCardBody>
          <h3>Welcome to E Learner</h3>
          <p>Sign up instantly</p>
          <AuthButtonsContainer>
            <Button type="submit">
              <i className="fab fa-google"></i>
            </Button>
            <Button type="submit" variant="dark">
              <i className="fab fa-github"></i>
            </Button>
            <Button type="submit" variant="info">
            <i className="fab fa-linkedin-in"></i>
            </Button>
          </AuthButtonsContainer>
          <h6><span>Or</span></h6>
          <Form>
            <FormInput>
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <input type="email" placeholder="Enter your email" />
            </FormInput>
            <FormInput>
              <i className="fa fa-lock"></i>
              <input type="password" placeholder="Enter your password" />
            </FormInput>
            <FormInput>
              <i className="fa fa-lock"></i>
              <input type="password" placeholder="Confirm your password" />
            </FormInput>
          </Form>
          <CustomButton isCardButton>Sign Up</CustomButton>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/sign_in" style={{ textDecoration: 'none' }}>Sign in</Link>
            </span>
          </p>
        </SignUpCardBody>
      </SignUpCard>
    </SignUpContainer>
  );
};

export default SignUp;
