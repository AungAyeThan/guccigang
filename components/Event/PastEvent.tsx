import React from "react";

interface PastEventProps {
  speaker: string;
  title: string;
  image: string;
  eventType: string;
}

function getEventType(eventType: string, title: string): string | undefined {
  const events = new Map<string, string>([
    ["online_webinar", "Online Webinar"],
    ["physical_workshop", "Physical Workshop"],
    ["online_meetup", "Online Meetup"],
    ["creativity", "Creativity"],
    ["usecases", "Use Cases"],
    ["future of work", "Future of Work"],
  ]);

  const eventsWithTitle = new Map<string, string>([
    [
      "How to master customer & market research on a tight budget & schedule",
      "Online Webinar",
    ],
    ["Empowering Women in the Tech Space", "Online Webinar"],
    ["From Ideation to Implementation", "Physical Workshop"],
    ["The impact of AR on UX Design", "Online Meetup"],
    ["How to build UX Case Study for your first portfolio", "Online Meetup"],
  ]);

  if (events.get(eventType)) {
    return events.get(eventType);
  } else {
    return eventsWithTitle.get(title);
  }
}

const PastEvent: React.FC<PastEventProps> = ({
  speaker,
  title,
  image,
  eventType,
}) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <div className="h-[250px] flex justify-center items-center">
        <img src={image} alt="event" className="max-h-full max-w-full" />
      </div>

      <p className="bg-gray-200 bg-opacity-50 rounded-xl border-solid w-[fit-content] p-2 text-[#3A3A3A] text-[14px] font-poppins leading-[22px] mt-4">
        {getEventType(eventType, title)}
      </p>

      <p className="text-[16px] leading-[26px] font-[500] mb-2 font-poppins mt-4">
        {title}
      </p>
      <p className="w-[338px] text-[#3A3A3A] text-base font-normal leading-[26px] mt-5">
        {" "}
        {speaker}{" "}
      </p>
    </div>
  );
};

export default PastEvent;
