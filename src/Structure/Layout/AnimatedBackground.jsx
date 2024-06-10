// src/AnimatedBackground.js
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { animated, useSpring } from 'react-spring';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;



const Circle = styled(animated.div)`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  position: absolute;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  animation: ${float} ${({ duration }) => duration}s ease-in-out infinite;
`;

const AnimatedBackground = ({ isDark, setIsDark }) => {
	const Background = styled(animated.div)`
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  background: ${isDark ? 'linear-gradient(270deg, #0f2027, #203a43, #2c5364, #0f2027)' : 'black'};
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

	const backgroundProps = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: { duration: 2000 },
	});

	const circles = [
		{ size: 60, top: 20, left: 10, duration: 8 },
		{ size: 80, top: 50, left: 30, duration: 10 },
		{ size: 100, top: 70, left: 70, duration: 12 },
		{ size: 40, top: 80, left: 20, duration: 14 },
		{ size: 90, top: 30, left: 80, duration: 16 },
	];

	return (
		<div>
			<Background style={backgroundProps}>
				{circles.map((circle, index) => (
					<Circle
						key={index}
						size={circle.size}
						top={circle.top}
						left={circle.left}
						duration={circle.duration}
					/>
				))}
				<div className='z-20 w-full max-w-[1440px] mx-auto'>
					<Navbar isDark={isDark} setIsDark={setIsDark}></Navbar>
					<Outlet isDark={isDark}></Outlet>
				</div>
			</Background>

		</div>
	);
};

export default AnimatedBackground;
