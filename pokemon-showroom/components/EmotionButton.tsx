/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from '@emotion/react';
import {FC} from 'react';

const buttonStyle =css({
    padding: 32,
    backgroundColor: 'pink',
    fontSize: 24,
    borderRadius: 4,
    '&:hover':{
        color: 'white'
    }
})

const EmotionButton : FC= ()=>{
    return(
        <div css={buttonStyle}>
            Hover to change color
        </div>
    )
}

export default EmotionButton;