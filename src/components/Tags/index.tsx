import { Box, Button, Typography } from "@mui/material";
import Image from 'next/image'
import imgGrapPay from "../../assets/imgs/image 9.png"
import imgCrypto1 from "../../assets/imgs/image 11.png"
import imgCrypto2 from "../../assets/imgs/image 12.png"

const Tags = () => {
    return (
        <Box sx={{padding:"124px"}}>
            <Box sx={{background: "#093E50",height:"241px"}}>
                <Typography variant="h2" sx={{fontSize:"32px",textAlign:"center",fontWeight:"600",lineHeight:"44px",color: "#FFFFFF",paddingTop:"44px"}}>
                    Faster ways to pay for global talent
                </Typography>
                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"52px",padding:"0 24px"}}>
                    <Button variant="outlined" sx={{position:"relative",textTransform:"none",bgcolor:"#fff","&:hover":{bgcolor:"gray",color:"white"},color:"#656769",fontWeight:"500",fontSize:"24px",lineHeight:"32px",boxShadow:"3",borderRadius:"124px",margin:"0 22px"}}>
                        <Image src={imgCrypto1} width={32} height={32} className="" alt="" />
                        <Image src={imgCrypto2} width={32} height={32} className="absolute" alt="" />
                        Crypto</Button>
                    <Button variant="outlined" sx={{textTransform:"none",bgcolor:"#fff","&:hover":{bgcolor:"gray",color:"white"},color:"#656769",fontWeight:"500",fontSize:"24px",lineHeight:"32px",boxShadow:"3",borderRadius:"124px",margin:"0 22px"}}>Secure Payment</Button>
                    <Button variant="outlined" sx={{textTransform:"none",bgcolor:"#fff","&:hover":{bgcolor:"gray",color:"white"},color:"#656769",fontWeight:"500",fontSize:"24px",lineHeight:"32px",boxShadow:"3",borderRadius:"124px",margin:"0 22px"}}>Pay</Button>
                    <Button variant="outlined" sx={{textTransform:"none",bgcolor:"#fff","&:hover":{bgcolor:"gray",color:"white"},color:"#656769",fontWeight:"500",fontSize:"24px",lineHeight:"32px",boxShadow:"3",borderRadius:"124px",margin:"0 22px"}}>
                            <Image src={imgGrapPay} alt=""/>
                    </Button>
                    <Button variant="outlined" sx={{textTransform:"none",bgcolor:"#fff","&:hover":{bgcolor:"gray",color:"white"},color:"#656769",fontWeight:"500",fontSize:"24px",lineHeight:"32px",boxShadow:"3",borderRadius:"124px",margin:"0 22px"}}>PayPal</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Tags;