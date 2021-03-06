import React from 'react';

const LastSection = () => (
    <div className='last-section'>
        <div className='last-section__title'>Sign up here to receive the latest news and updates of our
            projects!
        </div>
        <div className="container">
            <form className='submit-form' action="">
                <input placeholder='example@gmail.com' className='input' type="text"/>
               <div className='button--border'>
                   <button className='button' type="submit">Submit</button>
               </div>
            </form>
        </div>
    </div>

);

export default LastSection;
