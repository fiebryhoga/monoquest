import React from "react";

const CardQuestion = ({ question }) => {
  return (
    <div className="min-h-[200px] bg-white rounded-2xl shadow-lg border border-[#a7c0c7] p-6 mx-4">
      <h2 className="text-xl font-semibold text-[#4a5f65] mb-4">Pertanyaan</h2>
      <p className="text-[#4a5f65] text-base">{question}</p>
    </div>
  );
};

export default CardQuestion;