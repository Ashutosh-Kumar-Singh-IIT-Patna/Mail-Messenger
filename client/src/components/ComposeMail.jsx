import { Dialog,Box,Typography,styled, InputBase ,TextField,Button} from "@mui/material";
import { Close , DeleteOutline} from "@mui/icons-material";
import { useState } from "react";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.url";

const dialogStyle={
    height:'90%',
    width:'80%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    borderRadius:'10px 10px 0 0'
}

const Header=styled(Box)({
    display:"flex",
    justifyContent:"space-between",
    padding:"10px 15px",
    background:"#f2f6fc",
    '& > p':{
        fontSize:14,
        fontWeight:500
    }
})

const RecipientsWrapper=styled(Box)({
    display:"flex",
    flexDirection:"column",
    padding:"0 15px",
    '& > div':{
        fontSize:14,
        borderBottom:'1px solid #F5F5F5',
        marginTop:10
    }
})

const Footer=styled(Box)({
    display:"flex",
    justifyContent:'space-between',
    padding:'10px 15px',
    // alignItems:'center'
})

const SendButton=styled(Button)({
    background:'#0B57D0',
    color:'#fff',
    fontWeight:500,
    textTransform:'none',
    borderRadius:18,
    width:100
})

const ComposeMail=({openDialog,setOpenDialog})=>{

    const [data,setData]=useState({});
    const sentEmailService=useApi(API_URLS.saveSentEmail);
    const saveDraftService=useApi(API_URLS.saveDraftEmails);

    const closeComposeMail=(e)=>{
        e.preventDefault();

        const payload={
            to:data.to,
            from:'ashutosh.k.singh.03@gmail.com',
            subject:data.subject,
            body:data.body,
            date:new Date(),
            image:'',
            name:'Ashutosh',
            starred:false,
            bin:false,
            type:'drafts'
        }

        saveDraftService.call(payload);

        if(!saveDraftService.error){
            setOpenDialog(false);
            setData({});
        }else{
            
        }
    }

    const config={
        Host : "smtp.elasticemail.com",
        Username : "ashu_gmail_clone@yopmail.com",
        Password : "72456F142A4AEF5420B47FFA078D1583381F",
        Port: 2525,
    }

    const sendMail=(e)=>{

        e.preventDefault();

        if(window.Email){
            window.Email.send({
                ...config,
                To : data.to,
                From : 'ashutosh.k.singh.03@gmail.com',
                Subject : data.subject,
                Body : data.body
            }).then(
                message => alert(message)
            );
        }

        const payload={
            to:data.to,
            from:'ashutosh.k.singh.03@gmail.com',
            subject:data.subject,
            body:data.body,
            date:new Date(),
            image:'',
            name:'Ashutosh',
            starred:false,
            bin:false,
            type:'sent'
        }

        sentEmailService.call(payload);

        if(!sentEmailService.error){
            setOpenDialog(false);
            setData({});
        }else{

        }

        setOpenDialog(false);
    }

    const onValueChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    }

    return(
        <Dialog
            open={openDialog}
            PaperProps={{
                sx:dialogStyle
            }}
        >
            <Header>
                <Typography>New Message</Typography>
                <Close fontSize="small" onClick={(e)=>closeComposeMail(e)}/>
            </Header>
            <RecipientsWrapper>
                <InputBase placeholder="Recipients" name="to" onChange={(e)=>onValueChange(e)}/>
                <InputBase placeholder="Subject" name="subject" onChange={(e)=>onValueChange(e)}/>
            </RecipientsWrapper>
            <TextField 
                multiline
                rows={20}
                sx={{
                    '& .MuiOutlinedInput-notchedOutline':{
                        border:'none'
                    }
                }}
                name="body"
                onChange={(e)=>onValueChange(e)}
            />
            <Footer>
                <SendButton onClick={(e)=>sendMail(e)}>Send</SendButton>
                <DeleteOutline onClick={()=>setOpenDialog(false)}/>
            </Footer>
        </Dialog>
    )
}
export default ComposeMail;