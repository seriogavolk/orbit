import React from 'react';

const ContactForm = () => {

    return (
        <div className='contactwrap'>
        <div className='formframe'>
            <div id='inquiry' >
                <h2>Request a Free Quote</h2>
                <label htmlFor='firstname'>First Name</label>
                <input type='text' name='firstname' id='first-name' value='name' placeholder='Enter your first name'/>
                {}
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
                <button className='btn1 eff' form='inquiry' type='submit' >Submit</button>

            </div>
            </div>
        </div>
    )
};

export default ContactForm;