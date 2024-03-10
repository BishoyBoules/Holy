import React from 'react'
import Button from '../../layout/Button'
import person from '../../assets/images/person.png'

const WhoWeR = () => {
    const items = [
        {
            header:"OUR VISION",
            paragraph: "Be the first and best pest control company in Egypt to provide sustainable pest control services with a specific care on the customer interest and the community safety as well."
        },
        {
            header:"OUR MISSION",
            paragraph: "Deliver high quality pest control services within an integrated pest control management system in the safest way."
        }
    ]
  return (
    <div className="flex flex-row relative justify-center xl:justify-between">
        <div className="who bg-cover opacity-7 w-full h-auto absolute top-0 right-0 bottom-0 left-0"></div>
        <section className='flex flex-col p-4 py-16 justify-center items-center xl:items-start m-4 ml-20 mt-10 opacity-100 z-10'>
            <h2 className='mb-10 text-[#144463] text-2xl font-bold w-52 p-2 rounded-3xl hover:bg-[#144463] duration-500'>WHO WE ARE</h2>
            <h1 className='font-extrabold mb-10 text-[40px] text-[#6D8691]'>WE’RE SERIOUS ABOUT OUR BUSINESS</h1>
            <div className="flex flex-col justify-between mb-8">
            {
                items.map(({header, paragraph}) => (
                    <div key={header} className="flex flex-row justify-center items-center mb-5">
                        <section className='mr-3'>
                            <div className="bg-[#144463] w-10 h-10 rounded-full"></div>
                        </section>
                        <section>
                            <h2 className='text-[#144463] text-2xl font-bold '>{header}</h2>
                            <p className='text-[#6D8691]'>{paragraph}</p>
                        </section>
                    </div>
                        ))
            }
            </div>
            <Button name={"Discover More"} className={"w-40 bg-[#6D8691] text-white text-xl font-semibold p-1 rounded-md hover:text-[#144463] duration-500"}/>
        </section>
        <section className='pb-0 mr-24 bottom-0 z-10 xl:block hidden'>
            <img className='-mb-10 relative' src={person} alt='img'/>
        </section>
    </div>
  )
}

export default WhoWeR