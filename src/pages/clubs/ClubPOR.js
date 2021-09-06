import porImage from "./images/PORBg.png";

const porData = [
	{ id: 1, name: "Krishna Prajwal S", position: "President" },
	{ id: 2, name: "Krishna Prajwal S", position: "President" },
	{ id: 3, name: "Krishna Prajwal S", position: "President" },
];

export default function ClubPOR() {
	return (
		<>
			<h1 id="events_heading" className="mt-4">
				POR Holders
			</h1>
			<div className="container">
				<div className="row" style={{ width: "100%" }}>
					{porData.map((por) => (
						<div className="col-sm-4 text-center por" key={por.id}>
							<img
								src={porImage}
								className="rounded-circle img-fluid mb-2"
								alt="..."
							/>
							<h5
								className="m-0"
								style={{ fontWeight: "600", fontSize: "1rem" }}
							>
								{por.position}
							</h5>
							<h6
								style={{
									fontSize: "0.8rem",
									marginTop: "0.1rem",
								}}
							>
								{por.name}
							</h6>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
