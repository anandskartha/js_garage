import React, {useState, useEffect} from 'react'
import './Contact.css'

function Contact() {
    //const { sendMessage } = useContext (TransactionContext)
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
    useEffect(() => {
        console.log('In Useeffect')
    })
    const onSubmit = () => {
        // const newContact = {
        //     name,
        //     email,
        //     message
        // }
        //sendMessage(newContact)
        if(validateInputs()) {

            return;
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
            <h3>Get in Touch</h3>
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
            <button className="btn" onClick={onSubmit}>Send</button>
        </div>
    )
}

export default Contact
