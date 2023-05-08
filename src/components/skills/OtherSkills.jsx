import React from "react";

const OtherSkills = () => {
  return (
    <div className="otherSkills__container">
      <h3 className="otherSkills__title">Other Skills</h3>
      <div className="otherSkills__content">
        <ul className="skills__list">
          <li className="skills__item">
            <i class="bx bxs-badge-check"></i>Object Oriented Programmation
          </li>
          <p> (Java | Python) </p>
          <li className="skills__item">
            <i class="bx bxs-badge-check"></i>Operating System
          </li>
          <p> (Windows | Linux) </p>
          <li className="skills__item">
            <i class="bx bxs-badge-check"></i>Networking
          </li>
          <p> (Administration | Supervision) </p>
        </ul>
      </div>
    </div>
  );
};

export default OtherSkills;
