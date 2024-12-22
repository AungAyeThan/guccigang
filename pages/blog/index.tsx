import React, { useState } from "react";
import FlexComponent from "@/components/utils/FlexComponent";
import PastEvent from "@/components/Event/PastEvent";

enum EImageUri {
  ProgramImage = "/images/figma-blog.png",
  ARBlog = "/images/ar-blog.png",
  TypeOfWorkBlog = "/images/type-of-work-blog.png",
  TypographyBlog = "/images/typographgy-blog.png",
  UberBlog = "/images/uber-blog.png",
  AIBlog = "/images/ai-blog.png",
  CreatingBtnBlog = "/images/creating-button-blog.png",
  DoodleAsset1 = "/images/mentor-doodle.png",
}

interface Event {
  speaker: string;
  eventType: string;
  title: string;
  image: EImageUri;
}

const events: Event[] = [
  {
    speaker: "Lynn Myat Bhone Htut",
    eventType: "creativity",
    title: "Speed Up your workflow with Figma Keyboard shortcut",
    image: EImageUri.ProgramImage,
  },
  {
    speaker: "Lynn Myat Bhone Htut",
    eventType: "usecases",
    title: "Augmented Reality and UX ကဘယ်လောက်ထိအရေးပါနေပြီလဲ??",
    image: EImageUri.ARBlog,
  },
  {
    speaker: "Lynn Myat Bhone Htut",
    eventType: "future_of_work",
    title: "Type of UX Designer, သင်ကရောဘယ်ထဲမှာပါနေမလဲ ??",
    image: EImageUri.TypeOfWorkBlog,
  },
  {
    speaker: "Lynn Myat Bhone Htut",
    eventType: "creativity",
    title: "4 typography tips for your UI",
    image: EImageUri.TypographyBlog,
  },
  {
    speaker: "Lynn Myat Bhone Htut",
    eventType: "usecases",
    title:
      "Uber အောင်မြင်လာခြင်းရဲ့နောက်ကွယ်က လူတွေမသိသေးတဲ့ UX အကြောင်းအရာများ",
    image: EImageUri.UberBlog,
  },
  {
    speaker: "Lynn Myat Bhone Htut",
    eventType: "future of work",
    title: "Future trends of UX - Part 2",
    image: EImageUri.AIBlog,
  },
  {
    speaker: "Lynn Myat Bhone Htut",
    eventType: "creativity",
    title: "The impact of AR on UX Design",
    image: EImageUri.CreatingBtnBlog,
  },
];

const Blogs = () => {
  const [selectedTag, setSelectedTag] = useState<string>("all");

  const filteredEvents =
    selectedTag === "all"
      ? events
      : events.filter((event) => event.eventType === selectedTag);

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="text-center m-[4rem] w-[600px]">
          <p className="text-[16px] leading-[26px] font-[400] mb-[15px] font-poppins">
            <span className="text-sideMapGray">Resources</span> /{" "}
            <span>Blogs</span>
          </p>

          <p className="mb-4 text-[40px] leading-[54px] font-[700]">
            Browse our <span className="uxmm-text-color">blog posts</span>
          </p>
          <div className="absolute sm:top-[100px] md:top-[145px] min-[320px]:left-[90%] sm:left-[79%] md:left-[80%] min-[1024px]:left-[65%] lg:left-[65%]  hidden md:block">
            <img
              src={EImageUri.DoodleAsset1}
              alt="DoodleAsset"
              className="absw-12 h-12 md:h-[50px] lg:h-[50px] xl:h-[60px]"
            />
          </div>
          <p className="text-[16px] leading-[26px] font-[400] text-customgray text-center font-poppins">
            Welcome to the UXMM community resources page! Here, you will find a
            wealth of informative and thought-provoking blog contents.
            Digestible articles about digital design and technology trend.
          </p>
        </div>
      </div>

      <p className="text-center text-[24px] font-[600] font-bold leading-[38px] mt-[60px] font-plusJakarta">
        Latest Blog
      </p>
      <div className="flex justify-center items-center">
        <div className="p-8">
          <FlexComponent
            imageUrl={EImageUri.ProgramImage}
            title="Speed Up your workflow with Figma Keyboard shortcut"
            date="May 22, 2023"
            type="Creativity"
            author="Lynn Myat Bhone Htut"
          />
        </div>
      </div>

      <p className="text-center text-[24px] font-[700] leading-[38px] mt-[6rem] font-plusJakarta">
        More articles from our community
      </p>
      <div className="flex justify-center mt-[2rem]">
        <div className="flex space-x-4">
          {["all", "creativity", "usecases", "future of work"].map((tag) => (
            <button
              key={tag}
              className={`text-black border-[1px] border-black px-3 py-1 rounded-lg ${
                selectedTag === tag ? "bg-pink-500 text-white" : ""
              }`}
              onClick={() => setSelectedTag(tag)}
            >
              <span className="text-[16px] leading-[26px] font-[400]">
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center py-12">
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl w-full">
          {filteredEvents.map((event, index) => (
            <PastEvent
              key={index}
              speaker={event.speaker}
              eventType={event.eventType}
              title={event.title}
              image={event.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
