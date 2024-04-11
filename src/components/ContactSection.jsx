import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

const socialImage = [
  {
    img: "image/linkedinss.jpg",
    link: "https://www.linkedin.com/in/aiviraj-rajput",
  },
  { img: "image/gfg.png", link: "https://auth.geeksforgeeks.org/user/295rajusing36g1" },
  {
    img: "image/GitHubs.png",
    link: "https://github.com/AbhiRaj021",
  },
];

const ContactSection = () => {
  return (
    <>
      <footer className="footer">
        <center className="contactinfo">
          <h1 className="text-4xl font-bold mt-10">
            Contact <i className="text-green-500">Info</i>
          </h1>
        </center>
        <div className="contact mt-10">
          <div className="subcontact bg-slate-200 rounded">
            <span className="mt-4 mr-2">
              <MdEmail />
            </span>
            <h1 className="py-2 mr-2">295rajusinghrajputraj@gmail.com</h1>
          </div>
          <div className="subcontact bg-slate-200 rounded">
            <span className="mt-4 mr-2">
              <IoCallSharp/>
            </span>
            <h1 className="py-2 mr-24">+91 6206328393</h1>
          </div>
        </div>
        <center>
          <div className="connectme">
            <h1 className="text-4xl font-bold mt-10">
              <span className="text-green-500">Connect</span> With{" "}
              <span className="text-green-500">Me</span>
            </h1>
          </div>
          <div className="sociallink">
            {socialImage.map((image) => (
              <a href={image.link}>
                <img src={image.img} alt="" />
              </a>
            ))}
          </div>
          <div className="rights mt-12">
            <i>Aiviraj Rajput</i>
          </div>
        </center>
      </footer>
    </>
  );
};

export default ContactSection;
