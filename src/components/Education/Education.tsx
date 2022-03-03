import { SCEductaion } from "../../styles";
import { Timeline } from "../../UI/Timeline";

export const Education = () => {
  const EducationExperienceArray = [
    {
      place: "IT-incubator",
      period: "2021 - nowadays",
      info: "React Development"
    },
    {
      place: "St. Petersburg School of Television",
      period: "2020",
      info: "Speech art courses"
    },
    {
      place: 'PA "Belarusian Association of Accountants"',
      period: "2019",
      info: 'Accounting for beginners "From A to Z"'
    },
    {
      place: 'Training center No. 1 "Firm 1C"',
      period: "2019",
      info: "Requests in the 1C: Enterprise 8 system"
    },
    {
      place: 'Training center No. 1 "Firm 1C"',
      period: "2019",
      info:
        "Introduction to configuration and administration in the 1C: Enterprise 8.3 system."
    },
    {
      place: 'Training center No. 1 "Firm 1C"',
      period: "2019",
      info:
        "Introduction to configuration and administration in the 1C: Enterprise 8.3 system."
    },
    {
      place: "Institute of IT&Business Administration",
      period: "2018",
      info: "Configuration and programming on the 1C: Enterprise 8.3 platform"
    },
    {
      place:
        "IT-Academy of the Educational Center Of Programming and High Technologies",
      period: "2016",
      info: "IT English Elementary+"
    },
    {
      place: "Belarusian National Technical University",
      period: "2014 - 2015",
      degree: "Degree: Master of Engineering Science",
      info: "Specialization: Geotechnology (open, underground, construction)"
    },
    {
      place:
        "Belarusian National Technical University (Faculty of Mining and Environmental Engineering)",
      period: "2009 - 2014",
      degree: "Degree: Specialist",
      info: "Specialization: Development of mineral deposits"
    }
  ];

  const WorkExperienceArray = [
    {
      place: "Belgorkhimprom JSC",
      period: "2019 - nowadays",
      degree: "Position: Lead Engineer",
      info: "Mining department"
    },
    {
      place: "Belgorkhimprom JSC",
      period: "2014 - 2019",
      degree: "Position: Engineer",
      info: "Mining department"
    },
    {
      place: "Belgorkhimprom JSC",
      period: "2012 - 2014",
      degree: "Position: Technician",
      info: "Mining department"
    }
  ];

  return (
    <SCEductaion>
      <Timeline
        timelineArray={EducationExperienceArray}
        timelineTitle={"Education"}
      />
      <Timeline
        timelineArray={WorkExperienceArray}
        timelineTitle={"Work Experience"}
      />
    </SCEductaion>
  );
};
