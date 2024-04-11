const skillImage = [
  { img: "image/HTML5.jpg" },
  { img: "image/css3.jpg" },
  { img: "image/javascript.jpg" },
  { img: "image/Java.jpg" },
  { img: "image/MongoDB.jpg" },
  { img: "image/expressjs.png" },
  { img: "image/React.png" },
  { img: "image/nodejs.jpg" },
  { img: "image/firebase.png" },
];
const SkillSection = () => {
  return (
    <>
      <center className="my-10">
        <h1 className="text-4xl font-bold">
          <span className="text-green-500">Skills</span> And{" "}
          <span className="text-green-500">Internships</span>
        </h1>
      </center>
      <center className="mainskillset w-10/12 mx-12">
        <div className="mainskill">
          <div className="firstmainskill">
            {skillImage.map((image) => (
              <div className="subfirstmainskills my-4">
                <img src={image.img} alt="" className="htmllogo" />
              </div>
            ))}
          </div>
          <div className="secondmainskills my-4 text-justify">
            <div>
              <i>Jul 2023 - Aug 2023</i>
              <h1>
                <b>
                  <i>Internshala</i>
                </b>
              </h1>
              <h1>
                <b>Summer Training</b>
              </h1>
              <p>
                Successfully completed Internshala summer training program,
                focusing on data structures and algorithms.
              </p>
              <p>
                Acquired valuable skills in problem-solving, algorithmic
                thinking, and efficient data structure implementation, enhancing
                my software development capabilities.
              </p>
            </div>
            <br />
            <br />
            <div>
              <i>July 2023 - Oct 2023</i>
              <h1>
                <b>
                  <i>Preplaced Mentorship</i>
                </b>
              </h1>
              <h1>
                <b>Full Stack Development Mentorship</b>
              </h1>
              <p>
                Completed 120-days Full Stack mentorship program, and
                successfully applied gained knowledge.
              </p>
              <p>
                To develop impactful projects under mentor guidance also
                improved problem solving skills.
              </p>
            </div>
          </div>
        </div>
      </center>
    </>
  );
};

export default SkillSection;
