import React, { useState } from "react";
import Heading from "../ui/Heading";
import axios from "axios";
import Text from "../ui/Text";

function Overview() {
  const [profile, setProfile] = useState();
  axios
    .get("http://localhost:3000/api/profile")
    .then((resp) => setProfile(resp.data));
  return (
    <div>
      <Heading>Overview</Heading>
      <Text addClass={"m-6"}>{profile?.description}</Text>
    </div>
  );
}

export default Overview;
