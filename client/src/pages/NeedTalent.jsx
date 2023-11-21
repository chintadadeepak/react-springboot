import axios from "axios";
import React, { useState } from "react";
import "../styles/needtalent.css";
import { useNavigate } from "react-router-dom";
function NeedTalent() {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [experience, setExperience] = useState(0);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const navigate = useNavigate();
  const languages = [
    { option: "Java" },
    { option: "ReactJS" },
    { option: "MongoDB" },
    { option: "PostgreSQL" },
    { option: "MySQL" },
    { option: "Docker" },
    { option: "Git & Github" },
    { option: "Firebase" },
    { option: "Springboot" },
  ];

  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) setSelectedLanguages([...selectedLanguages, value]);
    else {
      const index = selectedLanguages.indexOf(value);
      selectedLanguages.splice(index, 1);
      setSelectedLanguages([...selectedLanguages, value]);
    }
  };

  const addPost = async () => {
    try {
      await axios.post("http://localhost:8080/post", {
        profile: jobTitle,
        description: jobDescription,
        experience,
        skills: selectedLanguages,
      });
      // console.log("Data posted..");
    } catch (error) {
      console.log(error);
    }
    navigate("/hire-talent");
  };

  return (
    <div className="need-talent-container">
      <input
        className="input"
        type="text"
        placeholder="Enter job title.."
        onChange={(event) => {
          setJobTitle(event.target.value);
        }}
      />
      <input
        className="input"
        type="text"
        placeholder="Enter job description.."
        onChange={(event) => {
          setJobDescription(event.target.value);
        }}
      />
      <input
        className="input"
        type="text"
        placeholder="Enter job experience.."
        onChange={(event) => {
          setExperience(event.target.value);
        }}
      />
      {languages.map((option, key) => {
        return (
          <div key={key} className="checkbox-container">
            <input
              type="checkbox"
              value={option.option}
              // checked={selectedLanguages.includes(option.option)}
              onChange={handleChange}
            />
            <label htmlFor="option">{option.option}</label>
          </div>
        );
      })}
      <button onClick={addPost}>Add New Job</button>
    </div>
  );
}

export default NeedTalent;
