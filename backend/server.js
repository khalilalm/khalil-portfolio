const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
dotenv.config({path:'../config.env'})
app.use(morgan('common'));
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());


app.post('/contact', (req, res) => {
    const smtpTrans = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'almujeebkhalil@gmail.com',
            pass: 'kal653994'
        }
    })

    const mailOpts = {
        from: 'Sender info',
        to: 'almujeebkhalil@gmail.com',
        subject: 'New message from contact form at ...',
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    }

    smtpTrans.sendMail(mailOpts, (error, response) => {
        if(error) {
            res.render('contact-failure')
        }else {
            res.render('contact-success')
        }
    })
})



const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});