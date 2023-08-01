import TeamCard from "@components/teamCard";
const ProjectTeames = () => {
  return (
    <div className="bg-zinc-100 w-[90%] mx-auto my-10 flex flex-col justify-center items-center py-10">
      <h1 className="text-3xl font-bold text-indigo-950">Our Current Projects</h1>
      <TeamCard class = 'flex-row'/>
      <TeamCard class = 'flex-row-reverse'/>
      <TeamCard class = 'flex-row'/>
      <TeamCard class = 'flex-row-reverse'/>
    </div>
  );
}

export default ProjectTeames;

