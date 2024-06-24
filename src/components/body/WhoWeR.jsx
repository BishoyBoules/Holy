import person from '../../assets/images/holy-off.jpg'

const WhoWeR = () => {

  return (
    <div id='about' className="flex lg:flex-row flex-col py-4 relative justify-center">
        <div className="who bg-cover opacity-7 w-full h-auto absolute top-0 right-0 bottom-0 left-0"></div>
        <section className='flex flex-col p-4 py-16 justify-center items-center xl:items-start m-4 lg:ml-20 mt-10 opacity-100 z-10 lg:w-4/5'>
            <h2 className='mb-10 text-[#144463] lg:text-start text-center p-2 text-2xl w-52 font-[1000]'>ABOUT US</h2>
            <h1 className='font-extrabold mb-10 text-[40px] text-center lg:text-start px-2 text-[#6D8691]'>WE’RE SERIOUS ABOUT OUR BUSINESS</h1>
            <div className="flex flex-col justify-between lg:mb-8 p-2 rounded-2xl font-bold text-center lg:text-start">
            Holy Pest control isn’t just a service.<br/>
            We know that finding the right pest control firm is important 
            therefore, our professionals are well-versed in the latest tools and techniques and work closely with you to find “greener” solutions to your pest problems.<br/>
            We take care of your home and work and give you a safe place.<br/>
            We always keep our quality to a high standard to Improve the way people enjoy home 
            no matter where home is.
            </div>
        </section>
        <section className='pb-0 lg:mr-24 z-10 lg:my-10 lg:p-4 px-4'>
            <img className='relative shadow-[0_35px_60px_-15px_rgba(0,0,0,1)]' src={person} alt='img'/>
        </section>
    </div>
  )
}

export default WhoWeR