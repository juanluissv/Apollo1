import { jsx } from '@emotion/react/macro'
import styled from '@emotion/styled'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import React from 'react';

import logo from './logo.png'

const HederWrapper = styled.div({
    width: '100%',
    height: '60px',
    alignContent: 'center',
    backgroundColor: '#ffffff',
    top: '0px',
    left: '0px',
    display: 'flex',
    boxShadow: '0px 7px 11px 3px rgba(0,0,0,0.1)',
    justifyContent: 'space-between',
  })
const LogoWrapper = styled.div({
  display: 'flex',
})
const HederLogo = styled.img({
  height: '25px',
  margin: '14px 20px'
})
const HederTitle = styled.p({
  color: '5F5F5F',
  fontSize: '15px',
  paddingTop: '5px',
  lineHeight: '20px',
  fontFamily: 'Roboto',
  fontWeight: '400',
  letterSpacing: '0.25px',
})
const HeaderBar = styled.span({
    marginRight: '20px'
   })
const IconsWrapper = styled.div({
  margin: '0px 45px',
  display: 'flex',
  alignItems: 'center'
})

const Profile = styled.div({
  padding: '6px 6px',
  paddingBottom: '10px',
  fontSize: '20px',
  background: '#A7FFE0',
  borderRadius: '30px'
})



const Navbar = () => {

    return (
        <HederWrapper >
            <LogoWrapper>
                <HederLogo src={logo} />
                <HederTitle> <HeaderBar>| </HeaderBar>
                Product name here
                </HederTitle>
           </LogoWrapper>

            <IconsWrapper>
           <NotificationsNoneIcon sx={{ fontSize: 27, marginRight: 3 }} />
           <ChatBubbleOutlineIcon sx={{ fontSize: 27, marginRight: 3 }} />
           <SettingsOutlinedIcon sx={{ fontSize: 27, marginRight: 3 }} />
           <Profile>AC</Profile>
           </IconsWrapper>

        </HederWrapper>
    )
}


export default Navbar