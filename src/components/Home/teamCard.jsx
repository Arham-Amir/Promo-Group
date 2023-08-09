import TeamInfo from "@components/Home/teamInfo";
const TeamCard = (props = {}) => {
  return (
    <section className={`${props.class} md:py-16 xs:py-12 2xl:py-20 flex-center`}>
      <section className="basis-1/2 flex-center">
        <img src={props.img} className="md:w-[80%] 2xl:h-[70vh] lg:h-[70%] md:h-[45vh] xs:h-[50vh] xs:w-[70vw] object-cover xs:mt-8 lg:mt-0" alt="construction team image" />
      </section>
      <TeamInfo description = {props.description} heading = {props.heading} link = {props.link} redirectLink={props.redirectLink} class='basis-1/2' />
    </section>
  );
}

export default TeamCard;
