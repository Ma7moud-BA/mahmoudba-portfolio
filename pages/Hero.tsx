import React from "react";

const Hero = () => {
	return (
		<div className="   section flex flex-col lg:flex-row">
			<div className="flex-1 mx-auto h-screen max-h-screen overflow-y-auto">
				<h1 className="font-extrabold lg:text-8xl text-4xl uppercase">
					Hi, I&#39;M
				</h1>
				<h2 className="text-primary font-bold lg:text-7xl text-5xl">
					Mahmoud BanyAmer
				</h2>
				<p className="mt-3">
					Passionate web developer, with a dedicated focus on both front-end and
					back-end development. Currently building a foundation in creating
					engaging web experiences and problem-solving skills. Eager to
					contribute to a dynamic team while further growing as a web developer.
				</p>
			</div>
			<div className="flex-1"></div>
		</div>
	);
};

export default Hero;
