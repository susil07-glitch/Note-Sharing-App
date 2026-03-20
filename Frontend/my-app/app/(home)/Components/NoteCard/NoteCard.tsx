import React from "react";
import { Note } from "@/.next/types/types";
import Image from "next/image";

const NoteCard = ({ notes }: { notes: Note[] }) => {
  return (
    <div className="flex mt-10 space-x-10">
      {notes.map((note) => {
        return (
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image src={note.file} alt={note.title} width={400} height={200} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{note.title}</div>
              <p className="text-gray-700 text-base">{note.description}</p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {note.subtitle}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {note.createdAt}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                {note.updatedAt}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NoteCard;
