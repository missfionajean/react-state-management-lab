// imports
import { useState } from "react";
import "./App.css";

const App = () => {
	// state variable for current money
	const [money, setMoney] = useState(100);

	// state variables for current team
	const [team, setTeam] = useState([]);
	const [totalStrength, setTotalStrength] = useState(0);
	const [totalAgility, setTotalAgility] = useState(0);

	// state variable for fighter roster
	const [zombieFighters, setZombieFighters] = useState([
		{
			name: "Survivor",
			price: 12,
			strength: 6,
			agility: 4,
			img: "https://via.placeholder.com/150/92c952",
		},
		{
			name: "Scavenger",
			price: 10,
			strength: 5,
			agility: 5,
			img: "https://via.placeholder.com/150/771796",
		},
		{
			name: "Shadow",
			price: 18,
			strength: 7,
			agility: 8,
			img: "https://via.placeholder.com/150/24f355",
		},
		{
			name: "Tracker",
			price: 14,
			strength: 7,
			agility: 6,
			img: "https://via.placeholder.com/150/d32776",
		},
		{
			name: "Sharpshooter",
			price: 20,
			strength: 6,
			agility: 8,
			img: "https://via.placeholder.com/150/1ee8a4",
		},
		{
			name: "Medic",
			price: 15,
			strength: 5,
			agility: 7,
			img: "https://via.placeholder.com/150/66b7d2",
		},
		{
			name: "Engineer",
			price: 16,
			strength: 6,
			agility: 5,
			img: "https://via.placeholder.com/150/56acb2",
		},
		{
			name: "Brawler",
			price: 11,
			strength: 8,
			agility: 3,
			img: "https://via.placeholder.com/150/8985dc",
		},
		{
			name: "Infiltrator",
			price: 17,
			strength: 5,
			agility: 9,
			img: "https://via.placeholder.com/150/392537",
		},
		{
			name: "Leader",
			price: 22,
			strength: 7,
			agility: 6,
			img: "https://via.placeholder.com/150/602b9e",
		},
	]);

	// function for adding fighter to team
	const handleAddFighter = (newFighter) => {
		if (money >= newFighter.price) {
      newFighter.id = team.length
			setMoney(money - newFighter.price);
			setTeam([...team, newFighter]);
		} else {
			console.log("Not enough money!");
		}
	};

	// function for removing a fighter from team
	const handleRemoveFighter = (remFighter) => {
		setMoney(money + remFighter.price);
		setTeam(
			team.filter((fighter) => {
				return fighter.id !== remFighter.id;
			})
		);
	};

	// functions for total strength and agility
	const totalStr = (total, fighter) => {
		return total + fighter.strength;
	};

	const totalAgi = (total, fighter) => {
		return total + fighter.agility;
	};

	const totalScore = (score) => {
		if (score === "str") {
			return team.reduce(totalStr, 0);
		} else if (score === "agi") {
			return team.reduce(totalAgi, 0);
		}
	};

	return (
		<>
			<h1>Zombie Fighters</h1>
			<h2>Money: {money}</h2>
			<h2>Team Strength: {totalScore("str")}</h2>
			<h2>Team Agility: {totalScore("agi")}</h2>
			<h2>Team</h2>
			<ul>
				{team.length ? "" : <li>Pick some team members!</li>}
				{team.map((fighter, index) => (
					<div className="fighterCard" key={index}>
							<li>
								<img src={fighter.img} alt={fighter.name} />
							</li>
							<li>{fighter.name}</li>
							<li>Price: {fighter.price}</li>
							<li>Strength: {fighter.strength}</li>
							<li>Agility: {fighter.agility}</li>
						<button onClick={() => handleRemoveFighter(fighter)}>
							Remove
						</button>
					</div>
				))}
			</ul>
			<ul className="zombieFighters">
				{zombieFighters.map((fighter, index) => (
					<div className="fighterCard" key={index}>
							<li>
								<img src={fighter.img} alt={fighter.name} />
							</li>
							<li>{fighter.name}</li>
							<li>Price: {fighter.price}</li>
							<li>Strength: {fighter.strength}</li>
							<li>Agility: {fighter.agility}</li>
						<button onClick={() => handleAddFighter(fighter)}>
							Add
						</button>
					</div>
				))}
			</ul>
		</>
	);
};

export default App;
