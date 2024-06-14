import {useState, useRef} from 'react'
import Button from "./Button"
import emailjs from '@emailjs/browser';

const Modal = ({closeModal}) => {
    const [email, setEmail] = useState({name:'', phone:'', address:'', request:''})
    const form = useRef()
    const modalRef = useRef()

    const onClose = (e) => {
        if(modalRef.current == e.target){
            closeModal()
        }
    }

    const handleChange = (e) => {
        setEmail({...email, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e.target);
        alert("Sent")
        emailjs.sendForm('service_507muuj', 'template_5sldpvf', e.target, 'SGVwSvfKuhd2mX0xR')
        .then(() => {
            window.location.reload();
        }, (error) => {
            console.log(error.text);
        });
    }

  return (
    <section ref={modalRef} onClick={onClose} className='fixed flex justify-center items-center inset-0 bg-[rgb(20,68,99)] bg-opacity-30 backdrop-blur-sm z-50'>
            <form ref={form} className='flex flex-col justify-between items-start p-10 lg:w-1/3 md:w-1/2 sm:w-4/5 bg-[#EFF7F8] rounded-2xl z-[100]' onSubmit={submitHandler}>
                <h1 className='text-[#144463] text-xl font-extrabold mb-2'>Get a Free Estimation</h1>
                <section className='my-2 w-full'>
                    <input className='w-full px-2 py-1 rounded-md' value={email.name} name='name' onChange={handleChange} placeholder='Your Name'/>
                </section>
                <section className='my-2 flex flex-row w-full'>
                    <input className='px-2 py-1 mr-2 w-1/2 rounded-md' value={email.phone} name='phone' onChange={handleChange} type='number' placeholder='Your Phone'/>
                    <input className='px-2 py-1 w-1/2 rounded-md' value={email.address} name='address' onChange={handleChange} type='text' placeholder='Your Address'/>
                </section>
                <section className='my-2 w-full'>
                    <textarea className='px-2 py-1 rounded-md w-full h-24' value={email.request} name='request' onChange={handleChange} placeholder='Your Request'/>
                </section>
                <Button name={"Request a QUOTE"} className={"w-full bg-[#144463] text-white text-xl font-semibold p-1 rounded-md hover:text-[#809BAC] duration-500"}/>
            </form>
        </section>
  )
}

export default Modal