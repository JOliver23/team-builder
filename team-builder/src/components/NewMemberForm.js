import React, { useState } from 'react';

const NewMemberForm = ({ addNewMember }) => {
    const [member, setNewMember] = useState({mname: "", mbday: "", favNum: ""})

    const handleChanges = event => {
        setNewMember({...member, [event.target.name]: event.target.value});
    }
    console.log("member state: ", member);

    const FormSubmit = event => {
        event.preventDefault();
        addNewMember(member);
        setNewMember({name: "", bday: "", favNum: ""})
        
    };

    return (
        <form onSubmit={FormSubmit}>
            <label htmlFor="member">Member Name: </label>
            <input 
                type="text" 
                id="member"
                placeholder="Member Name"
                name="mname"
                value={member.name}
                onChange={handleChanges}
            />
            <br />
            <label htmlFor="bday">Birthday: </label>
            <input 
                id="bday"
                type="date"
                placeholder="2020-04-20"
                name="mbday"
                value={member.bday}
                onChange={handleChanges}
            />
            <label htmlFor="fav-num">Favorite Number: </label>
            <input 
                id="fav-num"
                type="number"
                name="favNum"
                min="0"
                max="999"
                value={member.favNum}
                onChange={handleChanges}
            />
            <br />
            <button type="submit">Add Member</button>
        </form>
    )
}

export default NewMemberForm;