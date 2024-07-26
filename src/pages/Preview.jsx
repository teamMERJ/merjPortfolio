import { motion } from "framer-motion"
import { FacebookIcon, LinkedinIcon, MailIcon, Phone, PhoneCallIcon, PhoneIcon, TwitterIcon } from "lucide-react"
import { eltonImg, heroBg, previewHeroImg } from "../assets"
import aboutImg from "../assets/images/about.jpg"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { apiGetUserDetails } from "../services/preview"

const Preview = () => {
  const [user, setUser] = useState(null); //initialize state to null
  const [loading, setLoading] = useState(true); //Initialize loading state to true


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); //Start loading
        const response = await apiGetUserDetails("MikeB");        //Replace with your API endpoint
        console.log('response', response.data.user)
        setUser(response.data.user)
      } catch (error) {
        console.error('Error fetching data', error);

      } finally {
        setLoading(false); //End loading
      }
    };

    fetchData();
  }, []); //Empty dependency array to run only once on mount

  if (loading) {
    return <div>Loading...</div>;
  }

  // console.log('responsefgtf', user.experience[0].companyName)
  // user.experience.map((key, item) => {
  //   console.log('iuuu', key)
  // })

  return (

    <div>
      <div className="bg-black flex flex-col md:flex-row text-white justify-between items-center px-10 py-6 w-full">
        <div className="mb-4 md:mb-0">
          <h4 className="text-yellow font-bold">merj<span className="text-white">FOLIO</span></h4>
        </div>
        <div className="font-semibold text-lg flex flex-col md:flex-row gap-4 md:gap-8 items-center ">
          <span className="text-yellow">HOME</span>
          <span className="hover:text-yellow">ABOUT</span>
          <span className="hover:text-yellow">RESUME</span>
          <span className="hover:text-yellow">PORTFOLIO</span>
          <span className="hover:text-yellow">CONTACT</span>
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <Phone className="text-white" />
          <span className="text-yellow pl-2">+233 24 208 4838</span>
        </div>
      </div>

      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full px-4 md:px-28 pt-16 md:pt-0">
          <motion.div className="text-white text-center md:text-left px-8 md:px-10 lg:px-20 md:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <h1 className="text-yellow text-3xl lg:text-4xl mb-2">Hello, I'm</h1>
            <h2 className="text-4xl lg:text-6xl xl:text-8xl font-bold mb-4">{user.firstName} <br /> {user.lastName}</h2>
            <h3 className="text-2xl lg:text-3xl mb-4">{user.userProfile.bio}</h3>
            <motion.button className="bg-yellow text-black font-semibold px-10 py-3 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >Hire Me</motion.button>
          </motion.div>
          <div className="md:w-1/2 p-8">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              src={previewHeroImg} alt="hero image" className="w-full max-w-full max-h-[500px] object-contain" />
          </div>
        </div>
      </div>

      <div className="bg-[#0A101E] text-white py-16">
        <motion.h4
          className="text-center text-3xl text-yellow font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          PROFILE
        </motion.h4>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-8 md:px-16 lg:px-24">
          <motion.div
            className="md:w-1/2 p-8"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={aboutImg} alt="profile img" className="w-full max-w-full max-h-[400px] object-contain" />
          </motion.div>
          <motion.div
            className="md:w-1/2 p-8 text-center md:text-left"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <h2 className="text-3xl mb-2 font-semibold">{user.firstName}{user.lastName}</h2>
            <h3 className="text-yellow text-2xl font-semibold mb-4"></h3>
            <p className="text-lg mb-4 font-light">
              {user.userProfile.about}
            </p>
            <ul className="mb-4 text-lg leading-8 font-light">
              <li>Phone: <span>{user.userProfile.contact}</span></li>
              <li>Email: chris@gmail.com</li>
              <li>Location: <span>{user.userProfile.location}</span></li>
              <li>Language: English</li>
              <li>Sex: <span>{user.userProfile.sex}</span></li>
            </ul>
            <div className="flex items-center gap-2 pb-4">
              <span className="text-lg pr-4">Socials:</span>
              <motion.span className="border rounded-full p-2 hover:bg-yellow" whileHover={{ scale: 1.1 }}><Link><LinkedinIcon /> </Link></motion.span>
              <motion.span className="border rounded-full p-2 hover:bg-yellow" whileHover={{ scale: 1.1 }}><Link><TwitterIcon />  </Link></motion.span>
              <motion.span className="border rounded-full p-2 hover:bg-yellow" whileHover={{ scale: 1.1 }}><Link><FacebookIcon /> </Link></motion.span>
            </div>
            <motion.button className="bg-yellow text-black font-semibold px-6 py-3 rounded-full" whileHover={{ scale: 1.1 }}>Download CV</motion.button>
          </motion.div>
        </div>
      </div>

      {/* SKILLS SECTION */}
      <div className="bg-[#0A101E] text-white py-16">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <motion.h2 className="text-yellow text-center text-3xl font-bold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >SKILLS</motion.h2>
          <motion.div className="flex flex-col md:flex-row justify-between"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-20"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
            >
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
          </motion.div>
        </div>
      </div>

      <div className="bg-[#0A101E] text-white py-16">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-yellow text-center text-3xl font-bold mb-8">RESUME</h2>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-20">
              <h3 className="text-2xl mb-4">Education</h3>
              <ul className="text-lg leading-10 font-light">

                {user.education?.map((item, key ) => (
                  <li className="mb-2" key={key}>
                    <h1 className="text-yellow text-xl font-bold">{item.schoolName}</h1>
                    <h4>{item.qualification}</h4>
                    <p>{item.startDate} to {item.endDate}</p>
                    <p>{item.schoolName}</p>
                    <p>{item.program}</p>
                    <p>{}</p>
                  </li>
                ))}

              </ul>
            </div>

                {/* experience section */}
            <div className="md:w-1/2">
              <h3 className="text-2xl mb-4">Experience</h3>
              <ul className="text-lg leading-10 font-light">
                {user.experiences?.map((item, key) => (
                <li className="mb-8" key={key}>
                <h4 className="text-yellow text-xl font-bold">{item.companyName}</h4>
                <p>{item.location}</p>
                <p>Mest Africa</p>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
              </li>
                ))}
                
                
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <motion.div className="bg-[#0A101E] text-white py-16"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 0.2 },
          ease: "easeIn",
          duration: 1,
        }}
      >
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-center text-3xl underline-offset-4 mb-8 text-yellow font-bold">ACHIEVEMENTS</h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src="path/to/award1.jpg"
                alt="Award 1"
                className="w-full md:w-48 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
              />
              <div className="flex flex-col">
                <h3 className="text-yellow text-2xl mb-2">Award Title</h3>
                <p className="text-gray-400 mb-4">Description of the achievement or award.</p>
                <div className="text-gray-500 text-sm mb-2">Date of Award</div>
                <div className="text-gray-500 text-sm">Name of Institution</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src="path/to/award2.jpg"
                alt="Award 2"
                className="w-full md:w-48 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
              />
              <div className="flex flex-col">
                <h3 className="text-yellow text-2xl mb-2">Award Title</h3>
                <p className="text-gray-400 mb-4">Description of the achievement or award.</p>
                <div className="text-gray-500 text-sm mb-2">Date of Award</div>
                <div className="text-gray-500 text-sm">Name of Institution</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Projects */}
      <motion.div className="bg-[#0A101E] text-white py-16"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 0.2 },
          ease: "easeIn",
          duration: 1,
        }}
      >
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-yellow text-center text-3xl font-bold mb-8">PROJECTS</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-800 shadow-md rounded-lg p-4">

              <img src="" alt="Wedding img" className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-yellow">Event Listing Website</h2>
                <p className="text-gray-400">Client Project</p>
              </div>
            </div>
            <div className="bg-gray-800 shadow-md rounded-lg p-4">
              <img src="/path-to-image2.jpg" alt="2D Vinyl Design" className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-yellow">Hotel Website</h2>
                <p className="text-gray-400">Client Project</p>
              </div>
            </div>
            <div className="bg-gray-800 shadow-md rounded-lg p-4">
              <img src="/path-to-image3.jpg" alt="Creative Poster Design" className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-yellow">Travel Website</h2>
                <p className="text-gray-400">Client Project</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact */}
      <div className="bg-[#0A101E] text-white py-16">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-yellow text-center text-3xl font-bold mb-8">CONTACT</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-4">
              <h3 className="text-2xl font-bold mb-4">Just say Hello</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-2 bg-[#101624] border border-gray-600 rounded text-yellow focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-2 bg-[#101624] border border-gray-600 rounded text-yellow focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Your Subject"
                    className="w-full p-2 bg-[#101624] border border-gray-600 rounded text-yellow focus:outline-none"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    className="w-full p-2 bg-[#101624] border border-gray-600 rounded text-yellow focus:outline-none h-32"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-yellow text-black px-6 py-2 rounded-full"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="md:w-1/2 p-4 mt-8 md:mt-0 md:pl-12">
              <h3 className="text-2xl font-bold mb-4">Contact Info</h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="mr-4 text-yellow"><MailIcon /></span>
                  <div>
                    <p>Email</p>
                    <p>eltonasamoah007@gmail.com</p>
                    <p>info@merjfolio.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="mr-4 text-yellow"><PhoneIcon /></span>
                  <div>
                    <p>Phone</p>
                    <p>+233 24-208-4838</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <p>Visit my social profiles and get connected</p>
                <div className="flex space-x-4 mt-4">
                  <Link className="text-yellow">LinkedIn</Link>
                  <Link className="text-yellow">Twiter</Link>
                  <Link className="text-yellow">Facebook</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0a101efb] py-10">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex items-center justify-center mb-4 md:mb-0">
            <p className="text-gray-400">© 2024 MERJ. All rights reserved.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Preview