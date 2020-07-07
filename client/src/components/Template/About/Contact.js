import React, {useState, useContext} from 'react'
import axios from 'axios'
import { GlobalContext } from '../../../context/GlobalState'

import './Contact.css'

function Contact() {
    const { setProgress, setError } = useContext(GlobalContext)
    const [name, setName] = useState({
        value: '',
        error: false
    })
    const [email, setEmail] = useState({
        value: '',
        error: false
    })
    const [message, setMessage] = useState({
        value: 'Hi, I am a talent hunter / recruiter / business owner. I am interested to hire / collaborate / consult with you. So, will you be interested?',
        error: false
    })
    const sendMessage = async (newMessage) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        setProgress(true);
        try {
            const res = await axios.post('/api/v1/messages/', newMessage, config);
            if(res.data.success === true) {
                setName({value: '', error: false})
                setEmail({value: '', error: false})
                setMessage({value: '', error: false})
            }
        } catch (err) {
            setError(err, true);
        } finally {
            setProgress(false);
        }
    }
    const onSubmit = () => {
        const newMessage = {
            name: name.value,
            email: email.value,
            message: message.value
        }
        if(validateInputs()) {
            sendMessage(newMessage)
        }
    }
    const validateInputs = () => {
        const controls = [name, email, message]
        const controlHandlers = [setName, setEmail, setMessage]
        controls.forEach(({value, error}, i) => {
            error = !(value && value.trim() !== '')
            controlHandlers[i]({
                value,
                error
            })
        })
        return !(name.error || email.error || message.error)
    }
    
    return (
        <div className="contact-container container-border">
            <h3><i className="fa fa-send"/> Get in Touch</h3>
            <p className="title">Please fill out the form and I will be in touch with you at the earliest.</p>
            <input className={name.error? 'error' : ''} type="text" value={name.value} onChange={(e) => setName({ 
                value: e.target.value, error: false 
                })} placeholder="Full Name" />
            <input className={email.error? 'error' : ''} type="text" value={email.value} onChange={(e) => setEmail({
                value: e.target.value, error: false
            })} placeholder="Email" />
            <textarea className={message.error? 'error' : ''} value={message.value} onChange={(e) => setMessage({
                value: e.target.value, error: false
            })} placeholder="Message" maxLength="200" rows="7"/>
            <button className="btn-default" onClick={onSubmit}>Send</button>
        </div>
    )
}

export default Contact
