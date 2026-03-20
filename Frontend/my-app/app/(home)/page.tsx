import Image from "next/image";
import NoteCard from "./Components/NoteCard/NoteCard";

export default async function Home() {
  const response = await fetch(`${process.env.BACKEND_URL}/getNotes`)

  if (!response.ok){
    throw new Error("Error occured while featching ")

  }
  const {data:notes}= await response.json()
  console.log(notes)


  return (
    <NoteCard notes={notes}/>
  );
}
