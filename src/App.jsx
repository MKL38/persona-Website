import "./App.css";
import Navbar from "./componentRender/navBar";
import CarouselCpAxtra from "./componentRender/CarouselCpAxtra";
import { LinkedInIcon,EmailIcon,PhoneIcon } from "./componentRender/icon/all-icon";

function App() {
  return (
    <>
      <div className="body-container md:flex md:flex-row  lg:flex lg:flex-row ">
       <Navbar/>

        <div id="introduction-navi" ></div>
        {/* Hero section */}
        <div className="hero-container-mobile mt-[80px] flex flex-row  space-x-10">
          {/* Main Nickname */}
          <div className="main-Nickname text-9xl ml-4 drop-shadow-2xl lg:w-[200px]">
            <h1>D</h1>
            <h1>O</h1>
            <h1>N</h1>
          </div>
          {/* Hero img */}
          <div className="hero-img sm:w-[250px] xl:w-[400px] mt-7 drop-shadow-2xl">
            <img
              className="hero-img-img object-cover rounded-sm"
              src="src\img\6A6E5A14-FC0C-4A67-B039-D756CE81E248.jpg"
              alt=""
            />
          </div>
        </div>
        {/* introduction content */}
        <div className="intro-container mt-10 md:w-[400px] lg:w-full md:mt-[100px] lg:space-y-6 xl:mr-10 ">
          <div className="intro-text-container text-start ml-6 space-y-4">
            <h1 className="text-[#cb0000] font-bold">Who am I ?</h1>
            <h1 className="mb-10">Mr.Teerapat Futhep</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              amet molestias iste maxime doloremque dolorum suscipit minus quae
              vel excepturi similique odio! Voluptate sunt temporibus iusto.
              Unde sint doloribus iure.
            </span>
            <div className="intro-text-container-education mt-10 space-y-3">
              <h1 className="text-[#cb0000] font-bold">Education</h1>
              <p>Techup</p>
              <p>King Mongkut's Institute of Technology Ladkrabang</p>
              <div className=" flex flex-row " ><LinkedInIcon/> <EmailIcon/> <PhoneIcon/> </div>
            </div>
          </div>
        </div>
      </div>

      <div id="skills-navi"></div>
      {/* Skills section*/}
      <div className="grid lg:grid-cols-2  xl:mt-20  lg:mt-20 md:mt-24 md:grid md:grid-cols-1 ">
        {/* Business */}
        <div className="businessSkills-container  xl:w-100%">
          <div className="skills-header bg-[#cb0000] xl:ml-32 xl:mr-4 lg:ml-32 lg:mr-4 py-3">
            <h1 className="text-end mr-4 text-3xl font-bold text-white ">
              Business
            </h1>
          </div>
          {/* business skill content */}
          <div className="skill-box text-end mt-10 md:mr-10 lg:mr-4 ml-4 mr-2">
            <ul className="business-skills space-y-4">
              <li>Competitive market analysis</li>
              <li>Strong analytical thinking</li>
              <li>Project management (retail and digital retail)</li>
              <li>Business development for retail and wholesale industries</li>
              <li>Strategy planing and development</li>
              <li>Team leadership and assessment</li>
            </ul>
          </div>
        </div>

        {/* Technical */}
        <div className="businessSkills-container  xl:w-100% md:mt-10 lg:mt-0 ">
          <div className="skills-header bg-[#cb0000] xl:mr-32 xl:ml-4 lg:mr-32 lg:ml-4 py-3   ">
            <h1 className="xl:text-start lg:text-start text-end ml-4 text-3xl font-bold text-white md:text-end mr-4 ">
              Technical
            </h1>
          </div>
          {/* technical skill content */}
          <div className="skill-box text-end mt-10 md:mr-10 mr-4 ml-4 md:text-end xl:text-start lg:text-start">
            <ul className="front-end-skills">
              <li className="font-bold">Frontend</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Tailwind CSS</li>
              <li>React</li>
            </ul>

            <ul className="back-end-skills mt-10">
              <li className="font-bold">Backend</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>PostgresSQL</li>
              <li>Next Auth</li>
            </ul>

            <ul className="other-skills mt-10">
              <li className="font-bold">Other</li>
              <li>Git / Github</li>
            
            </ul>
          </div>
        </div>
      </div>
      {/* Experience section */}
      <div id="experience-navi" ></div>
      <div className="experience-container xl:mt-20  lg:mt-20 md:mt-24 ">
        <div className="CarouselCpAxtra"><CarouselCpAxtra/></div>
        <div className="bgred bg-red-700 w-10 h-10"></div>

      </div>
      
    </>
  );
}

export default App;
