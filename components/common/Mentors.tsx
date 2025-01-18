import React, { useState } from "react";

import ModalComponent from "../utils/ModalPopup";
import CardComponent from "../utils/Card";

enum EImageUri {
  MyoMaung = "/images/myomaung.jpeg",
  PhyuMon = "/images/phyumon.jpeg",
  WaiYiMonSoe = "/images/waiyimonsoe.png",
  LaminThaw = "/images/laminthaw.jpg",
}

const mentorConfig = {
  myomaung: {
    title: "Myo Maung Maung",
    subtitle: "Lead UX/UI Designer, Senior Manager",
    image: EImageUri.MyoMaung,
    link: {
      linkedin: "https://www.linkedin.com/in/myo-maung-maung",
    },
    about:
      "<p>Myo Maung Maung is currently a Lead UX/UI Designer at Yoma Bank, bringing over 14 years of experience in the design field, including expertise in not only UI/UX but also graphic design. Myo is also one of the instructors at Fairway Technology School. With a strong foundation in creating user-centered digital solutions, Myo has successfully led multiple projects across various sectors. Myo is passionate about mentoring and sharing his knowledge, aiming to inspire the next generation of designers through both his professional work and his educational YouTube channel, where he focuses on design and user experience.</p>",
  },
  phyumon: {
    title: "Phyu Mon Theint",
    subtitle: "Senior Experience Designer",
    image: EImageUri.PhyuMon,
    link: {
      linkedin: "https://www.linkedin.com/in/pmtheint/",
    },
    about:
      "<p>As someone with a decade of experience in the digital scene across Southeast Asia, my interest lies in meaningful interactions, inclusion, innovation, and digital transformation. Always leaning towards research & strategy but never getting out of touch with craft, I've both helped startups bring creative ideas to life and spearheaded customer-centric transformations at international corporates.</p>",
  },
  waiyi: {
    title: "Wai Yi Mon Soe",
    subtitle: "Founder",
    image: EImageUri.WaiYiMonSoe,
    link: {
      linkedin: "https://www.linkedin.com/in/waiyimonsoe/",
    },
    about:
      "<p>With over two decades of experience in Information & Communication Technology, she has a proven track record in delivering successful digital products and services. As a founder of the UXMM Community Organization, she is passionate about fostering a vibrant community of product designers and UX/UI professionals in Myanmar. She has a strong background in UX consulting, having worked with leading organizations like S2T Unlocking Cyberspace and Dynamics Therapy Group.</p>" +
      "<br/> <p> Her areas of expertise include product design management, enterprise applications, and service design. She has been in the Information & Communication Technology field since 2001. She was previously held as Senior CX Manager of the Engineering Department in Oway Pte Ltd for managing product & project development in Oway Ride Team, and also managing UX Design team & front-end design and development team under Oway Travel.</p>",
  },
  lamin: {
    title: "La Min Thaw",
    subtitle: "Co-Founder",
    image: EImageUri.LaminThaw,
    link: {
      linkedin: "https://www.linkedin.com/in/alvinlaminthaw/",
    },
    about:
      "<p>Hey there! I’ve been rocking the UX/UI design world for 12+ years, building everything from snazzy apps to sleek e-commerce platforms. Whether you’re diving into your first project or leveling up your design game, I’m here to share tips, tricks, and maybe a few design war stories along the way. Think of me as your friendly design GPS—here to guide you from brainstorming big ideas to final designs. Let’s have some fun while we level up your skills! </p>",
  },
};

const Mentors: React.FC = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const openModalHandler = (modalName: string) => {
    setOpenModal(modalName);
  };

  const closeModalHandler = () => {
    setOpenModal(null);
  };

  const mentors = [
    {
      key: "myomaung",
      title: mentorConfig.myomaung.title,
      subtitle: mentorConfig.myomaung.subtitle,
      image: mentorConfig.myomaung.image,
      modalImage: EImageUri.MyoMaung,
      about: mentorConfig.myomaung.about,
      link: mentorConfig.myomaung.link,
    },
    {
      key: "phyumon",
      title: mentorConfig.phyumon.title,
      subtitle: mentorConfig.phyumon.subtitle,
      image: mentorConfig.phyumon.image,
      modalImage: EImageUri.PhyuMon,
      about: mentorConfig.phyumon.about,
      link: mentorConfig.phyumon.link,
    },
    {
      key: "waiyi",
      title: mentorConfig.waiyi.title,
      subtitle: mentorConfig.waiyi.subtitle,
      image: mentorConfig.waiyi.image,
      modalImage: EImageUri.WaiYiMonSoe,
      about: mentorConfig.waiyi.about,
      link: mentorConfig.waiyi.link,
    },
    {
      key: "alvin",
      title: mentorConfig.lamin.title,
      subtitle: mentorConfig.lamin.subtitle,
      image: mentorConfig.lamin.image,
      modalImage: EImageUri.LaminThaw,
      about: mentorConfig.lamin.about,
      link: mentorConfig.lamin.link,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {mentors.map((mentor) => (
        <div className="p-1" key={mentor.key}>
          <div
            className="flex items-center justify-center"
            onClick={() => openModalHandler(mentor.key)}
          >
            <CardComponent
              title={mentor.title}
              subtitle={mentor.subtitle}
              image={mentor.image}
            />
          </div>
          <ModalComponent
            isOpen={openModal === mentor.key}
            onClose={closeModalHandler}
            title={mentor.title}
            subtitle={mentor.subtitle}
            image={mentor.modalImage}
            about={mentor.about}
            link={mentor.link}
            type="mentor"
          />
        </div>
      ))}
    </div>
  );
};

export default Mentors;
