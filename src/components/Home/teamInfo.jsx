import Link from 'next/link';

const TeamInfo = (props = {}) => {
  return (
    <section className={`${props.class}
     text-indigo-950 flex flex-col items-center justify-center gap-8`}>
      <h1 className="sm:text-2xl xs:text-xl 2xl:text-5xl font-semibold">Team Construction</h1>
      <p className="lg:w-[72%] xs:w-[80%] 2xl:text-3xl text-lg text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni quas est odio nihil dignissimos numquam laborum sint? Architecto necessitatibus aut illo quam repudiandae reprehenderit sunt culpa repellat itaque, et nemo magni.</p>
      <section className='flex-center'>
        <Link href={props.redirectLink} className={`bg-indigo-950 text-white py-4 px-5 rounded-lg flex-center gap-2 transition-all duration-300 hover:bg-slate-600 2xl:text-3xl`}>
          Read More</Link>
      </section>

    </section>
  );
}

export default TeamInfo;
