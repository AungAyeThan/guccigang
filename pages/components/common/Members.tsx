import React, { useState } from "react";

import ModalComponent from "../utils/ModalPopup";
import CardComponent from "../utils/Card";

enum EImageUri {
  WaiYiMonSoe = "/images/waiyimonsoe.png",
  LaminThaw = "/images/laminthaw.jpg",
  PhyoHeinKyaw = "/images/phyoheinkyaw.png",
  AungAyeThan = "/images/aungayethan.png",
  SuMyatHnin = "/images/sumyathnin.png",
  LynnMyat = "/images/lynnmyat.png",
  SuWintThida = "/images/suwintthida.png",
  HninHaymar = "/images/hninhaymar.png",
  Yemin = "/images/yemin.png",
  ShunPyaePyaeAung = "/images/shunpyaepyaeaung.png",
  ShuMawaSoe = "/images/shumawasoe.png",
  ThonDaryLwin = "/images/thondarylwin.png",
}

const memberConfig = {
  waiyi: {
    title: "Wai Yi Mon Soe",
    subtitle: "Founder",
    image: EImageUri.WaiYiMonSoe,
    about:
      "I’ve been in the Information & Communication Technology field since 2001 and formal professional experiences of product & project design management, enterprise applications and service design especially in Digital Products. I'm currently as UX Consultant of S2T Software Company (Singapore) and also a founder of UXMM Community Organization (UXMM). UXMM is a non-profit organization building the only career growth platform focused on providing international technical knowledge, educational resources and passion for Product design, User Experience and User Interface designer across in Myanmar.",
  },
};

const Members: React.FC = () => {
  const [isWaiYiModalOpen, setIsWaiYiModalOpen] = useState(false);
  const [isAlvinModalOpen, setIsAlvinModalOpen] = useState(false);

  const openWaiYiModal = (person: string) => {
    setIsWaiYiModalOpen(true);
  };

  const closeWaiYiModal = (person: string) => {
    setIsWaiYiModalOpen(false);
  };

  const openAlvinModal = (person: string) => {
    setIsAlvinModalOpen(true);
  };

  const closeAlvinModal = (person: string) => {
    setIsAlvinModalOpen(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {/* Each member card */}
      <div className="p-1">
        <div
          className="flex items-center justify-center"
          onClick={() => openWaiYiModal("waiyi")}
        >
          <CardComponent
            title="Wai Yi Mon Soe"
            subtitle="Founder"
            image={memberConfig.waiyi.image}
          />
        </div>
        <ModalComponent
          isOpen={isWaiYiModalOpen}
          onClose={() => closeWaiYiModal("waiyi")}
          title="Wai Yi Mon Soe"
          subtitle="Founder"
          image={EImageUri.WaiYiMonSoe}
        />
      </div>

      <div className="p-1">
        <div
          className="flex items-center justify-center"
          onClick={() => openAlvinModal("alvin")}
        >
          <CardComponent
            title="La Min Thaw (Alvin)"
            subtitle="Co-Founder"
            image={EImageUri.LaminThaw}
          />
        </div>
        <ModalComponent
          isOpen={isAlvinModalOpen}
          onClose={() => closeAlvinModal("alvin")}
          title="La Min Thaw (Alvin)"
          subtitle="Co-Founder"
          image={EImageUri.LaminThaw}
        />
      </div>

      {/* Add the rest of the members in a similar fashion */}
      <div className="p-1">
        <CardComponent
          title="Phyo Hein Kyaw"
          subtitle="Development Specialist"
          image={EImageUri.PhyoHeinKyaw}
        />
      </div>
      <div className="p-1">
        <CardComponent
          title="Aung Aye Than"
          subtitle="Development Specialist"
          image={EImageUri.AungAyeThan}
        />
      </div>
      <div className="p-1">
        <CardComponent
          title="Su Myat Hnin"
          subtitle="Visual Design Specialist"
          image={EImageUri.SuMyatHnin}
        />
      </div>
      <div className="p-1">
        <CardComponent
          title="Lynn Myat Bhone Htut"
          subtitle="Content & Visual Specialist"
          image={EImageUri.LynnMyat}
        />
      </div>
      <div className="p-1">
        <CardComponent
          title="Su Wint Thida"
          subtitle="Social Media Specialist"
          image={EImageUri.SuWintThida}
        />
      </div>
      <div className="p-1">
        <CardComponent
          title="Hnin Hay Mar Aung"
          subtitle="Coordination Specialist"
          image={EImageUri.HninHaymar}
        />
      </div>
      <div className="p-1">
        <CardComponent
          title="Ye Min Ko Ko"
          subtitle="Visual & Content Specialist"
          image={EImageUri.Yemin}
        />
      </div>
      <div className="p-1">
        <CardComponent
          title="Shunn Pyae Pyae Aung"
          subtitle="Visual Design Specialist"
          image={EImageUri.ShunPyaePyaeAung}
        />
      </div>
      <div className="p-1">
        <CardComponent
          title="Shu Mawa Soe"
          subtitle="Coordination Specialist"
          image={EImageUri.ShuMawaSoe}
        />
      </div>
      <div className="p-1">
        <CardComponent
          title="Thon Dary Lwin"
          subtitle="Content & Visual Specialist"
          image={EImageUri.ThonDaryLwin}
        />
      </div>
    </div>
  );
};

export default Members;
