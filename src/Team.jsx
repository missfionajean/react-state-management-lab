import { useState } from "react";

const Team = () => {
	// state varaible for current team members
	const [team, setTeam] = useState([]);

	// html to be returned on component call
	return (
		<>
			<h2>Team Strength: 0</h2>
			<h2>Team Agility: 0</h2>
			<h2>Team</h2>
			<ul>
				{team.map((fighter, index) => (
					<li key={index}>{fighter.name}</li>
				))}
			</ul>
		</>
	);
};

export default Team;
