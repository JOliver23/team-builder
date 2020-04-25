import styled from 'styled-components';

export const TMGrid = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const MemberCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 3rem;
    width: 15vw;
    background: papayawhip;
    border: 3rem double slategrey;
`;

export const AppStyle = styled.div`
    background: linear-gradient(135deg, lavender, papayawhip);
`;

export const TitleSty = styled.h1`
    color: khaki;
    background: black;
    font-size: x-large;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: green;
    border: 2rem solid blue;
`;