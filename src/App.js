import React from 'react';

import Moment from 'moment';

import './App.css';
import Header from './components/header';
import ContactInfo from './components/ContactInfo/ContactInfo';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';

function App() {
  var contactInfo = {
      linkedin: "mdhheydari",
      phone: "+989354366235",
      email: "mdh.heydari@gmail.com",
      github: "0xc0d3d00d",
      gitlab: "mdh.heydari",
  };
  var skills = [
      "Kubernetes",
      "Docker",
      "Go",
  ];

  var experience = [
      {
          jobTitle: "Full-stack Developer",
          organization: "ViaDirect",
          organizationDescription: "ViaDirect is an interactive solution that guides and informs visitors of public places.",
          location: "Paris, France",
          startDate: Moment("2019/03/01"),
          achievements: [
              "Responsible for integration of their products with Google Calendar.",
              "Standardized APIs using RFC3339 to support different time zones across the globe.",
          ],
      },
  ];

  return (
    <div className="App">
      <Header />
      <ContactInfo {...contactInfo} />
      <Skills skills={skills} />
      <Experience experience={experience} />
    </div>
  );
}

export default App;
