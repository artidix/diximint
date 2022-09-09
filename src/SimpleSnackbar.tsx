import { useSnackbar } from 'notistack';
import Button from '@mui/material/Button';

export default () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const handleClick = () => {
        enqueueSnackbar('I love hooks');
    };

    return (
        <Button onClick={handleClick}>Show snackbar</Button>
    );
}