import GetInTouch from "@/components/GetInTouch";
import React, { useState } from "react";

enum EImageUri {
  DoodleAsset1 = "/images/mentor-doodle.png",
  DoodleAsset2 = "/images/doddle-asset-2.png",
  WavyBackground = "/images/wavy-background.png",
}

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState<{
    [key: string]: number | null;
  }>({
    general: null,
    mentorship: null,
    partnership: null,
    volunteer: null,
  });

  const toggleFAQ = (section: string, index: number) => {
    setOpenIndexes((prevState) => ({
      ...prevState,
      [section]: prevState[section] === index ? null : index,
    }));
  };

  const generalFaqs = [
    {
      question: "What is UXMM?",
      answer:
        "UXMM is a community-driven organization that aims to promote and share knowledge about user experience (UX) design, research, and strategy in Myanmar. UXMM holds monthly meetups, workshops, and other events to connect UX professionals and enthusiasts, as well as provide opportunities for learning and growth.",
    },
    {
      question: "Who can participate in UXMM events?",
      answer: "Anyone with an interest in UX is welcome to participate.",
    },
    {
      question: "Are UXMM events free?",
      answer: "Yes, most of the UXMM events are free of charge.",
    },
    {
      question: "How can I get involved with UXMM?",
      answer: "You can get involved by joining our events or volunteering.",
    },
    {
      question: "How can I stay updated on UXMM events and activities?",
      answer: "Follow UXMM on social media or subscribe to our newsletter.",
    },
    {
      question: "How can I suggest a topic or speaker for a UXMM event?",
      answer: "Reach out to us via email or our website contact form.",
    },
  ];

  const membershipFaqs = [
    {
      question: "What is the UXMM Mentorship Program?",
      answer:
        "The UXMM Mentorship Program is a 3-month program that pairs experienced UX professionals with mentees who are looking to grow their skills and knowledge in the field of UX design. Mentors provide guidance, support, and feedback to help mentees achieve their goals and advance their careers.",
    },
    {
      question: "How do I become a mentor with UXMM?",
      answer:
        "To become a mentor with UXMM, you can apply through our website during the mentorship program application period. Mentors are selected based on their experience, expertise, and availability to commit to the program.",
    },
    {
      question: "Who can participate in the mentorship program?",
      answer:
        "The mentorship program is open to anyone with an interest in UX design, regardless of their level of experience. Mentees are selected based on their goals, aspirations, and willingness to learn and grow.",
    },
    {
      question: "How long does the mentorship program last?",
      answer:
        "The mentorship program lasts for 3 months, with mentors and mentees meeting regularly to discuss goals, progress, and feedback.",
    },
    {
      question: "What are the benefits of being a mentor with UXMM?",
      answer:
        "Mentors have the opportunity to share their knowledge and expertise with others, build their leadership and coaching skills, and give back to the UX community. Mentors also have the chance to learn from their mentees and gain new perspectives on their work.",
    },
  ];

  const partnershipFaqs = [
    {
      question: "What is the UXMM Partnership Program?",
      answer:
        "The UXMM Partnership Program is a collaboration between UXMM and companies, organizations, and individuals who share our mission and values. Partnerships can take many forms, including sponsorships, collaborations on events and projects, and other initiatives that support the UXMM community.",
    },
    {
      question: "How do I become a partner with UXMM?",
      answer:
        "To become a partner with UXMM, you can reach out to us via email or our website contact form. We are always looking for new partners who are passionate about UX and want to support the growth of the UX community in Myanmar.",
    },
    {
      question: "What are the benefits of becoming a partner with UXMM?",
      answer:
        "Partners with UXMM have the opportunity to connect with our community of UX professionals and enthusiasts, gain visibility and exposure for their brand, and support the growth of the UX community in Myanmar. Partnerships with UXMM can help companies and organizations reach a targeted audience of design professionals and showcase their commitment to design excellence.",
    },
    {
      question:
        "What type of partnership opportunities are available with UXMM?",
      answer:
        "UXMM offers a variety of partnership opportunities, including event sponsorships, collaborations on workshops and projects, and other initiatives that support the UXMM community. We are open to exploring new partnership ideas and opportunities that align with our mission and values.",
    },
    {
      question:
        "How do I know if my company/organization is a good fit for partnership with UXMM?",
      answer:
        "If your company or organization is passionate about design, user experience, and innovation, and is committed to supporting the growth of the UX community in Myanmar, then you may be a good fit for partnership with UXMM. We welcome partnerships with companies and organizations of all sizes and industries that share our mission and values.",
    },
  ];

  const volunteerFaqs = [
    {
      question: "What is the UXMM Volunteer Program?",
      answer:
        "The UXMM Volunteer Program is a way for individuals to get involved with UXMM and contribute to the growth and success of the organization. Volunteers help with event planning, marketing, outreach, and other activities that support the UXMM community.",
    },
    {
      question: "How do I become a volunteer with UXMM?",
      answer:
        "To become a volunteer with UXMM, you can reach out to us via email or our website contact form. We are always looking for enthusiastic and dedicated individuals who are passionate about design and want to make a positive impact on the UX community in Myanmar.",
    },
    {
      question: "What type of volunteer opportunities are available with UXMM?",
      answer:
        "Volunteers can help with event planning, marketing, outreach, and other activities that support the UXMM community. Volunteers may also have the opportunity to lead workshops, mentorship programs, and other initiatives that help grow the UX community in Myanmar.",
    },
    {
      question: "What are the benefits of volunteering with UXMM?",
      answer:
        "Volunteers with UXMM have the opportunity to gain valuable experience, build their skills, and make a positive impact on the UX community in Myanmar. Volunteers also have the chance to connect with other design professionals and enthusiasts, learn from industry experts, and contribute to the growth and success of UXMM.",
    },
    {
      question:
        "How much time commitment is required for volunteering with UXMM?",
      answer:
        "The time commitment for volunteering with UXMM varies depending on the volunteer role and the volunteer's availability. Volunteers can choose to commit to specific projects or events, or volunteer on an ongoing basis. We are flexible and open to accommodating volunteers' schedules and availability.",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center text-center px-6 py-12 md:px-16 mt-20">
        {/* Title */}
        <div className="">
          <h1 className="text-3xl md:text-5xl font-bold leading-[54px] text-[40px]">
            Frequently Asked <span className="uxmm-text-color">Questions</span>
          </h1>
          {/* This doodle will now be positioned using absolute positioning  min-[320px]:top-[200px] */}
          <div className="absolute sm:top-[100px] md:top-[145px] min-[320px]:left-[90%] sm:left-[79%] md:left-[85%] lg:left-[72%]  hidden md:block">
            <img
              src={EImageUri.DoodleAsset1}
              alt="DoodleAsset"
              className="absw-12 h-12 md:h-[50px] lg:h-[50px] xl:h-[60px]"
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-customgray md:text-[16px] leading-[26px] mt-4 font-poppins md:w-[41%] text-center">
          Everything you need to know about our organizations. Can’t find the
          answer you’re looking for? Please chat to our friendly team.
        </p>

        <div className="absolute max-[320px]:top-[300px] sm:top-[100px] md:top-[245px] min-[320px]:left-[20%]  lg:left-[25%]  hidden md:block">
          <img
            src={EImageUri.DoodleAsset2}
            alt="DoodleAsset"
            className="w-12 h-12 md:h-[50px] lg:h-[50px] xl:h-[60px]"
          />
        </div>
      </div>

      {/* General FAQs Section */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">General FAQs</h2>
          <p className="text-gray-600">
            Everything you need to know about UXMM’s General program and how it
            works. Can’t find answer? Please send us your opinions.
          </p>
        </div>

        <div className="space-y-4">
          {generalFaqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <button
                className="w-full text-left p-4 hover:bg-gray-200 focus:outline-none"
                onClick={() => toggleFAQ("general", index)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">
                    {faq.question}
                  </span>
                  <span className="text-gray-500">
                    {openIndexes.general === index ? "▲" : "▼"}
                  </span>
                </div>
              </button>
              {openIndexes.general === index && (
                <div className="p-4 text-gray-700 bg-white">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mentorship FAQs Section */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Mentorship FAQs</h2>
          <p className="text-gray-600">
            Everything you need to know about UXMM’s mentorship program and how
            it works. Can’t find answer? Please send us your opinions.
          </p>
        </div>

        <div className="space-y-4">
          {membershipFaqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <button
                className="w-full text-left p-4 hover:bg-gray-200 focus:outline-none"
                onClick={() => toggleFAQ("mentorship", index)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">
                    {faq.question}
                  </span>
                  <span className="text-gray-500">
                    {openIndexes.mentorship === index ? "▲" : "▼"}
                  </span>
                </div>
              </button>
              {openIndexes.mentorship === index && (
                <div className="p-4 text-gray-700 bg-white">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Partnership FAQs Section */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4 font-plusJakarta">
            Partnership FAQs
          </h2>
          <p className="text-customgray font-poppins">
            Everything you need to know about UXMM’s Partnership program and how
            it works. Can’t find answer? Please send us your opinions.
          </p>
        </div>

        <div className="space-y-4">
          {partnershipFaqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <button
                className="w-full text-left p-4 hover:bg-gray-200 focus:outline-none"
                onClick={() => toggleFAQ("partnership", index)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">
                    {faq.question}
                  </span>
                  <span className="text-gray-500">
                    {openIndexes.partnership === index ? "▲" : "▼"}
                  </span>
                </div>
              </button>
              {openIndexes.partnership === index && (
                <div className="p-4 text-gray-700 bg-white">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Volunteer FAQs Section */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">Volunteer FAQs</h2>
          <p className="text-customgray">
            Everything you need to know about UXMM’s volunteer program and how
            it works. Can’t find the answer? Please send us your opinions.
          </p>
        </div>

        <div className="space-y-4">
          {volunteerFaqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <button
                className="w-full text-left p-4 hover:bg-gray-200 focus:outline-none"
                onClick={() => toggleFAQ("volunteer", index)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">
                    {faq.question}
                  </span>
                  <span className="text-gray-500">
                    {openIndexes.volunteer === index ? "▲" : "▼"}
                  </span>
                </div>
              </button>
              {openIndexes.volunteer === index && (
                <div className="p-4 text-gray-700 bg-white">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Get In Touch Section */}
      <GetInTouch />
    </>
  );
};

export default FAQ;
