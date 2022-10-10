import React from 'react';
import emailjs from '@emailjs/browser';
import '../css/contact.css'
import { useState } from 'react';
import { AppContext } from '../Contex/appContext';
import { Link } from 'react-router-dom';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

// CommonJS



function Contact() {
    const contex = React.useContext(AppContext)
    const [to_name, setTo_name] = useState('')
    const [from_name, setFrom_name] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState(false)


    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$;/g



    const submitInfo = () => {

     

        const emailContant = {
            to_name: to_name,
            from_name: from_name,
            message: message,
        };

        if (to_name.length ===0||from_name.length ===0||message.length ===0) {
            setError(true)
        } else {


            setTo_name("")
            setFrom_name("")
            setMessage("")
         
            emailjs.send('service_wt5jfu1', 'template_fawdu29', emailContant, '5zjvmkvqI-GrG_5r1')
                .then((result) => {
                    Swal.fire(
                        'e-mail sent successfully!',
                        'Thank You🤗',
                        'success'
                    )
                }, (error) => {
                    Swal.fire({
                        icon: 'question',
                        title: 'The Internet?',
                        text: 'Please Check your Conection'
                    })
                });
        }
    }
    const handleSubmit = (event) => {


       
    }
    return (
        <div>
            <div class="container animate__animated animate__fadeInDown" onSubmit=  {handleSubmit}>
                <div id="contact">
                    <h3>{contex.lang === "en" ? "CONTACT ME" : "HUBUNGI SAYA"}</h3>
                    <h4>{contex.lang === "en" ? "contact me if you want to give advice or communicate" : "hubungi saya jika Anda ingin memberikan saran atau berkomunikasi"}</h4>

                    <input placeholder={contex.lang === "en" ? "Your Name" : "Nama Anda"} type="text" tabindex="1"
value={to_name}
                        onChange={(event) => { setTo_name(event.target.value) }}
                        required autofocus />
                    {error && to_name.length <= 0 ?
                        <label className='text-danger'>{contex.lang === "en" ? "Empty Name" : "Nama Kosong"} </label> : ''}

                    <input placeholder={contex.lang === "en" ? "Your Email Address/No HP" : "Alamat Email Anda/No HP"} type="email" tabindex="2"
value={from_name}
                        onChange={(event) => { setFrom_name(event.target.value) }}
                        required />
                    {error && from_name.length <= 0 ?
                        <label className='text-danger'>{contex.lang === "en" ? "Empty Contact" : "Kontak Kosong"} </label> : ''}

                    <textarea placeholder={contex.lang === "en" ? "Type your message here...." : "Tulis Pesan Mu Disini..."} tabindex="3"
value={message}
                        onChange={(event) => { setMessage(event.target.value) }}
                        required ></textarea>
                    {error && message.length <= 0 ?
                        <label className='text-danger'>{contex.lang === "en" ? "Empty Message" : "Pesan Kosong"} </label> : ''}

                    <button name="submit" type="submit"
                        onClick={submitInfo}
                        value=''

                    >
                        {contex.lang === "en" ? "Send" : "Kirim"}
                    </button>


                </div>
                <div className='botbar'>
                    <Link to='/about'>
                        <i class="fa-solid fa-arrow-left"></i>
                    </Link>

                    <Link to='/'>
                        <i class="fa-solid fa-house"></i>
                    </Link>


                </div>
            </div>
        </div>
    );
}

export default Contact;