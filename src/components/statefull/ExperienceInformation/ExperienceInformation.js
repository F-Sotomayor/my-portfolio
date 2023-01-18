import TaskAcomplished from "./TaskAcomplished";

export default function ExperienceInformation() {
  return (
    <div className="experienceInformationContainer">
      <div className="chargeAndCompany">
        <span className="charge">Frontend Developer </span>
        <span className="company"> @ IncluIT</span>
      </div>
      <div className="date">
        <span className="from">Feb 2021 - </span>
        <span className="to">Present</span>
      </div>
      <TaskAcomplished />
      <TaskAcomplished />
      <TaskAcomplished />
    </div>
  );
}
