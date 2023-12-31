import { useState } from "react";
import SubHeading from "./ui/SubHeading";
import Description from "./ui/Description";
import axios from "axios";
import DisplayImage from "./ui/DisplayImage";

function NavPanel({ renderedView, setRenderedView }) {
  const [profile, setProfile] = useState();

  axios.get("http://localhost:3000/api/profile").then((resp) => {
    setProfile(resp.data);
  });

  const navLinks = [
    {
      id: 1,
      name: "Home",
      view: "home",
    },
    {
      id: 2,
      name: "Contact Me",
      view: "contact",
    },
  ];
  return (
    <div className="md:w-1/2 lg:w-1/5 p-8 flex flex-col">
      {/* Profile Section */}
      <section className="h-64 flex flex-col justify-evenly items-center">
        <DisplayImage src={profile?.image} alt="Profile Picture" />
        <div>
          <SubHeading>{profile?.name}</SubHeading>
          <Description>{profile?.role}</Description>
        </div>
      </section>
      {/* Nav Links  */}
      <section className="grow">
        <ul className="list-none">
          {navLinks.map((linkObj) => (
            <li
              key={linkObj.id}
              className={
                renderedView === linkObj.view
                  ? "p-4 bg-black-700 rounded-md font-semibold cursor-pointer"
                  : "p-4 cursor-pointer"
              }
              onClick={() => setRenderedView(linkObj?.view)}
            >
              {linkObj.name}
            </li>
          ))}
        </ul>
      </section>
      {/* Footer section */}
      <section>
        <Description>Designed and Developed by {profile?.name}</Description>
      </section>
    </div>
  );
}

export default NavPanel;
