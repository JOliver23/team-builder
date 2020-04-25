import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import TeamMember from './components/TeamMember';
import NewMemberForm from './components/NewMemberForm';

function App() {
  const [member, setNewMember] = useState([
    {
        id: 1,
        name: "Joe Shmoe",
        bday: "2020-04-20",
        favNum: 23
    }
    
  ]);

  const addNewMember = members => {
    
    const newMember = {
      id: Date.now(),
      name: members.name,
      bday: members.bday,
      favNum: members.favNum
    };
    console.log(member);
    setNewMember([...member, newMember, ]);
  
  };

  return (
    <div>
      <NewMemberForm addNewMember={addNewMember}/>
      <h1>Team Members: </h1>
      <TeamMember member={member}/>
      
    </div>
  );
}

export default App;
