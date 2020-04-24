import React from 'react';

const TeamMember = props => {
    console.log("TM props: ", props)
    return (
        <div className="member-container">
            {/* insert props.member.map method to render card of 
            new members from data list; see form management Notes.js ex */}
            {props.member.map(member => (
                <div className="member-card" key={member.id}>
                    <h2>{props.member.name}<span>{props.member.favNum}</span></h2>
                    <p>DOB: {props.member.bday}</p>
                    <h3>Member Id: {props.member.id}</h3>

                </div>
            ))}
        </div>
    );
};

export default TeamMember;