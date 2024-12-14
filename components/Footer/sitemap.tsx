import React from "react";

enum EImageUri {
  UXMMLogo = "/images/uxmm-footer.png",
}

const Sitemap = () => {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Logo */}
          <div>
            <img
              src={EImageUri.UXMMLogo}
              alt="Company Logo"
              className="mb-4 w-20"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Sitemap;
