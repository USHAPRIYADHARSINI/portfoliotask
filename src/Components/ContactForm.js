import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const swal = require('sweetalert2')

export const ContactForm = () => {
  const form = useRef();
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if(!form.current.user_email.value || !form.current.user_name.value || !form.current.message.value){return setError(true)}
    else{ 
      setError(false)
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text)
            swal.fire({
              title: "Thank you for contacting!",
              icon: "success",
              toast: true,
              timer: 6000,
              position: 'top-right',
              timerProgressBar: true,
              showConfirmButton: false,
          })
          },
          (error) => {
            console.log(error.text)
            swal.fire({
              title: error.text,
              icon: "success",
              toast: true,
              timer: 6000,
              position: 'top-right',
              timerProgressBar: true,
              showConfirmButton: false,
          })
          }
        );
    }
    e.target.reset();
  };

  return (
    <>
    <h3>Contact me</h3>
    <form ref={form} onSubmit={sendEmail} className="form">
      {error? <p style={{color:"red"}}>Kindly fill all the columns</p>:null}
      
      <input type="text" name="user_name" placeholder="Name*" />

      <input type="email" name="user_email" placeholder="Email*" />

      <textarea name="message" placeholder="Message*" />

      <input type="submit" value="Send" className="button" />
    </form>
    </>
  );
};
