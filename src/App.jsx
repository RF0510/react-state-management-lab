import React, { useState } from 'react';
import photo1 from './components/images/photo1.png';
import photo2 from './components/images/photo2.png';
import photo3 from './components/images/photo3.png';
import photo4 from './components/images/photo4.png';
import photo5 from './components/images/photo5.png';
import photo6 from './components/images/photo6.png';
import photo7 from './components/images/photo7.png';
import photo8 from './components/images/photo8.png';
import photo9 from './components/images/photo9.png';
import photo10 from './components/images/photo10.png';



const App = () => {
  // State variables
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);


  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  const zombieFighters = [
    { name: 'Survivor', price: 12, strength: 6, agility: 4, img: photo1 },
    { name: 'Scavenger', price: 10, strength: 5, agility: 5, img: photo2 },
    { name: 'Shadow', price: 18, strength: 7, agility: 8, img: photo3 },
    { name: 'Tracker', price: 14, strength: 7, agility: 6, img: photo4 },
    { name: 'Sharpshooter', price: 20, strength: 6, agility: 8, img: photo5 },
    { name: 'Medic', price: 15, strength: 5, agility: 7, img: photo6 },
    { name: 'Engineer', price: 16, strength: 6, agility: 5, img: photo7 },
    { name: 'Brawler', price: 11, strength: 8, agility: 3, img: photo8 },
    { name: 'Infiltrator', price: 17, strength: 5, agility: 9, img: photo9 },
    { name: 'Leader', price: 22, strength: 7, agility: 6, img: photo10 },
  ];

 
  // Handle adding a fighter to the team
  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
      setTotalStrength(totalStrength + fighter.strength);
      setTotalAgility(totalAgility + fighter.agility);
    } else {
      console.log('Not enough money');
    }
  };

  // Handle removing a fighter from the team
  const handleRemoveFighter = (fighter) => {
    const updatedTeam = team.filter((member) => member.name !== fighter.name);
    setTeam(updatedTeam);
    setMoney(money + fighter.price);
    setTotalStrength(totalStrength - fighter.strength);
    setTotalAgility(totalAgility - fighter.agility);
  };

  return (
    <div>
      <h1>Zombie Fighter</h1>
      <h2>Money: ${money}</h2>
      <h3>Team Strength: {totalStrength}</h3>
      <h3>Team Agility: {totalAgility}</h3>
      <h2>Your Team</h2>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul>
          {team.map((member) => (
            <li key={member.name}>
              <img src={member.img} alt={member.name} />
              <h4>{member.name}</h4>
              <p>Price: ${member.price}</p>
              <p>Strength: {member.strength}</p>
              <p>Agility: {member.agility}</p>
              <button onClick={() => handleRemoveFighter(member)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h2>Fighters</h2>
      <ul>
        {zombieFighters.map((fighter) => (
          <li key={fighter.name}>
            <img src={fighter.img} alt={fighter.name} />
            <h4>{fighter.name}</h4>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>

    </div>
  );
};



export default App;
