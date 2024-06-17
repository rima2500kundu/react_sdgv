import { NavLink } from "react-router-dom";
import DevProfileCard from "./DevProfileCard";
const data = [
  {
    id: 0,
    profImg: "images/char_male.png",
    profName: "Archit Mishra",
    skills: {
      featSkills: ["React", "Redux", "JavaScript", "HTML", "CSS"],
      allSkills: [],
    },
    expYears: 5.2,
    location: {
      city: "Noida",
      state: "Delhi",
      country: "India",
    },
  },
  {
    id: 1,
    profImg: "images/char_male.png",
    profName: "Archit Mishra",
    skills: {
      featSkills: ["React", "Redux", "JavaScript", "HTML", "CSS"],
      allSkills: [],
    },
    expYears: 5.2,
    location: {
      city: "Noida",
      state: "Delhi",
      country: "India",
    },
  },
  {
    id: 2,
    profImg: "images/char_male.png",
    profName: "Archit Mishra",
    skills: {
      featSkills: ["React", "Redux", "JavaScript", "HTML", "CSS"],
      allSkills: [],
    },
    expYears: 5.2,
    location: {
      city: "Noida",
      state: "Delhi",
      country: "India",
    },
  },
  {
    id: 3,
    profImg: "images/char_male.png",
    profName: "Archit Mishra",
    skills: {
      featSkills: ["React", "Redux", "JavaScript", "HTML", "CSS"],
      allSkills: [],
    },
    expYears: 5.2,
    location: {
      city: "Noida",
      state: "Delhi",
      country: "India",
    },
  },
  {
    id: 4,
    profImg: "images/char_male.png",
    profName: "Archit Mishra",
    skills: {
      featSkills: ["React", "Redux", "JavaScript", "HTML", "CSS"],
      allSkills: [],
    },
    expYears: 5.2,
    location: {
      city: "Noida",
      state: "Delhi",
      country: "India",
    },
  },
  {
    id: 5,
    profImg: "images/char_male.png",
    profName: "Archit Mishra",
    skills: {
      featSkills: ["React", "Redux", "JavaScript", "HTML", "CSS"],
      allSkills: [],
    },
    expYears: 5.2,
    location: {
      city: "Noida",
      state: "Delhi",
      country: "India",
    },
  },
];
export default function DevProfiles() {
  return (
    <section className="full_width devlopers_profile react_hire_sec fix_padding">
      <div className="container">
        <div className="text_controller text_controller_center">
          <h2>
            Unlock the Expertise of Premier <span> ReactJS Developers </span>for
            Your Projects
          </h2>
          <hr />
        </div>

        <div className="row">
          {data.map((el) => (
            <DevProfileCard el={el} key={el.id} />
          ))}
        </div>

        <div className="cmn_btn_grp cmn_btn_grp_center">
          <NavLink
            to="/schedule-a-call"
            className="cmn_btn_fill"
          >
            Discover Top ReactJS Developers
          </NavLink>
        </div>
      </div>
    </section>
  );
}
