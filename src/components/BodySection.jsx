import React from "react";
import { TiAttachmentOutline } from "react-icons/ti";

const BodySection = () => {
  return (
    <div className="content">
        <center className="heading my-4">
          <h1 className="text-5xl font-bold text-lime-600">About Me</h1>
        </center>
        <div className="newflex">
          <div className="bodyImage my-16">
            <img
              src="image/Abhi.JPG"
              alt=""
              className="rounded-2xl abhiimage"
              width={350}
            />
          </div>
          <div
            className="paragraph rounded-2xl Paragraphnew"
            style={{  width: "350px" }}
          >
            <p className="text-aquamarine">
              Hey, I am <span className="text-lime-600">Aiviraj Rajput</span>, a
              recent graduate and aspiring Full Stack Developer. Passionate
              about creating seamless digital experiences, I specialize in HTML,
              CSS, and JavaScript, ReactJS and Firebase. Eager to contribute to
              innovative projects and collaborate with like-minded
              professionals. Let's connect and explore opportunities in the
              world of Full Stack Development.
            </p>
            <br />
            <b className="text-lime-600">Education</b>
            <p className="text-aquamarine">
              B.Tech in Computer Science and Engineering. Shri Ramswaroop
              Memorial University, Lucknow. CGPA 7.9
            </p>
          </div>
        </div>
        <center>
          <button className='btn'><a href="image/Aiviraj-Resume.pdf">Resume </a><span><TiAttachmentOutline /></span></button>
        </center>
    </div>
  );
};

export default BodySection;
