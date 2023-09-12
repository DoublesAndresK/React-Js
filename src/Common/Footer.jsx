import {} from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => {
  return (
    <>
      <footer className="max-container">
        <div className="flex justify-between items-start max-lg:flex-col gap-20 flex-wrap">
          <div className="flex flex-col items-start">
            <a href="/">
              <img src={footerLogo} alt="nike" width={150} height={46} />
            </a>
            <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
              Get shoes ready for the new term at your nearest Nike store. Find
              your perfect size in store. Get rewards.
            </p>
            <div className="flex items-center gap-5 mt-8">
              {socialMedia.map((icon, index) => (
                <div
                  className="bg-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-green-500"
                  key={index}
                >
                  <img
                    src={icon.src}
                    alt="socialMedia"
                    width={24}
                    height={24}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-1 justify-evenly lg:gap-10 gap-20 flex-wrap -mt-5">
            {footerLinks.map((section,index) => (
              <div key={index}>
                <h4 className="text-white text-3xl my-2 font-bold font-palanquin">{section.title}</h4>
                <ul>
                  {section.links.map((item,index) => (
                    <li key={index} className="leading-8">
                      <a href={item.link} className="text-white text-xl font-montserrat hover:text-red-400">{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
