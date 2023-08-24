import TeamCard from "@components/Home/teamCard.jsx";
import { RevealRight, RevealUp } from "@utilities/animation";
import Image from "next/image";
const ProjectTeames = () => {
  const data = [
    {
      heading: 'Promo Brick',
      img: "/image/promo-bricks.jpg",
      description: `We Emphasize the importance of bricks in building the foundation of any structure. They are the foundation on which every other element of your home will be built, including the design, insulation, and durability. For this reason, it is essential to choose high-quality bricks and ensure they are installed correctly during construction.
    With our bricks, you can be confident that your home will be built to last.`,
      link: 'https://www.promobrick.com/'
    },
    {
      heading: 'Promo Developers',
      img: "/image/promo-developer.jpg",
      description: `We are trusted partner for all your construction needs. With our expertise, dedication to quality, and commitment to client satisfaction, we ensure that every project we undertake is a resounding success. Contact us today to bring your construction vision to life.`,
      link: 'https://www.promodevelopers.com/'
    },
    {
      heading: 'Promo Garlic',
      img: "/image/promo-garlic.jpg",
      description: `We are growers and distributors of high-quality genuine NARC G1 garlic seed all over the Pakistan. It\'s a variety of garlic that is known for its exceptional growth and profitability for farmers.`,
      link: 'http://promogarlic.com/'
    }
  ]
  return (
    <section className="">
      <section id='businesses' className="bg-[url('/image/businesses-background.png')] w-[90%] mx-auto my-10 flex flex-col justify-center items-center py-10">
        <RevealUp>
          <h1 className="hover-underline-animation after:bg-indigo-800 hover:text-indigo-800 sm:text-3xl xs:text-2xl 2xl:text-6xl font-bold text-indigo-950">
            BUSINESSES
          </h1>
        </RevealUp>
        <Image src="/image/divider.png" width={0} height={0} className="h-28 w-auto" alt="divider_Line" />
        {data.map((el, i) => {
          return <RevealRight>
            <TeamCard key={i} heading={el['heading']} img={el['img']} description={el['description']} link={el['link']} class={`xs:flex-col-reverse ${i % 2 == 0 ? 'md:flex-row-reverse' : 'md:flex-row'} md:py-16 xs:py-12 2xl:py-20`} />
          </RevealRight>
        })}
      </section>
    </section>
  );
}

export default ProjectTeames;

