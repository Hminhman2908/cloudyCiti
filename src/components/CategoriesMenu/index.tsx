import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";

const CategoriesMenu = () => {
    return (
        <Box sx={{bgcolor:"#fff",position:"relative",top:"0",left:"0px",right:"0px",borderBottom:"1px solid #33333326"}}>
            <Box sx={{bgcolor:"#fff",width:"100%"}}>
                <Box sx={{bgcolor:"#fff",boxSizing:"border-box",padding:"0 32px",width:"100%"}}>
                    <List sx={{display:"flex",flexWrap:"nowrap",margin:"0 84px",padding:"0",listStyle:"none"}}>
                        <ListItem sx={{padding:"0"}}>
                            <ListItemText
                            sx={{color:"#333", textAlign:"left",whiteSpace:"normal",fontWeight:"500",display:"block",fontSize:"16px",lineHeight:"24px",padding:"8px 0",textDecoration:"none" ,marginBottom:"0","&::after":{
                                bgcolor:"#333333",position:"absolute",bottom:"0",left:"0",transition:"all 0.3s",width:"0",zIndex:"1",height:"3px",content:'""'
                            },"&:hover::after":{width:"100%"}}}
                             >Marketing & Design</ListItemText>
                        </ListItem>
                        <ListItem sx={{padding:"0"}}>
                            <ListItemText
                            sx={{color:"#33333380","&:hover":{color:"#333"}, textAlign:"left",whiteSpace:"normal",fontWeight:"500",display:"block",fontSize:"16px",lineHeight:"24px",padding:"8px 0",textDecoration:"none" ,marginBottom:"0","&::after":{
                                bgcolor:"#333333",position:"absolute",bottom:"0",left:"0",transition:"all 0.3s",width:"0",zIndex:"1",height:"3px",content:'""'
                            },"&:hover::after":{width:"100%"}}}
                             >Influencers & UGC Creators</ListItemText>
                        </ListItem>
                        <ListItem sx={{padding:"0"}}>
                            <ListItemText
                            sx={{color:"#33333380","&:hover":{color:"#333"}, textAlign:"left",whiteSpace:"normal",fontWeight:"500",display:"block",fontSize:"16px",lineHeight:"24px",padding:"8px 0",textDecoration:"none" ,marginBottom:"0","&::after":{
                                bgcolor:"#333333",position:"absolute",bottom:"0",left:"0",transition:"all 0.3s",width:"0",zIndex:"1",height:"3px",content:'""'
                            },"&:hover::after":{width:"100%"}}}
                             >Spiritual</ListItemText>
                        </ListItem>
                        <ListItem sx={{padding:"0"}}>
                            <ListItemText
                            sx={{color:"#33333380","&:hover":{color:"#333"}, textAlign:"left",whiteSpace:"normal",fontWeight:"500",display:"block",fontSize:"16px",lineHeight:"24px",padding:"8px 0",textDecoration:"none" ,marginBottom:"0","&::after":{
                                bgcolor:"#333333",position:"absolute",bottom:"0",left:"0",transition:"all 0.3s",width:"0",zIndex:"1",height:"3px",content:'""'
                            },"&:hover::after":{width:"100%"}}}
                             >Coaching Services</ListItemText>
                        </ListItem>
                        <ListItem sx={{padding:"0"}}>
                            <ListItemText
                            sx={{color:"#33333380","&:hover":{color:"#333"}, textAlign:"left",whiteSpace:"normal",fontWeight:"500",display:"block",fontSize:"16px",lineHeight:"24px",padding:"8px 0",textDecoration:"none" ,marginBottom:"0","&::after":{
                                bgcolor:"#333333",position:"absolute",bottom:"0",left:"0",transition:"all 0.3s",width:"0",zIndex:"1",height:"3px",content:'""'
                            },"&:hover::after":{width:"100%"}}}
                             >Musicians & DJs</ListItemText>
                        </ListItem>
                        <ListItem sx={{padding:"0"}}>
                            <ListItemText
                            sx={{color:"#33333380","&:hover":{color:"#333"}, textAlign:"left",whiteSpace:"normal",fontWeight:"500",display:"block",fontSize:"16px",lineHeight:"24px",padding:"8px 0",textDecoration:"none" ,marginBottom:"0","&::after":{
                                bgcolor:"#333333",position:"absolute",bottom:"0",left:"0",transition:"all 0.3s",width:"0",zIndex:"1",height:"3px",content:'""'
                            },"&:hover::after":{width:"100%"}}}
                             >Business</ListItemText>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Box>
    )
}

export default CategoriesMenu;