import React, { useState } from "react";

import ModalComponent from "../utils/ModalPopup";
import CardComponent from "../utils/Card";
import { link } from "fs";

enum EImageUri {
  WaiYiMonSoe = "/images/waiyimonsoe.png",
  LaminThaw = "/images/laminthaw.jpg",
  AungAyeThan = "/images/aungayethan.png",
  HtooAungShine = "/images/htooaungshine.jpg",
  LynnMyat = "/images/lynnmyat.png",
  AyeChanPyae = "/images/ayechanpyae.jpeg",
  ThaneZawOo = "/images/thanezawoo.jpg",
  Thiri = "/images/thiri.jpg",

  ShunPyaePyaeAung = "/images/shunpyaepyaeaung.png",
  ShuMawaSoe = "/images/shumawasoe.png",
  ThonDaryLwin = "/images/thondarylwin.png",
}

const memberConfig = {
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
      "<p>With over a decade of dedication to the UI/UX domain, Alvin has led innovative design solutions at Citizens Pay while also mentoring the next generation of designers as a Co-Founder at UXMM. His team consistently delivers products that resonate with users, ensuring seamless digital experiences that are both intuitive and impactful <br><br>. At the intersection of creativity and user-centered design, Alvin champions a collaborative approach that leverages collective insights to refine and elevate product requirements. His focus extends beyond aesthetics to crafting interactions that empower and engage customers, demonstrating a profound commitment to excellence in every facet of the digital landscape",
  },
  aung: {
    title: "Aung Aye Than",
    subtitle: "Development Specialist",
    image: EImageUri.AungAyeThan,
    about: "Just an IT guy who can't even fix a computer",
    link: {
      linkedin: "https://www.linkedin.com/in/aungayethan/",
    },
  },
  lynnmyat: {
    title: "Lynn Myat Bhone Htut",
    subtitle: "Content & Visual Specialist",
    image: EImageUri.LynnMyat,
    about: "<p>xx</p>",
    link: {},
  },
  thondary: {
    title: "Thon Dary Lwin",
    subtitle: "Content & Visual Specialist",
    image: EImageUri.ThonDaryLwin,
    about:
      "<p>Thon is an independent T-shaped product enthusiast with experience in launching digital products in fintech, e-commerce, and education. Her main focus is on strategic planning for growth products in startup industries by aligning with business goals and design decisions </p>" +
      "<br/><p>Thon is currently working at BlokID, analytic product company from Bangkok as UI/UX Designer and she also has held roles such as Senior UI/UX Designer at Dinger, where she optimized fintech products, and Lead UI Designer at Thate Pan Hub, where she created engaging, accessible designs for STEM education platforms. Thon is also an experienced mentor at MMPROJECT, having taught UI/UX concepts to diverse audiences, from young learners to professionals.</p>",
    link: {},
  },
  htoo: {
    title: "Htoo Aung Shine",
    subtitle: "Volunteer Member",
    image: EImageUri.HtooAungShine,
    link: {},
    about:
      "<p> Htoo Aung Shine is a UI/UX Designer who wants to create impactful design solutions for both businesses and users. With a solid background in graphic design, he has developed expertise in visual design, branding strategy, user interface, and user experience design. He is also focused on branding for sustainable businesses and continues to expand his knowledge in branding strategy and business management as part of his lifelong learning journey.</p>",
  },
  shumawa: {
    title: "Shu Mawa Soe",
    subtitle: "Program & Coordination Specialist",
    image: EImageUri.ShuMawaSoe,
    about: "",
    link: {},
  },
  shun: {
    title: "Shun Pyae Pyae Aung",
    subtitle: "Visual Specialist",
    image: EImageUri.ShunPyaePyaeAung,
    about: "",
    link: {},
  },
  ayechan: {
    title: "Aye Chan Pyae",
    subtitle: "Volunteer Member",
    image: EImageUri.AyeChanPyae,
    link: {},
    about:
      "<p> Pyae has a strong foundation in MVP design with a focus on usability and extensive experience in the startup landscape. Currently leading the research program at UXMM, Pyae is dedicated to using research as a cornerstone for knowledge creation and driving innovation. <br/> <br/> A data-driven decision-maker, Pyae utilizes analytics to craft design strategies and manage products, effectively balancing business objectives with user needs. With experience collaborating with multicultural teams across various countries, Pyae brings a results-driven and collaborative approach to delivering impactful solutions. </p>",
  },
  thane: {
    title: "Thane Zaw Oo",
    subtitle: "Volunteer Member",
    image: EImageUri.ThaneZawOo,
    about: "",
    link: {},
  },
  thiri: {
    title: "Thiri Phyo Naing",
    subtitle: "Volunteer Member",
    image: EImageUri.Thiri,
    about: "",
    link: {
      linkedin: "https://www.linkedin.com/in/thiri-phyo-naing-naing-7b478b274/",
      behance: "https://www.behance.net/thiriphyonaing",
    },
  },
};

