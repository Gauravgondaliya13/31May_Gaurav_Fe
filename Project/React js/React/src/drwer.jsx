import React, { useState } from 'react'
import { Drawer, List,ListItemButton, ListItemIcon, ListItemText,IconButton } from '@mui/material'
const Page =['HOME',"About Us","Our Presence","Our Menu","Benefits","Outlets","Apply Now"]
import MenuIcon from '@mui/icons-material/Menu';
const Dra  = () => {
    const [openDrawer,setOpenDrawer] =  useState(false)
  return (
    <>
    <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)} >

        <List>
            {
                Page.map((pag,index) => (
                <ListItemButton onClick={() =>setOpenDrawer(false)} key={index}>
                <ListItemIcon>
                    <ListItemText>  {pag}</ListItemText>
                </ListItemIcon>
            </ListItemButton>
                )) 
            }
            
        </List>
    </Drawer>
    <IconButton sx={{color:'white',marginLeft:"auto"}} onClick={()=>setOpenDrawer(!openDrawer)}>
        <MenuIcon/>
    </IconButton>
    
    </>
  )
}

export default Dra