require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { to, subject, text } = req.body;

    const msg = {
        to,
        from: 'lenscapecompany@gmail.com',
        subject,
        text,
    };

    sgMail.send(msg)
        .then(response => res.status(200).json({message: 'Email sent successfully'})) // Изменено на .json
        .catch(error => {
            console.error(error);
            res.status(500).json({error: 'Failed to send email'});
        });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
