import React, { useState } from "react";
import Heading from "../ui/Heading";
import axios from "axios";
import Text from "../ui/Text";
import SubHeading from "../ui/SubHeading";

function Overview() {
  const [profile, setProfile] = useState();
  axios
    .get("http://localhost:3000/api/profile")
    .then((resp) => setProfile(resp.data));
  return (
    <div>
      {/* Header Section */}
      <section>
        <Heading>Overview</Heading>
        <Text addClass={"m-6"}>{profile?.description}</Text>
      </section>

      {/* Skills section */}
      <section className="bg-gray-100 p-4 rounded-md my-8">
        <SubHeading>My Skills</SubHeading>
        <div className="flex flex-wrap">
          {profile?.skills.map((skill) => {
            const ratingPercentage = (skill.rating / 5) * 100;
            return (
              <div
                key={skill.id}
                className={`py-4 px-8 border-2 border-green-700 rounded-md m-4 font-medium bg-gradient-to-r from-green-100 from-${ratingPercentage}%`}
              >
                {skill.name}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Overview;
