// Write your Character component here
import React, {useState} from 'react'
import styled from 'styled-components';
import CharData from './CharData'

const StyledDiv = styled.div`
    font-family: ${props => props.fontFamily};
    background-color: ${props => props.theme.backgroundColor};
    width: ${props => props.theme.width};
    margin: ${props => props.theme.margin};
    &:hover {
    background-color: yellow;
    }
`

const Character = ({props}) => {
    const [infoData, setInfoData] = useState(null)
    
    const openDetails = details => {
        setInfoData(details)
    }

    return(
        <StyledDiv>
            <h1 onClick={(evt) => openDetails(props)}> {props.name} </h1>
           {
               infoData && <CharData details={infoData}/> 
           }
        </StyledDiv>
    )
}

export default Character