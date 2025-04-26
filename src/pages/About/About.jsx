import SakibImg from "@/assets/images/sakib(bg).png";
import FabLogo from "@/assets/images/fab_logo.png";
import Bifcd from "@/assets/images/bifcd_lgo.png";

export default function About() {
  return (
    <>
      {/* About Section with transparent background */}
      <section id="about" className="relative py-24 px-6 md:px-16 bg-transparent">
        <div className="container mx-auto relative z-10">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl text-white font-extrabold tracking-wide">
              Developer, Designer, Creator, Innovator
            </h2>
            <p className="mt-4 text-lg md:text-xl text-white opacity-80">
              Creating modern web solutions and empowering developers worldwide
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {/* Left - Image */}
            <div className="relative flex items-center justify-center">
              <div className="w-80 h-80 rounded-full border-8 border-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src={SakibImg}
                  alt="Sakib"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

            {/* Right - Text */}
            <div className="flex flex-col justify-center space-y-8">
              <p className="text-lg md:text-xl text-white opacity-90 leading-relaxed">
                Hello! I'm Nazmus Sakib, a passionate JavaScript developer specializing in creating innovative web solutions and user-friendly interfaces.{" "}
                <span className="font-bold text-white">
                  As the creator of the FabTech.it UI Framework
                </span>, I'm committed to simplifying development workflows.
              </p>
              <p className="text-lg md:text-xl text-white opacity-90 leading-relaxed">
                My goal is to make web development faster, easier, and more accessible to developers worldwide. I'm currently expanding into backend development, striving to become a full-stack developer and create seamless, robust web applications.
              </p>

              {/* Adding the new statement about Bifcd */}
              <p className="text-lg md:text-xl text-white opacity-90 leading-relaxed">
                Additionally, <span className="font-bold text-white">I am the creator of Bifcd</span>, a platform dedicated to bringing innovative solutions to the developer community and helping developers accelerate their workflow.
              </p>

              {/* Blockquote */}
              <div className="pt-6 md:pt-12">
                <blockquote className="border-l-4 border-white pl-6 text-lg md:text-xl text-white italic opacity-80">
                  "I'm a lifelong learner, constantly innovating and striving to contribute to the developer community with new ideas and tools that empower others."
                  <div className="mt-4">
                    <cite className="font-bold text-white">Nazmus Sakib, Creator of</cite>
                    <div className="flex items-center gap-2 mt-2">
                      <img
                        className="h-6 md:h-8"
                        src={FabLogo}
                        alt="Fab Tech Logo"
                      />
                      <span className="text-white">FabTech.it</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <img
                        className="h-6 md:h-8"
                        src={Bifcd}
                        alt="Bifcd Logo"
                      />
                      <span className="text-white">Bifcd</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
