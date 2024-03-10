import React from 'react'
import Button from '../../layout/Button'

const Home = () => {
  return (
    <div className="p-4 flex flex-row relative justify-between items-center">
        <div className="home bg-cover opacity-7 w-full h-auto absolute top-0 right-0 bottom-0 left-0"></div>
        <section className='flex flex-col p-4 py-16 justify-center items-start ml-20 mt-10 opacity-100 z-10'>
            <h4 className='bg-[#6CC384] mb-10 text-[#EFF7F8] font-medium w-36 p-2 rounded-3xl hover:bg-[#144463] duration-500'>Welcome to Holy</h4>
            <h1 className='font-extrabold mb-10 text-[40px] text-white w-80'>Your Best Pest Control Solution is Finally Here</h1>
            <p className='w-[600px] text-[20px] mb-10 text-white font-medium'>
            Everyone wants a happy home.
            <br/>
            Holy Pest Control provides you a Quick, Safe and Effective pest control services to protect you, your family and your business from pest infestations and their associated risks.
            </p>
            <Button name={"Discover More"} className={"w-40 bg-[#144463] text-white text-xl font-semibold p-1 rounded-md hover:text-[#809BAC] duration-500"}/>
        </section>
        <section className='flex flex-col mt-10 mr-24 opacity-100 z-10 bg-[#EFF7F8] rounded-lg'>
            <form className='flex flex-col justify-between items-start p-10'>
                <h1 className='text-[#144463] text-xl font-semibold mb-2'>Get a Free Estimation</h1>
                <section className='my-2 w-full'>
                    <input className='w-full px-2 py-1 rounded-md' placeholder='Your Name'/>
                </section>
                <section className='my-2 flex flex-row'>
                    <input className='w-36 px-2 py-1 mr-2 rounded-md' type='email' placeholder='Your Email'/>
                    <input className='w-36 px-2 py-1 rounded-md' type='number' placeholder='Your Phone'/>
                </section>
                <section className='my-2 w-full'>
                    <textarea className='px-2 py-1 rounded-md w-full h-24' placeholder='Your Address'/>
                </section>
                <Button name={"Request a QUOTE"} className={"w-full bg-[#144463] text-white text-xl font-semibold p-1 rounded-md hover:text-[#809BAC] duration-500"}/>
            </form>
        </section>
    </div>
  )
}

export default Home