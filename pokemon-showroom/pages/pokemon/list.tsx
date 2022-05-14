import { Button, Typography } from '@mui/material';
import Link from 'next/link';
import StyledEmotionButton from '../../components/StyledEmotionButton';


export default function List() {
    return (
        <>
            <Typography variant='h1'>
            List all Pokemon
            </Typography>
            <Button type='button' variant='contained' color='primary'>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </Button>
            <StyledEmotionButton/>
        </>
        );
}