import SectionHeader from "../components/Shared/SectionHeader";
import ProjectsList from "../components/Projects/ProjectsList";

export default function Projects() {
  return (
    <div className="section-padding">
      <div className="container-max">
        <SectionHeader
          as="h1"
          title="Projects"
          subtitle="Web, mobile, IoT and business software, from client websites to ESP32 systems."
        />
        <h2 className="sr-only">All projects</h2>
        <ProjectsList />
      </div>
    </div>
  );
}
