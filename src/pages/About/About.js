import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import aboutcss from "./AboutContent.module.css";
import { Link } from "react-router-dom";
import { about } from "./data";

export default function About() {
	const [selectedItem, setSelectedItem] = useState(about.rightheading[0]);

	const handleItemClick = (item) => {
		setSelectedItem(item);
	};
	const back = () => {
		window.history.go(-1);
	};

	return (
		<div className={aboutcss.aboutfont}>
			<div
				className={aboutcss.aboutsection}
				style={{
					display: `flex`,
					flexDirection: `column`,
					margin: `auto`,
					background: `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url(${about.backimage}) no-repeat center center/cover`,
					backgroundSize: "cover",
					position: `absolute`,
					top: `0px`,
					zIndex: -2,
					width: `100%`,
					minHeight: `100vh`,
					color: `white`,
				}}
			>
				<div className={aboutcss.aboutbackimage}></div>
				<div className={aboutcss.aboutmain}>
					<div className={aboutcss.aboutback}>
						<i
							className="fa fa-chevron-left"
							style={{ fontSize: "2em" }}
							aria-hidden="true"
							onClick={back}
						></i>
						<h6
							style={{ marginBottom: "0px", marginLeft: "10px" }}
							onClick={back}
						>
							Back
						</h6>
					</div>
					<div className={aboutcss.aboutcontent}>
						<div className={aboutcss.aboutleft}>
							<Fade direction="left" delay={300} triggerOnce>
								<div className={aboutcss.aboutleftheading}>
									<h1>{selectedItem.heading}</h1>
									<p style={{ marginTop: "1rem" }}>{selectedItem.content}</p>
								</div>
							</Fade>
						</div>

						<div className={aboutcss.aboutright}>
							<Fade direction="right" delay={300} triggerOnce>
								{about.rightheading.map((item) => (
									<div key={item.id} className={aboutcss.link}>
										{item.id === "su-team" || item.id === "contact" ? (
											<Link to={`/${item.id}`} className={aboutcss.customLink}>
												<h1>{item.title}</h1>
											</Link>
										) : (
											<h1 onClick={() => handleItemClick(item)}>
												{item.title}
											</h1>
										)}
									</div>
								))}
							</Fade>
						</div>
					</div>
					<div className={aboutcss.aboutbottomheading}>
						<h1>{about.bottomheading}</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
