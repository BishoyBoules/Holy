import React from 'react'
import Offer from './Offer'

const Offers = () => {
    const offersArr = [
        {
            name: 'B2B',
            description: "Our industry standard insect pest control service is guaranteed to get rid of your insect problems"
        },
        {
            name: 'COMMERCIAL',
            description: "Our industry standard insect pest control service is guaranteed to get rid of your insect problems"
        },
        {
            name: 'DECONTAMINATION',
            description: "Our industry standard insect pest control service is guaranteed to get rid of your insect problems"
        },
        {
            name: 'DEVICES',
            description: "Our industry standard insect pest control service is guaranteed to get rid of your insect problems"
        },
        {
            name: 'IPM AUDITS AND TRAINING',
            description: "Our industry standard insect pest control service is guaranteed to get rid of your insect problems"
        },
        {
            name: 'services',
            description: "Our industry standard insect pest control service is guaranteed to get rid of your insect problems"
        },
    ]
  return (
    <div className="bg-[#EFF7F8] p-4 flex flex-col justify-between items-center">
        <section className='mb-10 mt-4 text-center'>
            <h1 className='uppercase font-extrabold mb-2 text-5xl text-[#144463]'>WHAT WE OFFER</h1>
            <p className='w-1/2 mx-auto'>
            The identification of insects and other pests by phone or email it is very hard. Need to know what kind of bug or rodents are in your house? Here are some tips to keep in mind when trying to identify a pest.
            </p>
        </section>
        <section className='grid grid-cols-2 gap-4 justify-evenly mb-4'>
            {
                offersArr.map(({name, description}) => (
                    <Offer key={name} name={name} description={description}/>
                ))
            }
        </section>
    </div>
  )
}

export default Offers