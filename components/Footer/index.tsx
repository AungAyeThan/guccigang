enum EImageUri {
  UXMMLogo = "/images/uxmm-footer.png",
  FacebookIcon = "/images/facebook.png",
  LinkedInIcon = "/images/linkedIn.png",
  YouTubeIcon = "/images/YouTube.png",
  ApplePodcast = "/images/applepodcasts.png",
  SpotifyIcon = "/images/spotify.png",
  GooglePodcastIcon = "/images/googlepodcasts.png",
  Overcast = "/images/overcast.png",
  RSS = "/images/rss.png",
}

const Footer = () => {
  return (
    <footer className="bg-white py-8 px-4 md:px-16 font-poppins text-[16px] leading-[26px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Navigation Section */}
        <div className="flex flex-col space-y-4">
          <img src={EImageUri.UXMMLogo} alt="UXMM Logo" className="h-12 w-12" />
          <nav className="grid grid-cols-2 gap-1 text-customgray font-poppins text-[16px] leading-[26px] font-[400]">
            <a href="/aboutus" className="hover:uxmm-text-color">
              About
            </a>
            <a href="/mentor" className="hover:text-pink-500">
              Programs
            </a>
            <a href="/events" className="hover:text-pink-500">
              Events
            </a>
            <a href="#" className="hover:text-pink-500">
              Support Us
            </a>
            <a href="#" className="hover:text-pink-500">
              Join Us
            </a>
            <a href="#" className="hover:text-pink-500">
              FAQs
            </a>
            <a href="#" className="hover:text-pink-500">
              Blog
            </a>
          </nav>
        </div>

        {/* Contact Section */}
        <div className="md:ml-[200px] md:mt-[50px]">
          <h3 className="text-gray-800 font-medium mb-4">Contact</h3>
          <p className="text-customgray">
            <a href="mailto:info@uxmm.org" className="uxmm-text-color">
              info@uxmm.org
            </a>
          </p>
        </div>

        {/* Social Media Section */}
        <div className="md:ml-[110px] md:mt-[50px]">
          <h3 className="text-gray-800 font-medium mb-4">Social Media</h3>
          <div className="flex space-x-4">
            <a href="#">
              <img
                src={EImageUri.FacebookIcon}
                alt="Facebook"
                className="w-6 h-6 hover:opacity-80"
              />
            </a>
            <a href="#">
              <img
                src={EImageUri.LinkedInIcon}
                alt="LinkedIn"
                className="w-6 h-6 hover:opacity-80"
              />
            </a>
            <a href="#">
              <img
                src={EImageUri.YouTubeIcon}
                alt="YouTube"
                className="w-6 h-6 hover:opacity-80"
              />
            </a>
          </div>
        </div>

        {/* Podcast Section */}
        <div className="md:mt-[50px]">
          <h3 className="text-gray-800 font-medium mb-4">Podcast</h3>
          <div className="flex flex-wrap gap-4">
            <a href="#">
              <img
                src={EImageUri.ApplePodcast}
                alt="Apple Podcast"
                className="w-6 h-6 hover:opacity-80"
              />
            </a>
            <a href="#">
              <img
                src={EImageUri.SpotifyIcon}
                alt="Spotify"
                className="w-6 h-6 hover:opacity-80"
              />
            </a>
            <a href="#">
              <img
                src={EImageUri.GooglePodcastIcon}
                alt="Google Podcast"
                className="w-6 h-6 hover:opacity-80"
              />
            </a>
            <a href="#">
              <img
                src={EImageUri.Overcast}
                alt="Overcast"
                className="w-6 h-6 hover:opacity-80"
              />
            </a>
            <a href="#">
              <img
                src={EImageUri.RSS}
                alt="RSS"
                className="w-6 h-6 hover:opacity-80"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-gray-500">
        © 2020-2024 UXMM, all rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
