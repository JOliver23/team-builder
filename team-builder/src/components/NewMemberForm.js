import React, { useState } from 'react';

const NewMemberForm = props => {
    const [member, setNewMember] = useState({mname: "", mbday: ""})

    const handleChanges = eve => {
        setNewMember({...member, [eve.target.name]: eve.target.value})
    }

    return (
        <form>
            <label htmlFor="member">Member Name: </label>
            <input 
                type="text" 
                id="member"
                placeholder="Member Name"
                name="mname"
                value={member.name}
            />
            <label htmlFor="bday">Birthday: </label>
            <input 
                id="bday"
                type="date"
                placeholder="2020-04-20"
                name="mbday"
                value={member.bday}
            />
            <label htmlFor="fav-num">Favorite Number: </label>
            <input 
                id="fav-num"
                type="number"
                name="fav-num"
                min="0"
                max="999"
                value={member.favNum}
            />
        </form>
    )
}

export default NewMemberForm;