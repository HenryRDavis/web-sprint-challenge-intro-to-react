// Write your Character component here
import React, { useState } from 'react'
import styled from 'styled-components';

const styledDiv = styled.div`
    font-family: ${props => props.fontFamily};
`

const Character = ({name}) => {
    return(
        <styledDiv>
            <h1> {name} </h1>
        </styledDiv>
    )
}

export default Character