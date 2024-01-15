import React, { useEffect, useState } from "react";
import axios from "axios";
import {
	afgan,
	afrikabanan,
	benzema,
	futbol,
	kazakpassport,
	muzey,
	qor,
	qotil,
	vorzakon,
} from "../../../public/images";
import "./Main.scss";
import MainLeft from "./MainLeft";

const Main = () => {
	const [news, setNews] = useState([]);
	const [posts, setPosts] = useState([])

	const fetchNews = async () => {
		try {
			const res = await axios.get("http://localhost:3000/news");
			const data = await res.data;
			setNews(data);
		} catch (error) {
			console.log(error);
		}
	};

	const handleClick = async (id) => {
		try {
			const res = await axios.get(`http://localhost:3000/news/${id}`);
			const data = await res.data;
			setPosts(data);
		} catch (error) {
			
		}
	}


	useEffect(() => {
		fetchNews();
	}, []);

	return (
		<div className="container main-container">
			<div className="main-left">
				{news.map((news) => (
					<MainLeft key={news.id} news={news} />
				))}
			</div>
			<div onClick={handleClick} className="news-cards main-right">
				{news.map((news) => (
					<div key={news.id} className="news-card">
						<img src={news.image} alt="" />
						{/* <h5>{news.id}</h5> */}
						<h6>{news.title}</h6>
					</div>
				))}
			</div>
		</div>
	);
};

export default Main;
