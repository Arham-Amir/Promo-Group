import TeamInfo from "@components/teamInfo";
const TeamCard = (props = {}) => {
  return (
    <section className={ `${props.class} py-16 flex justify-center items-center`}>
      <section className="basis-1/2 flex justify-center items-center"><img src="/image/construction.gif" className="w-[500px] h-[400px]" alt="construction team image" /></section>
      <TeamInfo class= 'basis-1/2'/>
    </section>
  );
}

export default TeamCard;
