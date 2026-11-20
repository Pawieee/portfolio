import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

// EmailJS settings are read at build time from .env.local (see .env.example).
// The public key is meant to be shipped to the browser; it is not a secret.
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

type Status = 'idle' | 'sending' | 'sent' | 'error' | 'not-configured';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [status, setStatus] = useState<Status>('idle');

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    const hasName = name.trim() !== '';
    const hasEmail = email.trim() !== '';
    const hasMessage = message.trim() !== '';

    setNameError(!hasName);
    setEmailError(!hasEmail);
    setMessageError(!hasMessage);

    if (!hasName || !hasEmail || !hasMessage) {
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('not-configured');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { name: name.trim(), email: email.trim(), message: message.trim() },
        { publicKey: PUBLIC_KEY },
      );
      setStatus('sent');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('EmailJS send failed', error);
      setStatus('error');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
            onSubmit={sendEmail}
          >
            <div className='form-flex'>
              <TextField
                required
                id="contact-name"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="contact-email"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>
            <TextField
              required
              id="contact-message"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            {status === 'sent' && (
              <Alert severity="success" className="contact-status">Thanks! Your message was sent. I'll get back to you soon.</Alert>
            )}
            {status === 'error' && (
              <Alert severity="error" className="contact-status">Sorry, the message could not be sent. Please try again, or reach me on LinkedIn.</Alert>
            )}
            {status === 'not-configured' && (
              <Alert severity="info" className="contact-status">The contact form is not set up yet. Please reach me on LinkedIn for now.</Alert>
            )}
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send'}
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
