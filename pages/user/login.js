import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import Button from '@mui/material/Button';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {styled} from '@mui/material/styles';
import {purple} from '@mui/material/colors';

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
    ].join(','),
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none'
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf'
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)'
    }
});
const ColorButton = styled(Button)(({theme}) => ({
    color: theme
        .palette
        .getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700]
    }
}));

export default function MaterialUIPickers() {
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
                <TextField id="outlined-basic" label="USERID"/>
                <TextField id="outlined-basic-2" label="PASSWORD"/>
            </Stack>
            <Stack spacing={2} direction="row" style={{marginTop:"20px", float: "right"}}>
                <ColorButton variant="contained" style={{width:"200px"}}>로그인</ColorButton>
                <BootstrapButton variant="contained" disableRipple="disableRipple" style={{width:"200px"}}>
                    취소
                </BootstrapButton>
            </Stack>
        </LocalizationProvider>
    );
}