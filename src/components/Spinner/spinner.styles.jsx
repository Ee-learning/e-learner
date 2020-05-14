import  styled from 'styled-components';

//  $left-pos: -9999px;
//  $x1: -$left-pos - $dot-spacing;
//  $x2: -$left-pos;
//  $x3: -$left-pos + $dot-spacing;
 
export const SpinnerOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

 export const SpinnerContainer = styled.div`
   position: relative;
   left: $left-pos;
 
   @include dot;
 
   box-shadow: $x2 0 0 -5px $dot-color;
   animation: dot-pulse 1.5s infinite linear;
   animation-delay: .25s;
 
   &::before,
   &::after {
     content: '';
     display: inline-block;
     position: absolute;
     top: 0;
 
     @include dot;
   }
 
   &::before {
     box-shadow: $x1 0 0 -5px $dot-before-color;
     animation: dot-pulse-before 1.5s infinite linear;
     animation-delay: 0s;
   }
 
   &::after {
     box-shadow: $x3 0 0 -5px $dot-after-color;
     animation: dot-pulse-after 1.5s infinite linear;
     animation-delay: .5s;
   }
 }
 
 @keyframes dot-pulse-before {
   0% {
     box-shadow: $x1 0 0 -5px $dot-before-color;
   }
 
   30% {
     box-shadow: $x1 0 0 2px $dot-before-color;
   }
 
   60%,
   100% {
     box-shadow: $x1 0 0 -5px $dot-before-color;
   }
 }
 
 @keyframes dot-pulse {
   0% {
     box-shadow: $x2 0 0 -5px $dot-color;
   }
 
   30% {
     box-shadow: $x2 0 0 2px $dot-color;
   }
 
   60%,
   100% {
     box-shadow: $x2 0 0 -5px $dot-color;
   }
 }
 
 @keyframes dot-pulse-after {
   0% {
     box-shadow: $x3 0 0 -5px $dot-after-color;
   }
 
   30% {
     box-shadow: $x3 0 0 2px $dot-after-color;
   }
 
   60%,
   100% {
     box-shadow: $x3 0 0 -5px $dot-after-color;
   }
`;