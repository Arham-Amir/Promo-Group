import TeamInfo from "@components/Home/teamInfo";
const TeamCard = (props = {}) => {
  return (
    <section className={`${props.class} flex-center`}>
      <section className="basis-1/2 flex-center">
        <img src={props.img} className="md:w-[80%] 2xl:h-[70vh] lg:h-[75%] md:h-[45vh] xs:h-[50vh] xs:w-[70vw] object-cover xs:mt-8 lg:mt-0" alt="construction team image" />
      </section>
      <TeamInfo description = {props.description} heading = {props.heading} link = {props.link} redirectLink={props.redirectLink} class='basis-1/2' />
    </section>
  );
}
export default TeamCard;
