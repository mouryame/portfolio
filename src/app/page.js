"use client";
import NavPanel from "@/components/NavPanel";
import ViewContainer from "@/components/ViewContainer";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [renderedView, setRenderedView] = useState("home");
  return (
    <main className="bg-black-900 text-white w-screen h-screen flex">
      <NavPanel setRenderedView={setRenderedView} renderedView={renderedView} />
      <ViewContainer renderedView={renderedView} />
    </main>
  );
}
