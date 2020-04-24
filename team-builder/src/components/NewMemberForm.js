import React, { useState } from 'react';

const NewMemberForm = props => {

    return (
        <form>
            <label htmlFor="member">Member Name: </label>
            <input 
                type="text" 
                id="member"
                placeholder="Member Name"
            />
            <label htmlFor="bday">Birthday: </label>
            <input 
                id="bday"
                type="date"
                placeholder="2020-04-20"
            />
        </form>
    )
}

export default NewMemberForm;