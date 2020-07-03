import React, {useState, Component} from 'react';
import {useForm} from 'react-hook-form';

const ContactForm = () => {

    // const [name, setName] = useState('');
    // const [lastname, setLastName] = useState('');
    // const [number, setNumber] = useState('');
    // const [message, setMessage] = useState('');
    // const [clicked, setOnClick] = useState('');
    // const sendForm = [{name, lastname,number, message}]
    // const form = sendForm.map(form => form);

const {register, handleSubmit} = useForm();
const [inputs, setInputs] = useState([])
const onSubmit = (data) => {
    const inputs = (JSON.stringify(data));
    console.log(inputs);

   
}
    // const params = data.map((form) => 
    //     console.log(params);
   

    return (
        <div className='contactwrap'>
        <div className='formframe'>
        
            <form onSubmit={handleSubmit(onSubmit)} id='inquiry' >
                <h2>Request a Free Quote</h2> 
                {/* {data.map(param => (<p>{`We would love to hear from you ${param.firstname}`}</p>))} */}
                 

                <div className='form1'>
                <input type='text' 
                name='firstname' 
                id='first-name' 
                ref={register}
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
                ref={register}
                
                />
                <label id='last-name' htmlFor='last-name' className='label-name'>
                    <span className='content-name'>Last Name</span>
                </label>
                </div>
                <div className='form1'>
                <input type='text' 
                name='phone'
                id='phone'  
                ref={register}
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
                ref={register}
                />
                <label id='message' htmlFor='message' className='label-name'>
                    <span className='content-name'>Message</span>
                </label>
                </div>
                
                <button 
                className='btn1 eff' 
                form='inquiry' 
                type='submit' 
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

            </form>
            </div>
        </div>
    );
};

export default ContactForm;