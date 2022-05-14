import styled from '@emotion/styled';
import {FC} from 'react';

const Button = styled.button`
    padding: 32px;
    background-color: pink;
    font-size: 24px;
    border-radius: 4;
    color: black;
    font-weight: bold;
    '&:hover':{
        color: 'white'
    }
`;

const StyledEmotionButton: FC = () =>{
    return <Button>This is my button component.</Button>
};

export default StyledEmotionButton;