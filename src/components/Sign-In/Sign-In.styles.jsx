import styled from "styled-components";
import { Card } from "react-bootstrap";

export const AuthButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  i {
    font-size: 1.2em;
  }
`;

export const SignInContainer = styled.div`
  margin-top: 2em;
  font-family: "Poppins", sans-serif;
`;

export const SignInCard = styled(Card)`
  margin: 0 auto;
  width: 22rem;
  text-align: center;
`;

export const SignInCardBody = styled(Card.Body)`
  padding: 2.5em;

  h3 {
    font-size: 24px;
  }

  p {
    padding-top: 1.5em;
    color: #7c7c7c;
    font-size: 0.9em;

   span Link {
      color: #7c7c7c;

      &:hover {
        color: #fc3c64;
      }
    }
  }
`;

export const FormInput = styled.div`
  margin-bottom: 1em;
  display: flex;
  i {
    padding: 15px;
    font-size: 20px;
    position: absolute;
    color: #7c7c7c;
  }
  input {
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100%;
    font-size: 14px;
    padding: 1em 1em 1em 3.5em;
    display: block;
    outline: none;
  }
`;
