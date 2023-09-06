import React from "react";
import me from "../assets/me.jpg";
import Image from "./ui/Image";
import SubHeading from "./ui/SubHeading";
import Description from "./ui/Description";

function NavPanel({ renderedView, setRenderedView }) {
  const profile = {
    name: "Mourya Chiranjeevi",
    role: "React Developer",
    image: me.src,
  };

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
    <div className="w-1/5 p-8 flex flex-col">
      {/* Profile Section */}
      <section className="h-64 flex flex-col justify-evenly items-center">
        <Image
          src={profile.image}
          alt="Profile Picture"
          width={"100px"}
          height={"100px"}
          rounded={"full"}
        />
        <div>
          <SubHeading>{profile.name}</SubHeading>
          <Description>{profile.role}</Description>
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
              onClick={() => setRenderedView(linkObj.view)}
            >
              {linkObj.name}
            </li>
          ))}
        </ul>
      </section>
      {/* Footer section */}
      <section>
        <Description>Designed and Developed by {profile.name}</Description>
      </section>
    </div>
  );
}

export default NavPanel;
