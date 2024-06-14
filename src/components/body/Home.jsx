import {useState, useRef} from 'react'
import Button from '../../layout/Button'
import emailjs from '@emailjs/browser';

const Home = () => {
    const [email, setEmail] = useState({name:'', phone:'', address:'', request:''})
    const form = useRef()

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
    <div className="md:p-4 sm:p-1 flex lg:flex-row sm:flex-col relative justify-between items-center w-full">
        <div className="home bg-cover w-full h-auto absolute top-0 right-0 bottom-0 left-0"></div>
        <section className='flex flex-col md:p-4 sm:p-1 md:py-16 sm:py-4 justify-center lg:items-start items-center lg:text-start text-center lg:ml-20 sm:ml-0 mt-10 opacity-100 z-10'>
            <h4 className='bg-[#6CC384] mb-10 text-[#EFF7F8] font-medium w-36 p-2 rounded-3xl hover:bg-[#144463] duration-500'>Welcome to Holy</h4>
            <h1 className='font-extrabold mb-10 text-[40px] text-white w-10/12'>Your Best Pest Control Solution is Finally Here</h1>
            <p className='lg:w-[600px] md:w-[400px] sm:w-[300px] lg:text-[20px] md:text-[30px] mb-10 text-white font-medium'>
            Everyone wants a happy home.
            <br/>
            Holy Pest Control provides you a Quick, Safe and Effective pest control services to protect you, your family and your business from pest infestations and their associated risks.
            </p>
        </section>
        <section className='lg:flex flex-col sm:hidden mt-10 mr-24 opacity-100 z-10 bg-[#EFF7F8] rounded-lg'>
            <form ref={form} className='flex flex-col justify-between items-start p-10' onSubmit={submitHandler}>
                <h1 className='text-[#144463] text-xl font-semibold mb-2'>Get a Free Estimation</h1>
                <section className='my-2 w-full'>
                    <input className='w-full px-2 py-1 rounded-md' value={email.name} name='name' onChange={handleChange} placeholder='Your Name'/>
                </section>
                <section className='my-2 flex flex-row'>
                    <input className='w-36 px-2 py-1 mr-2 rounded-md' value={email.phone} name='phone' onChange={handleChange} type='number' placeholder='Your Phone'/>
                    <input className='w-36 px-2 py-1 rounded-md' value={email.address} name='address' onChange={handleChange} type='text' placeholder='Your Address'/>
                </section>
                <section className='my-2 w-full'>
                    <textarea className='px-2 py-1 rounded-md w-full h-24' value={email.request} name='request' onChange={handleChange} placeholder='Your Request'/>
                </section>
                <Button name={"Request a QUOTE"} className={"w-full bg-[#144463] text-white text-xl font-semibold p-1 rounded-md hover:text-[#809BAC] duration-500"}/>
            </form>
        </section>
    </div>
  )
}

export default Home