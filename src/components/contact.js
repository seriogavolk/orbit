import React, {useState} from 'react';

const ContactForm = () => {

    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const [clicked, setOnClick] = useState('');
    const sendForm = [{name, lastname,number, message}]
    const form = sendForm.map(form => form);
    return (
        <div className='contactwrap'>
        <div className='formframe'>
        
            <div id='inquiry' >
                <h2>Request a Free Quote</h2> 
                <p>{`We would love to hear from you ${name} ${lastname}`}</p>
                <p>{`Your email is ${form}`}</p>

                <div className='form1'>
                <input type='text' 
                name='firstname' 
                id='first-name' 
                value={name}
                onChange={event => setName(event.target.value)}
                autoComplete='off' 
                required
                />
                <label htmlFor='firstname' className='label-name'>
                    <span className='content-name'>Name</span>
                </label>
                
                </div>
                <div className='form1'>
                <input type='text' 
                name='last-name' 
                id='last-name' 
                autoComplete='off' 
                required
                value={lastname}
                onChange={event => setLastName(event.target.value)}
                
                />
                <label id='last-name' htmlFor='last-name' className='label-name'>
                    <span className='content-name'>Last Name</span>
                </label>
                </div>
                <div className='form1'>
                <input type='tel' 
                name='phone' 
                id='phone' 
                autoComplete='off' 
                required
                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                value={number}
                onChange={event => setNumber(event.target.value)}
                />
                <label id='phone' htmlFor='phone' className='label-name'>
                    <span className='content-name'>Phone Number</span>
                </label>
                </div>
                <div className='form1'>
                <input type='text' 
                name='message' 
                id='message' 
                autoComplete='off' 
                required
                value={message}
                onChange={event => setMessage(event.target.value)}
                />
                <label id='message' htmlFor='message' className='label-name'>
                    <span className='content-name'>Message</span>
                </label>
                </div>
                
                <button 
                className='btn1 eff' 
                form='inquiry' 
                type='submit' 
                onClick={(event) => setOnClick(clicked)}
                >Submit</button>
                
                
                {/* {}
                <label htmlFor='lastname'>First Name</label>
                <input type='text' name='firstname' id='first-name' value='name' placeholder='Enter your last name'/>
                {}
                <label htmlFor='phone'>Your Phone #</label>
                <input type='tel' name='phone' id='phone' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'/>
                {}
                <label htmlFor='type'>Inquiry Type</label>
                <select name='type' id='type'>
                    <option value='service'>Service Request</option>
                    <option value='request'>Free Quote Request</option>
                </select>
                <label htmlFor='message'>Message:</label>
                <input type='text' name='message' id='first-message' value='message' placeholder={`What's on your mind?`}/>
                {}
                <button className='btn1 eff' form='inquiry' type='submit' >Submit</button> */}

            </div>
            </div>
        </div>
    )
};

export default ContactForm;