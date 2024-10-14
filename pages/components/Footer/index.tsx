enum EImageUri {
  UXMMLogo = "/images/uxmm-footer.png",
  FacebookIcon = "/images/facebook.png",
  LinkedInIcon = "/images/linkedin.png",
  YouTubeIcon = "/images/youtube.png",
  ApplePodcast = "/images/applepodcasts.png",
  SpotifyIcon = "/images/spotify.png",
  GooglePodcastIcon = "/images/googlepodcasts.png",
  Overcast = "/images/overcast.png",
  RSS = "/images/rss.png",
}

const Footer = () => {
  return (
    <footer className="bg-white py-8 px-4 md:px-16 font-poppins text-[16px] lending-[26px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:text-left">
        {/* Logo and Newsletter Section */}
        <div>
          <div className="mb-4">
            <img
              src={EImageUri.UXMMLogo}
              alt="UXMM Logo"
              className="md:mx-auto md:mx-0"
            />
          </div>
          <p className="text-gray-600 mb-4 text-customgray">
            Stay up to date with the latest news, announcements, and articles.
          </p>
          <form className="flex items-center justify-center md:justify-start space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-full px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full px-6 py-2 font-semibold shadow-lg">
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact Section */}
        <div className="md:mt-0 lg:mt-[53px] md:ml-[200px]">
          <h3 className="text-customgray mb-4">Contact</h3>
          <p className="text-red-500">
            <a href="mailto:info@uxmm.org">info@uxmm.org</a>
          </p>
        </div>

        {/* Social Media Section */}
        <div className="lg:mt-[53px] md:ml-[100px]">
          <h3 className="text-gray-800 mb-4">Social Media</h3>
          <div className="flex md:justify-start space-x-4">
            <a href="#">
              <img
                src={EImageUri.FacebookIcon}
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <a href="#">
              <img
                src={EImageUri.LinkedInIcon}
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </a>
            <a href="#">
              <img
                src={EImageUri.YouTubeIcon}
                alt="YouTube"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>

        {/* Podcast Section */}
        <div className="lg:mt-[53px]">
          <h3 className="text-gray-800 mb-4">Podcast</h3>
          <div className="flex md:justify-start space-x-4">
            <a href="#">
              <img
                src={EImageUri.ApplePodcast}
                alt="Apple Podcast"
                className="w-6 h-6"
              />
            </a>
            <a href="#">
              <img
                src={EImageUri.SpotifyIcon}
                alt="Spotify"
                className="w-6 h-6"
              />
            </a>
            <a href="#">
              <img
                src={EImageUri.GooglePodcastIcon}
                alt="Google Podcast"
                className="w-6 h-6"
              />
            </a>
            <a href="#">
              <img
                src={EImageUri.Overcast}
                alt="overcast"
                className="w-6 h-6"
              />
            </a>
            <a href="#">
              <img src={EImageUri.RSS} alt="overcast" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section text-gray-500 */}
      <div className="mt-8 text-center text-customgray">
        © 2024 UXMM, all rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
