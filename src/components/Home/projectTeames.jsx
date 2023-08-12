import TeamCard from "@components/Home/teamCard";
const ProjectTeames = () => {
  return (
    <section className="">
      <section id='services' className="bg-[url('/image/businesses-background.png')] w-[90%] mx-auto my-10 flex flex-col justify-center items-center py-10">
        <h1 className="sm:text-3xl xs:text-2xl 2xl:text-6xl font-bold text-indigo-950">BUSINESSES </h1>
        <TeamCard heading={'Promo Brick'} img={"/image/promo-bricks.jpg"} description={`We Emphasize the importance of bricks in building the foundation of any structure. They are the foundation on which every other element of your home will be built, including the design, insulation, and durability. For this reason, it is essential to choose high-quality bricks and ensure they are installed correctly during construction.
      With our bricks, you can be confident that your home will be built to last.`} link={'https://www.promobrick.com/'} class='xs:flex-col-reverse md:flex-row' />
        <TeamCard heading={'Promo Developers'} img={"/image/promo-developer.jpg"} description={'We are trusted partner for all your construction needs. With our expertise, dedication to quality, and commitment to client satisfaction, we ensure that every project we undertake is a resounding success. Contact us today to bring your construction vision to life.'} link={''} class='xs:flex-col-reverse md:flex-row-reverse' />
        <TeamCard heading={'Promo Garlic'} img={"/image/promo-garlic.jpg"} description={'We are growers and distributors of high-quality genuine NARC G1 garlic seed all over the Pakistan. It\'s a variety of garlic that is known for its exceptional growth and profitability for farmers.'} link={'http://promogarlic.com/'} class='xs:flex-col-reverse md:flex-row' />
        {/* <TeamCard heading={''} img = {"/image/construction.gif"} description = {''} class = 'xs:flex-col-reverse md:flex-row-reverse' /> */}
      </section>
    </section>
  );
}

export default ProjectTeames;

