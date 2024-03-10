import React from 'react'
import Button from '../../layout/Button'
import offerImg from '../../assets/images/offer.jpeg'

const Offer = ({name, description}) => {
  return (
    <div className="flex flex-row justify-evenly items-center w-[550px] bg-[#809BAC] p-2 rounded-xl">
        <section className='p-0 mr-2'>
            <img className='w-64 h-auto rounded-l-xl' src={offerImg} alt='offer'/>
        </section>
        <section className='w-1/2'>
            <h1 className='font-bold text-xl text-[#144463] uppercase my-1'>{name}</h1>
            <p className='w-60'>{description}</p>
            <Button name={"Learn More"} className={"w-40 bg-[#144463] text-white text-xl font-semibold p-1 rounded-md hover:text-[#809BAC] duration-500 my-2"}/>
        </section>
    </div>
  )
}

export default Offer