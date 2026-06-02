import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Background
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech, Computer Science Engineering</h4>
                <h5>Keshav Memorial College of Engineering</h5>
              </div>
              <h3>2023 – 2027</h3>
            </div>
            <p>
              CGPA: 7.46. Relevant coursework in Data Structures & Algorithms, Object-Oriented Programming, Java, and Python.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate</h4>
                <h5>Saahithi Junior College</h5>
              </div>
              <h3>2021 – 2023</h3>
            </div>
            <p>
              Completed Intermediate studies with an outstanding percentage of 97%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Tenth Grade</h4>
                <h5>Montessori High School</h5>
              </div>
              <h3>2020 – 2021</h3>
            </div>
            <p>
              Completed schooling with a perfect score of 100%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
