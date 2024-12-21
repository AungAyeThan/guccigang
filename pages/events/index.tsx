import React, { useState } from "react";
import FlexComponent from "@/components/utils/FlexComponent";
import PastEvent from "@/components/Event/PastEvent";

enum EImageUri {
  EmpoweringWoman = "/images/empowering-women.png",
  CustomerResearch = "/images/customerresearch.png",
  PhysicalWorkshop = "/images/physicalworkshop-idea.png",
  ImpactAR = "/images/impact-ar.png",
  HowToBuildPortfolio = "/images/how-to-build-portfolio.png",
}

const eventFilters = [
  { label: "All", value: "all", count: 5 },
  { label: "Online Webinar", value: "online_webinar", count: 2 },
  { label: "Physical Workshop", value: "physical_workshop", count: 1 },
  { label: "Online Meetup", value: "online_meetup", count: 2 },
];

const pastEvents = {
  online_webinar: [
    {
      speaker: "Phyu Mon Theint",
      title:
        "How to master customer & market research on a tight budget & schedule",
      image: EImageUri.CustomerResearch,
    },
    {
      speaker: "UXMM",
      title: "Empowering Women in the Tech Space",
      image: EImageUri.EmpoweringWoman,
    },
  ],
  physical_workshop: [
    {
      speaker: "UXMM",
      title: "From Ideation to Implementation",
      image: EImageUri.PhysicalWorkshop,
    },
  ],
  online_meetup: [
    {
      speaker: "Aung Nyein Chan",
      title: "The impact of AR on UX Design",
      image: EImageUri.ImpactAR,
    },
    {
      speaker: "Lynn Myat Bhone Htut (UXMM)",
      title: "How to build UX Case Study for your first portfolio",
      image: EImageUri.HowToBuildPortfolio,
    },
  ],
};

const Events = () => {
  const [selectedTag, setSelectedTag] = useState<string>("all");

  const renderPastEvents = () => {
    const filteredEvents =
      selectedTag === "all"
        ? Object.values(pastEvents).flat()
        : // @ts-ignore
          pastEvents[selectedTag] || []; // @ts-ignore

    return filteredEvents.map((event, index) => (
      <PastEvent
        key={index}
        speaker={event.speaker}
        eventType={selectedTag}
        title={event.title}
        image={event.image}
      />
    ));
  };

  return (
    <>
      {/* Header Section */}
      <div className="flex items-center justify-center">
        <div className="text-center m-20 w-[600px]">
          <p className="text-[16px] leading-[26px] font-[400] mb-5">
            <span className="text-neutral-400">Resources</span> /{" "}
            <span>Events</span>
          </p>
          <p className="mb-4 text-[40px] leading-[54px] font-bold">
            Browse our <span className="uxmm-text-color">Events</span>
          </p>
          <p className="text-[16px] leading-[26px] font-[400] font-poppins text-center">
            Our recap page offers an exclusive peek into the insightful talks,
            engaging workshops, and memorable networking opportunities that took
            place. Immerse yourself in the vibrant atmosphere and gain valuable
            knowledge and inspiration from industry leaders. Don't miss out on
            the highlights that shaped the UX landscape. Explore our past events
            recap now.
          </p>
          <button className="uxmm-btn text-white mt-8">Become a mentor</button>
        </div>
      </div>

      {/* Latest Event Section */}
      <p className="text-center text-[24px] leading-[38px] mt-20 font-plusJarkata">
        Latest event
      </p>
      <div className="flex justify-center items-center">
        <div className="p-8">
          <FlexComponent
            imageUrl={EImageUri.CustomerResearch}
            title="How to master customer & market research on a tight budget & schedule"
            date="May 22, 2023"
            type="Online Webinar"
            author="Phyu Mon Theint"
          />
        </div>
      </div>

      {/* Past Events Section */}
      <p className="text-center text-2xl font-bold leading-[38px] mt-24">
        Past Events Recap
      </p>
      <div className="mt-8">
        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap items-center gap-4">
          {eventFilters.map((filter) => (
            <button
              key={filter.value}
              className={`text-black border border-black px-4 py-2 rounded-lg ${
                selectedTag === filter.value ? "bg-red-500 text-white" : ""
              }`}
              onClick={() => setSelectedTag(filter.value)}
            >
              <span className="text-[16px] leading-[26px] font-[400]">
                {filter.label} ({filter.count})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Render Past Events */}
      <div className="flex items-center justify-center py-12">
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl w-full">
          {renderPastEvents()}
        </div>
      </div>
    </>
  );
};

export default Events;
