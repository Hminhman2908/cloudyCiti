import { Box, Button, Typography } from "@mui/material";

const Tags = () => {
    return (
        <Box sx={{padding:"0 124px"}}>
            <Box sx={{background: "#093E50",height:"241px"}}>
                <Typography variant="h2" sx={{fontSize:"32px",textAlign:"center",fontWeight:"600",lineHeight:"44px",color: "#FFFFFF",paddingTop:"44px"}}>
                    Faster ways to pay for global talent
                </Typography>
                <Box>
                    <Button variant="outlined" sx={{bgcolor:"#fff",color:"#656769",fontWeight:"500",fontSize:"24px",lineHeight:"32px"}}>Crypto</Button>
                    <Button variant="outlined">Secure Payment</Button>
                    <Button variant="outlined">Pay</Button>
                    <Button variant="outlined">GrabPay</Button>
                    <Button variant="outlined">PayPal</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Tags;