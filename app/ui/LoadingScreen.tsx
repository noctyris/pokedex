import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="newtons-cradle">
        <div className="newtons-cradle__dot" />
        <div className="newtons-cradle__dot" />
        <div className="newtons-cradle__dot" />
        <div className="newtons-cradle__dot" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .newtons-cradle {
   --uib-size: 50px;
   --uib-speed: 1.2s;
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   width: var(--uib-size);
   height: var(--uib-size);
  }

  .newtons-cradle__dot {
   position: relative;
   display: flex;
   align-items: center;
   height: 100%;
   width: 25%;
   transform-origin: center top;
  }

  .newtons-cradle__dot::after {
   content: '';
   display: block;
   width: 100%;
   height: 25%;
   border-radius: 50%;
   background-color: rgb(var(--foreground));
  }

  .newtons-cradle__dot:first-child {
   animation: swing var(--uib-speed) linear infinite;
  }

  .newtons-cradle__dot:last-child {
   animation: swing2 var(--uib-speed) linear infinite;
  }

  @keyframes swing {
   0% {
    transform: rotate(0deg);
    animation-timing-function: ease-out;
   }

   25% {
    transform: rotate(70deg);
    animation-timing-function: ease-in;
   }

   50% {
    transform: rotate(0deg);
    animation-timing-function: linear;
   }
  }

  @keyframes swing2 {
   0% {
    transform: rotate(0deg);
    animation-timing-function: linear;
   }

   50% {
    transform: rotate(0deg);
    animation-timing-function: ease-out;
   }

   75% {
    transform: rotate(-70deg);
    animation-timing-function: ease-in;
   }
  }`;

export default function UILoadingScreen() {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<div className="flex flex-col space-y-5 items-center">
				<Loader />
				<p>Chargement en cours...</p>
			</div>
		</div>
	)
}
