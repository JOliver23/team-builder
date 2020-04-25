import React from 'react';
import { MemberCard } from '../HolderData';

const TeamMember = props => {
    console.log("TM props: ", props)
    return (
        <div className="member-container">
            {/* insert props.member.map method to render card of 
            new members from data list; see form management Notes.js ex */}
            {props.member.map(member => (
                <MemberCard key={member.id}>
                    <h2>{member.name}<span>{member.favNum}</span></h2>
                    <p>DOB: {member.bday}</p>
                    <h3>Member Id: {member.id}</h3>

                </MemberCard>
            ))}
        </div>
    );
};

export default TeamMember;