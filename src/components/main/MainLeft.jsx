import React from "react";

const MainLeft = ({ news }) => {
	return (
		<div className="main-left">
			<div className="heading">
				<span>Published at 12.08.2023</span>
				<h1>{news.title}</h1>
			</div>
			<div>
				<p>{news.paragraph}</p>
			</div>
		</div>
	);
};

export default MainLeft;
