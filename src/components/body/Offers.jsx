import Offer from './Offer'

const Offers = () => {
    const offersArr = [
        {
            name: 'Ants',
        },
        {
            name: 'Bed Bugs',
        },
        {
            name: 'Beetles',
        },
        {
            name: 'Carpenter Ants',
        },
        {
            name: 'Cockroaches',
        },
        {
            name: 'Fleas',
        },
        {
            name: 'Mosquitoes',
        },
        {
            name: 'Rats',
        },
        {
            name: 'Silver Fish',
        },
        {
            name: 'Spiders'
        },
        {
            name: 'Stinging Bites'
        },
        {
            name: 'Termite'
        },
        {
            name: 'Ixodidae'
        },
    ]
  return (
    <div id='services' className="bg-[#EFF7F8] p-4 flex flex-col justify-between items-center">
        <section className='mb-10 mt-4 text-center'>
            <h1 className='uppercase font-extrabold mb-2 text-5xl text-[#144463]'>Our Services</h1>
            <p className='mx-auto'>
                Here are some types of pests that HOLY can control
            </p>
        </section>
        <section className='grid lg:grid-cols-4 md:grid-cols-2 gap-4 justify-center mb-4'>
            {
                offersArr.map(({name}) => (
                    <Offer key={name} name={name}/>
                ))
            }
        </section>
    </div>
  )
}

export default Offers