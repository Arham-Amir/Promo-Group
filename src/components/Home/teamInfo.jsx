import Link from 'next/link';
import {BsArrowUpRightSquareFill} from 'react-icons/bs'

const TeamInfo = (props = {}) => {
  return (
    <section className={`${props.class}
     text-indigo-950 flex flex-col items-center justify-center gap-8`}>
      <h1 className="sm:text-2xl xs:text-xl 2xl:text-5xl font-semibold">{props.heading}</h1>
      <p className="lg:w-[72%] xs:w-[80%] 2xl:text-3xl text-lg text-left">{props.description}</p>
      <section className='flex-center'>
        <Link href={props.link} id='visit' target='_blank' className={`bg-indigo-950 text-white py-4 px-7 rounded-lg flex-center gap-2 transition-all duration-150 hover:bg-indigo-600 2xl:text-3xl`}>
          Visit Page<BsArrowUpRightSquareFill className='icon hidden' size={15} /></Link>
      </section>

    </section>
  );
}

export default TeamInfo;
