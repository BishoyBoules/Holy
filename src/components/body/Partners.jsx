import React from 'react'
import partnerImg from '../../assets/images/partner.png'

const Partners = () => {
    const partnersArr = [
        {
            id: 0,
            img: partnerImg
        },
        {
            id: 1,
            img: partnerImg
        },
        {
            id: 2,
            img: partnerImg
        },
        {
            id: 3,
            img: partnerImg
        },
        {
            id: 4,
            img: partnerImg
        },
        {
            id: 5,
            img: partnerImg
        },
        {
            id: 6,
            img: partnerImg
        },
        {
            id: 7,
            img: partnerImg
        },
        {
            id: 8,
            img: partnerImg
        },
        {
            id: 9,
            img: partnerImg
        },
        {
            id: 10,
            img: partnerImg
        },
        {
            id: 11,
            img: partnerImg
        },
    ]
  return (
    <div className="partners bg-cover w-full h-auto right-0 left-0 flex flex-col justify-between items-center">
        <section className='flex flex-col text-[#EFF7F8] justify-between text-center mb-40 mt-40 z-10'>
            <h1 className='text-3xl z-10'>A VARIETY OF PARTNERS IN DIFFERENT FIELDS</h1>
            <p className='text-xl'>Food manufacturing, pharmaceutical industries, packaging and storage.</p>
        </section>
        <section className='z-10 grid grid-cols-6 gap-10 justify-evenly mb-40'>
            {
                partnersArr.map(({id, img}) => (
                    <img className='w-[136px] h-[136px] rounded-full' key={id} src={img} alt='partner'/>
                ))
            }
        </section>
    </div>
  )
}

export default Partners