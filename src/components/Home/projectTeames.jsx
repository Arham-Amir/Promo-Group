import TeamCard from "@components/Home/teamCard";
const ProjectTeames = () => {
  return (
    <div id = 'services' className="bg-zinc-100 w-[90%] mx-auto my-10 flex flex-col justify-center items-center py-10">
      <h1 className="sm:text-3xl xs:text-2xl 2xl:text-6xl font-bold text-indigo-950"> Current Team</h1>
      <TeamCard class = 'xs:flex-col-reverse md:flex-row' redirectLink = '#'/>
      <TeamCard class = 'xs:flex-col-reverse md:flex-row-reverse' redirectLink = '#'/>
      <TeamCard class = 'xs:flex-col-reverse md:flex-row' redirectLink = '#'/>
      <TeamCard class = 'xs:flex-col-reverse md:flex-row-reverse' redirectLink = '#'/>
    </div>
  );
}

export default ProjectTeames;

