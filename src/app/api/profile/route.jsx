import { NextResponse } from "next/server";
import me from "../../../assets/me.jpg";

export async function GET(req, res) {
  const profile = {
    name: "Mourya Chiranjeevi",
    role: "React Developer",
    description: `Hi, I'm Mourya Chiranjeevi from Andhra Pradesh, India. I have one and half years of experience as a react developer`,
    image: me.src,
    skills: [
      { id: 1, name: "HTML", rating: 3.5 },
      { id: 2, name: "CSS", rating: 3 },
      { id: 3, name: "JavaScript", rating: 3 },
      { id: 4, name: "React JS", rating: 3 },
      { id: 5, name: "Node JS", rating: 2.5 },
      { id: 6, name: "SQL", rating: 2.5 },
      { id: 7, name: "Tailwind css", rating: 3 },
      { id: 8, name: "Material UI", rating: 2.5 },
    ],
  };

  return NextResponse.json(profile);
}
