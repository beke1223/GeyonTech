import '../customcss/ourtrainer.css'
import TrainerImage from './TrainerImage'
const Ourtrainer = () => { 
    return (
        <div className='flex flex-col m-[1%] shadow-lg p-[5%] '>
           <div className="flex justify-center mb-10">
                <h1 className=" text-5xl">
                    <span className="mr-5">Our</span>
                    <span className=" bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200 text-transparent bg-clip-text">Trainers</span>
                </h1>
           </div>
           <div className="ellipse">
                <div className="circle"></div>
                <div className='h-28 w-28 bg-[#55c4ea] rounded-full' data-aos="flip-left"  data-aos-delay="2000" data-aos-easing="ease-out-cubic" data-aos-duration="2000"></div>
           </div> 
           <div className="relative bottom-[360px] left-24">
                <TrainerImage/>
            </div> 
            <div className="relative bottom-[320px] left-24">
                <TrainerImage/>
            </div> 
            <div className="relative bottom-[720px] left-[900px]">
                <TrainerImage/>
            </div> 
            <div className="relative bottom-[660px] left-[920px]">
                <TrainerImage/>
            </div>    
        </div>
    )
}

export default Ourtrainer