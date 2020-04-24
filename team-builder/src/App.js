import React from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMember from './components/TeamMember';
import NewMemberForm from './components/NewMemberForm';

function App() {

  return (
    <div>
      <h1>Team Members: </h1>
      <TeamMember />
      <NewMemberForm />
    </div>
  );
}

export default App;