const Members: React.FC = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const openModalHandler = (modalName: string) => {
    setOpenModal(modalName);
  };

  const closeModalHandler = () => {
    setOpenModal(null);
  };

  const members = [
    {
      key: "waiyi",
      title: memberConfig.waiyi.title,
      subtitle: memberConfig.waiyi.subtitle,
      image: memberConfig.waiyi.image,
      modalImage: EImageUri.WaiYiMonSoe,
      about: memberConfig.waiyi.about,
      link: memberConfig.waiyi.link,
    },
    {
      key: "alvin",
      title: memberConfig.lamin.title,
      subtitle: memberConfig.lamin.subtitle,
      image: memberConfig.lamin.image,
      modalImage: EImageUri.LaminThaw,
      about: memberConfig.lamin.about,
      link: memberConfig.lamin.link,
    },
    {
      key: "aung",
      title: memberConfig.aung.title,
      subtitle: memberConfig.aung.subtitle,
      image: memberConfig.aung.image,
      modalImage: EImageUri.AungAyeThan,
      about: memberConfig.aung.about,
      link: memberConfig.aung.link,
    },
    {
      key: "lynnmyat",
      title: memberConfig.lynnmyat.title,
      subtitle: memberConfig.lynnmyat.subtitle,
      image: memberConfig.lynnmyat.image,
      modalImage: EImageUri.LynnMyat,
      about: memberConfig.lynnmyat.about,
      link: memberConfig.lynnmyat.link,
    },
    {
      key: "thondary",
      title: memberConfig.thondary.title,
      subtitle: memberConfig.thondary.subtitle,
      image: memberConfig.thondary.image,
      modalImage: EImageUri.ThonDaryLwin,
      about: memberConfig.thondary.about,
      link: memberConfig.thondary.link,
    },
    {
      key: "shumawa",
      title: memberConfig.shumawa.title,
      subtitle: memberConfig.shumawa.subtitle,
      image: memberConfig.shumawa.image,
      modalImage: EImageUri.ShuMawaSoe,
      about: memberConfig.shumawa.about,
      link: memberConfig.shumawa.link,
    },
    {
      key: "shun",
      title: memberConfig.shun.title,
      subtitle: memberConfig.shun.subtitle,
      image: memberConfig.shun.image,
      modalImage: EImageUri.ShunPyaePyaeAung,
      about: memberConfig.shun.about,
      link: memberConfig.shun.link,
    },
    {
      key: "ayechan",
      title: memberConfig.ayechan.title,
      subtitle: memberConfig.ayechan.subtitle,
      image: memberConfig.ayechan.image,
      modalImage: EImageUri.AyeChanPyae,
      about: memberConfig.ayechan.about,
      link: memberConfig.ayechan.link,
    },
    {
      key: "htoo",
      title: memberConfig.htoo.title,
      subtitle: memberConfig.htoo.subtitle,
      image: memberConfig.htoo.image,
      modalImage: EImageUri.HtooAungShine,
      about: memberConfig.htoo.about,
      link: memberConfig.htoo.link,
    },
    {
      key: "thane",
      title: memberConfig.thane.title,
      subtitle: memberConfig.thane.subtitle,
      image: memberConfig.thane.image,
      modalImage: EImageUri.ThaneZawOo,
      about: memberConfig.thane.about,
      link: memberConfig.thane.link,
    },
    {
      key: "thiri",
      title: memberConfig.thiri.title,
      subtitle: memberConfig.thiri.subtitle,
      image: memberConfig.thiri.image,
      modalImage: EImageUri.Thiri,
      about: memberConfig.thiri.about,
      link: memberConfig.thiri.link,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {members.map((member) => (
        <div className="p-1" key={member.key}>
          <div
            className="flex items-center justify-center"
            onClick={() => openModalHandler(member.key)}
          >
            <CardComponent
              title={member.title}
              subtitle={member.subtitle}
              image={member.image}
            />
          </div>
          <ModalComponent
            isOpen={openModal === member.key}
            onClose={closeModalHandler}
            title={member.title}
            subtitle={member.subtitle}
            image={member.modalImage}
            about={member.about}
            link={member.link}
          />
        </div>
      ))}
    </div>
  );
};

export default Members;
