import { NavLink } from "react-router-dom";
// const data = [
//   {
//     id: 0,
//     profImg: "images/char_male.png",
//     profName: "Archit Mishra",
//     skills: {
//       featSkills: ["React", "Redux", "JavaScript", "HTML", "CSS"],
//       allSkills: [],
//     },
//     expYears: 5.2,
//     location: {
//       city: "Noida",
//       state: "Delhi",
//       country: "India",
//     },
//   },
// ];
export default function DevProfileCard({ el }) {
  return (
    <div className="col-12 col-md-4 col-sm-4 col-xl-4">
      <div className="dvlprs_prfle_row">
        <div className="profile_author">
          <img src={el.profImg} alt={el.profName} />
          <h2>{el.profName}</h2>
        </div>
        <div className="main_skill">
          <h4>MAIN SKILLS</h4>
          <ul>
            {el.skills.featSkills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>YEARS OF EXPERIENCE</h4>
          <h3>{el.expYears} Years</h3>
        </div>
        <div>
          <h4>LOCATION</h4>
          <h3>
            {el.location.state}, {el.location.country}
          </h3>
        </div>
        <NavLink to="/" className="cmn_btn_stroke">
          View full profile
        </NavLink>
      </div>
    </div>
  );
}
