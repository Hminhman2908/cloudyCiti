import Image from 'next/image'
import logo from "../../assets/imgs/Vector.png"
import { Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material'

const Header = () => {
    return (
        <Box sx={{background:"#fff",width:"100%",height:"84px",position:"relative",top:"0",borderBottom:"1px solid #33333326",zIndex:"10"}}>
            <Box sx={{width:"100%"}}>
                <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"nowrap",padding:"0 32px",height:"84px"}}>
                    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <Box sx={{margin:"0 84px"}}>
                            <Image
                                src={logo}
                                alt="Logo picture"
                                width={84}
                                height={84}
                            />
                        </Box>
                        <List sx={{display:"flex",alignItems:"center",listStyle:"none"}}>
                            <ListItem sx={{cursor:"pointer",margin:"0 10px",whiteSpace:"nowrap"}}>
                                <ListItemText sx={{color:"#33333380"}}>Home</ListItemText>
                            </ListItem>
                            <ListItem sx={{cursor:"pointer",margin:"0 10px",whiteSpace:"nowrap"}}>
                                <ListItemText sx={{color:"#33333380"}}>About us</ListItemText>
                            </ListItem>
                            <ListItem sx={{cursor:"pointer",margin:"0 10px",whiteSpace:"nowrap"}}>
                                <ListItemText sx={{color:"#00ace8"}}>Cloudy Citizens</ListItemText>
                            </ListItem>
                            <ListItem sx={{cursor:"pointer",margin:"0 10px",whiteSpace:"nowrap"}}>
                                <ListItemText sx={{color:"#33333380"}}>Housing</ListItemText>
                            </ListItem>
                            <ListItem sx={{cursor:"pointer",margin:"0 10px",whiteSpace:"nowrap"}}>
                                <ListItemText sx={{color:"#33333380"}}>Forums</ListItemText>
                            </ListItem>
                        </List>
                    </Box>
                    <Box>
                        <Box sx={{margin:"0 84px"}}>
                            <Button sx={{bgcolor:"#00ace8","&:hover":{bgcolor:"#0d92c2"},width:"126px",height:"52px",borderRadius:"124px",padding:"14px 44px 14px 44px",color:"#fff",border:"#00ace8",cursor:"pointer"}}>Login</Button>
                        </Box>  
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Header;