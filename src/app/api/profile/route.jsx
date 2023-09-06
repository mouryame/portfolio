import { NextResponse } from "next/server";
import me from "../../../assets/me.jpg";

export async function GET(req, res) {
  const profile = {
    name: "Mourya Chiranjeevi",
    role: "React Developer",
    description: `Hi, I'm Mourya Chiranjeevi from Andhra Pradesh, India. I have one and half years of experience as a react developer`,
    image: me.src,
  };

  return NextResponse.json(profile);
}
