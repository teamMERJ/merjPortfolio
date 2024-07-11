import { Phone, PhoneCallIcon } from "lucide-react"
import { eltonImg, heroBg, heroImg } from "../assets"
import aboutImg from "../assets/images/about.jpg"

const Preview = () => {
  return (

    <div>
      <div className="bg-black flex text-white justify-center items-center px-10 py-6 w-full gap-10">
      <div >
        <h4 className="mr-40">MERJ</h4>
      </div>
      <div className="flex gap-8 ">
        <span className="text-yellow">HOME</span>
        <span>ABOUT</span>
        <span>RESUME</span>
        <span>PORTFOLIO</span>
        <span>CONTACT</span>
        <span>|</span>
      </div>
      <div className="flex">
        <span className="text-white"><Phone /></span>
        <span className="text-yellow pl-4">+233 24 208 4838</span>
        
      </div>

      </div>
      
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full">
        <div className="text-white text-center md:text-left px-8 md:px-20 md:w-1/2">
          <h1 className="text-yellow text-3xl mb-2">Hello, I'm</h1>
          <h2 className="text-5xl md:text-8xl font-bold mb-4">Elton Asamoah</h2>
          <h3 className="text-2xl md:text-3xl mb-4">Web Developer</h3>
          <button className="bg-yellow text-black px-10 py-2 rounded-full">Hire Me</button>
        </div>
        <div className="md:w-1/2 p-8">
          <img src={heroImg} alt="hero image" className="w-full h-auto object-contain" />
        </div>
      </div>
    </div>

    <div className="text-yellow bg-[#0A101E] pt-20">
      <h4 className="text-center text-3xl underline-offset-4">ABOUT ME</h4>
    </div>

    <div className="bg-[#0A101E] text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-8 md:px-16 lg:px-24">
        <div className="md:w-1/2 p-8">
          <img src={aboutImg} alt="profile img" className="w-full h-auto object-contain" />
        </div>
        <div className="md:w-1/2 p-8 text-center md:text-left">
          <h2 className="text-2xl mb-2">Hi There! I'm Elton Asamoah</h2>
          <h3 className="text-yellow text-4xl font-bold mb-4">Web Developer</h3>
          <p className="text-lg mb-4 font-light">
            I am a Web Developer with a strong focus on front end development. My designs seeks to attract, inspire, create desires and motivate people to respond to messages, with a view to making a favorable impact.
          </p>
          <ul className="mb-4 text-xl leading-8 font-light">
            <li>Birthday: March 18, 1600</li>
            <li>Phone: +233 242 084 838</li>
            <li>Email: eltonkel@gmail.com</li>
            <li>From: Ghana</li>
            <li>Language: English</li>
            <li>Freelance: Available</li>
          </ul>
          <button className="bg-yellow text-black px-6 py-3 rounded-full">Download CV</button>
        </div>
      </div>
    </div>

    <div className="bg-[#0A101E] text-white py-16">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-yellow text-center text-3xl font-bold mb-8">Skills</h2>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-20">
            <h3 className="text-3xl mb-4">All the skills that I have in that field of work are mentioned.</h3>
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="md:w-1/2">
            <ul>
              {[
                { name: 'React', level: '95%' },
                { name: 'HTML', level: '75%' },
                { name: 'CSS', level: '90%' },
                { name: 'Tailwind CSS', level: '85%' },
                { name: 'GIT HUB', level: '80%' },
                { name: 'GIT', level: '90%' }
              ].map(skill => (
                <li key={skill.name} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-700 h-1">
                    <div className="bg-yellow h-1" style={{ width: skill.level }}></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-[#0A101E] text-white py-16">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-yellow text-center text-3xl font-bold mb-8">Resume</h2>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-20">
            <h3 className="text-2xl mb-4">Education</h3>
            <ul className="text-lg leading-10 font-light">
              <li className="mb-8">
                <h4 className="text-yellow text-xl font-bold">Master of Computer Science</h4>
                <p>2015 - 2016</p>
                <p>University of XYZ</p>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
              </li>
              <li className="mb-8">
                <h4 className="text-yellow text-xl font-bold">Bachelor of Arts- Economics</h4>
                <p>2010 - 2014</p>
                <p>University of ABC</p>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
              </li>
              <li className="mb-8">
                <h4 className="text-yellow text-xl font-bold">Diploma in Computer Science</h4>
                <p>2024 - 2024</p>
                <p>MEST</p>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl mb-4">Experience</h3>
            <ul className="text-lg leading-10 font-light">
              <li className="mb-8">
                <h4 className="text-yellow text-xl font-bold">Senior Web Developer</h4>
                <p>Jan 2020 - Present</p>
                <p>Beronaum, Hills and Howe</p>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
              </li>
              <li className="mb-8">
                <h4 className="text-yellow text-xl font-bold">Product Designer</h4>
                <p>Jan 2016 - Dec 2019</p>
                <p>Langosh, Sipes and Raynor</p>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
              </li>
              <li className="mb-8">
                <h4 className="text-yellow text-xl font-bold">UI/UX Designer</h4>
                <p>Jan 2014 - Dec 2015</p>
                <p>Strosin, Maggio and Homenick</p>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-">
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
      <h2>PORTFOLIO</h2>
    </div>
    </div>
  </div>
  )
}

export default Preview