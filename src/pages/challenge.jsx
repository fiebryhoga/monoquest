import React, { useEffect, useState } from "react";

const events = [
  "Maju dua langkah",
  "Maju satu langkah",
  "Tambahan 10 poin",
  "Tukar tempat dengan pemain terdepan",
  "Dapat petunjuk jawaban",
  "Lompati satu pertanyaan sulit",
  "Mundur dua langkah",
  "Mundur satu langkah",
  "Pengurangan 10 poin",
  "Masuk penjara",
];

const getRandomEvent = () => {
  const randomIndex = Math.floor(Math.random() * events.length);
  return events[randomIndex];
};

const Challenge = () => {
  const [event, setEvent] = useState("");

  useEffect(() => {
    setEvent(getRandomEvent());
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#e9faff] flex items-center justify-center">
      <div className="min-h-[200px] bg-white rounded-2xl shadow-lg border border-[#a7c0c7] p-6 mx-4 mt-6">
        <h2 className="text-xl font-semibold text-[#4a5f65] mb-4">
          Tantangan / Kesempatan
        </h2>
        <p className="text-[#4a5f65] text-base">{event}</p>
      </div>
    </main>
  );
};

export default Challenge;
