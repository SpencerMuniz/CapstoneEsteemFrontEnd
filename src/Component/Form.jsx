import React, {useState} from 'react';
import FormSignUp from './FormSignUp';
import FormSuccess from './FormSuccess';
import esteemLogo from './images/esteemLogo.jpg'

const Form = () =>{
    const [isSubmitted, setIsSubmitted] = useState(false);
    function submitForm(){
        setIsSubmitted(true);
    }
    return(
       <div className='form-container'>
           <div className='form-content-left'>
               <img className='form-img' src={esteemLogo} alt='esteem-logo'/>
           </div>
           {!isSubmitted ? (
               <FormSignUp submitForm={submitForm} />
           ) : (
               <FormSuccess />
           )}
       </div>

    )
}
export default Form;
