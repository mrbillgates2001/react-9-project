import React from "react";

const MainLeft = ({ post }) => {
	return (
		<div className="main-left">
			<div className="heading">
				<span>Published at 12.08.2023</span>
				<h1>{post.title}</h1>
			</div>
			<div>
				<p>{post.paragraph}</p>
			</div>
		</div>
	);
};

export default MainLeft;
