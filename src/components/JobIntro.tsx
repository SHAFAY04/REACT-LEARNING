import { FaMapMarked } from 'react-icons/fa'

interface Job{
  id:string|undefined;
  type: string;
  title: string;
  description: string;
  salary: string;
  location: string;
  company:{
    name:string,
    description:string,
    contactPhone:string,
    contactEmail:string,
  }
}


const JobIntro = ({job}:{job:Job}) => {
  return (
    <>
    <div className='bg-white p-8 shadow-2xl rounded-lg text-center md:text-left'>
          <p className='font-mono mb-4 font-italic text-xl'>{job.type}</p>
          <h1 className='font-serif mb-4 font-bold text-3xl '>{job.title}</h1>
          <div className=' mb-4 flex align-middle justify-center md:justify-start'>
          <FaMapMarked className='text-red-600 mr-3 size-6 mt-1'/>
          <p className='text-orange-400 mt-1'>{job.location}</p>
          </div>
          </div>
    </>
  )
}

export default JobIntro