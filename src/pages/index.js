import ExperienceButtons from "@/components/statefull/ExperienceButtons/ExperienceButtons";
import ExperienceInformation from "@/components/statefull/ExperienceInformation/ExperienceInformation";
import Header from "@/components/stateless/Header/Header";
import Introduction from "@/components/stateless/Introduction/Introduction";

export default function Home() {
  return (
    <>
      <div className="firstPage">
        <Header />
        <Introduction />
      </div>
      <div className="secondPage">
        <div className="workExperience">Work Experience</div>
        <div className="experienceContainer">
          <ExperienceButtons />
          <ExperienceInformation />
        </div>
      </div>
    </>
  );
}
