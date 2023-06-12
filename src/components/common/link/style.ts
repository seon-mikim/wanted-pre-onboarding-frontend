import {styled} from 'styled-components'

interface LinkProps {
    isClicked: boolean
}

export const Link = styled.div<LinkProps>`
    color:${({isClicked})=> (isClicked? '#000':'grey')};
    cursor: pointer;
    &:hover{
        color:${({isClicked})=> (isClicked? 'grey':'#000')} 
    }
`