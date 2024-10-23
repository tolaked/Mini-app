import React from "react";
import Card from "./Card";
import Speaker1 from "../../assets/speaker1.png";
import Speaker2 from "../../assets/speaker2.png";
import Speaker3 from "../../assets/speaker3.png";
import Speaker4 from "../../assets/speaker4.png";
import Button from "../shared/Button";

const SpeakerWrapper = () => {
  const speakers = [
    {
      image: Speaker1,
      name: "Prof. David Damilola",
      title: "CEO & Lecturer",
      description: "LEEDS University",
      rank: "Keynote Speaker"
    },
    {
      image: Speaker2,
      name: "Prof. David Damilola",
      title: "CEO & Lecturer",
      description: "LEEDS University",
      rank: "Invited Speaker"
    },
    {
      image: Speaker3,
      name: "Prof. David Damilola",
      title: "CEO & Lecturer",
      description: "LEEDS University",
       rank: "Invited Speaker"
    },
    {
      image: Speaker4,
      name: "Prof. David Damilola",
      title: "CEO & Lecturer",
      description: "LEEDS University",
       rank: "Invited Speaker"
    },
  ];

  return (
    <div className=" bg-[#FEEFFF] pb-10 px-20">
      <div className="flex flex-col items-center justify-center mb-5 pt-10">
        <h2 className="text-center font-bold text-[35px]">Speakers</h2>
        <p className="text-center w-3/5">
          The International SEEDS Conference aims to bring together experts from
          around the world to focus on changes required to minimise the impact of
          human activity on the environment.
        </p>
      </div>
      <div className="flex justify-evenly">
        {speakers.map((speaker: any) => (
          <Card
            key={speaker.name}
            image={speaker.image}
            name={speaker.name}
            title={speaker.title}
            description={speaker.description}
            speakerRank={speaker.rank}
          />
        ))}
      </div>
      <Button/>
    </div>
  );
};

export default SpeakerWrapper;
