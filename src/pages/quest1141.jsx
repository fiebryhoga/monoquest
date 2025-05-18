"use client"; // jika pakai app router

import React from "react";
import CardQuestion from "@/components/CardQuestion";

const questions = [
  "Apa saja faktor-faktor yang mempengaruhi kebutuhan manusia?",
  "Apa saja tantangan yang dihadapi manusia dalam memenuhi kebutuhan di era modern?",
  "Apa yang dimaksud dengan konsumsi? Berikan contoh kegiatan konsumsi!",
  "Bagaimana pengaruh teknologi terhadap cara manusia memenuhi kebutuhan?",
  "Bagaimana cara manusia purba memenuhi kebutuhan hidupnya pada zaman praaksara?",
  "Apa yang dimaksud dengan kebutuhan manusia? Berikan contoh kebutuhan primer, sekunder, dan tersier!",
  "Apa perbedaan antara kebutuhan sekarang dan kebutuhan masa depan? Berikan contoh masing-masing!",
  "Jelaskan bagaimana cara manusia memenuhi kebutuhannya?",
  "Apa yang dimaksud dengan kebutuhan manusia? Berikan contohnya!",
  "Mengapa manusia purba pada masa berburu dan mengumpulkan makanan sering berpindah-pindah tempat?",
  "Apa yang dimaksud dengan sistem barter? Bagaimana sistem barter diterapkan dalam kehidupan manusia purba?",
  "Apa saja kepercayaan yang dianut oleh manusia purba? Bagaimana kepercayaan tersebut mempengaruhi kehidupan mereka?",
  "Apa bukti-bukti yang menunjukkan adanya kehidupan manusia purba di Indonesia?",
  "Apa yang dimaksud dengan kelangkaan? Berikan contoh kelangkaan yang sering terjadi dalam kehidupan sehari-hari!",
  "Mengapa kebutuhan manusia tidak pernah terpuaskan?",
  "Apa perbedaan antara kebutuhan dan keinginan?",
  "Bagaimana kelangkaan mempengaruhi cara manusia memenuhi kebutuhannya?",
  "Apa saja faktor-faktor yang menyebabkan terjadinya kelangkaan?",
  "Apa hubungan antara kelangkaan dengan harga barang?",
  "Bagaimana teknologi dapat membantu mengatasi masalah kelangkaan?",
  "Apa yang dapat kita lakukan sebagai individu untuk mengurangi dampak kelangkaan?",
  "Apa yang dimaksud dengan diaspora?",
  "Apa saja faktor yang mendorong terjadinya diaspora Indonesia?",
  "Apa saja kontribusi positif yang diberikan diaspora Indonesia bagi Indonesia?",
  "Apa saja dampak positif dan negatif dari diaspora bagi Indonesia?",
  "Bagaimana pengaruh globalisasi terhadap fenomena diaspora?",
  "Dari manakah asal-usul nenek moyang bangsa Indonesia? Sebutkan beberapa teori yang ada!",
  "Apa saja bukti-bukti yang mendukung teori asal-usul nenek moyang bangsa Indonesia?",
  "Apa yang dimaksud dengan bangsa Austronesia?",
  "Bagaimana cara nenek moyang bangsa Indonesia menyebar ke seluruh Nusantara?",
  "Apa pengaruh migrasi nenek moyang bangsa Indonesia terhadap kebudayaan Indonesia saat ini?",
  "Apa perbedaan antara kelompok Proto Melayu dan Deutro Melayu?",
  "Bagaimana kehidupan sehari-hari nenek moyang bangsa Indonesia pada masa lalu?",
  "Bagaimana kita dapat melestarikan warisan budaya nenek moyang?",
  "Jelaskan perbedaan kehidupan manusia purba pada masa berburu dan mengumpulkan makanan, bercocok tanam, dan perundagian!",
];

const getRandomQuestion = () => {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
};

const Quest1141 = () => {
  const [question, setQuestion] = React.useState("");

  React.useEffect(() => {
    setQuestion(getRandomQuestion());
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#e9faff] flex items-center justify-center">
      <CardQuestion question={question} />
    </div>
  );
};

export default Quest1141;
