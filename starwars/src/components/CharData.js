import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    font-family: ${props => props.theme.fontFamily};
`

const CharData = ({details}) => {
    return(
        <StyledDiv>
            <h3> Gender: {details.gender} </h3>
            <h3> Hair Color: {details.hair_color} </h3>
            <h3> Eye Color: {details.eye_color} </h3>
            <h3> Height: {details.height} </h3>
            <h3> Birth: {details.birth_year} </h3>
            <h3> Weight: {details.mass} </h3>
        </StyledDiv>
            
    )
}


export default CharData