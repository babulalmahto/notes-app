import React from 'react'
import {AppBar, Avatar, Box, Toolbar, Typography} from '@mui/material'
import { logo } from '../constants/constants';
import avatar from '../assets/images/avatar.jpg'




const Header:React.FC=()=>{
    return(
        <AppBar color='transparent' position='static'>
            <Toolbar>
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <img src={logo} alt="logo" style={{ width: 30, marginRight: 10 }} />
                    <Typography style={{ fontSize: 30 }}>Evernote</Typography>
                </Box>
                <Avatar alt="User Avatar" src={avatar} />
            </Toolbar>
        </AppBar>
    )
}
export default Header