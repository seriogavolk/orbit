import React from 'react';

const AnimatedForm = () => {

    return (
                <div className='form1'>
                <input type='text' 
                name='firstname' 
                id='first-name' 
                autoComplete='off' 
                required
                />
                <label htmlFor='firstname' className='label-name'>
                    <span className='content-name'>Name</span>
                </label>
                </div>
    )
};

export default AnimatedForm;