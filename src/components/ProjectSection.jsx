const itemscontent = [
  {
    title: "Realtime Chat App | ReactJS, Firebase |",
    description:
      "Made a chat app with lots of features using react and firebase, which allows for instant messaging",
    img: "image/Realtimechatapp.jpg",
  },
  {
    tile: "Organic Store | HTML, CSS, Javascript |",
    description: "A website for organic fruits and vegatables",
    img: "image/OrganicStore.jpg",
  },
  {
    title: "Todo App | HTML, CSS, Javascript |",
    description: "A todo app for organize your todo lists",
    img: "image/todo.jpg",
  },
  {
    title: "Weather App | HTML, CSS, Javascript |",
    description:
      "A Weather App that provide Air, Humidity and Temperature condition of city",
    img: "image/WeatherApp.png",
  },
];
const ProjectSection = () => {
  return (
    <>
      <div className="bg-stone-500">
        <center className="headingproject">
          <h1 className="text-emerald-300 font-bold text-4xl">My Projects</h1>
        </center>
        <div className="Project mt-5">
          {itemscontent.map((item) => (
            <div className="carditem">
              <div className="cardimage">
                <img src={item.img} alt="" />
              </div>
              <h1 className="font-bold my-3">{item.title}</h1>
              <i className="text-white">{item.description}</i>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
