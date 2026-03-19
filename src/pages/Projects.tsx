import SectionHeader from "../components/Shared/SectionHeader";
import ProjectsList from "../components/Projects/ProjectsList";

export default function Projects() {
  return (
    <div className="section-padding">
      <div className="container-max">
        <SectionHeader
          title="Projects"
          subtitle="A collection of work spanning web, mobile, IoT, and software engineering."
        />
        <ProjectsList />
      </div>
    </div>
  );
}