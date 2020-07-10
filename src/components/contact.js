import React, { Component } from 'react';
import './contact.css';
import axios from 'axios';

class contact extends Component {
   
   handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
         axios({
            method: "POST", 
            url:"http://localhost:5000/contact", 
            data: {
                name: name,   
                email: email,  
                messsage: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
     
    
    }   
    render() { 
    
        return (<div className="contact-main">
            <h1 className='contact-text'>Contact Me</h1>
            <p className='contact-text'><strong>Got any business inquiries or general questions?</strong></p>
            <p className='contact-text'>Contact me at my almujeebkhalil@gmail.com or call me at 570-242-9678</p>
        </div>  );
    }
}
 
export default contact;