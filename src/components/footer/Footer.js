import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import GP from "../../assets/img/google-play.png";
import AS from "../../assets/img/app-store.png";

const Footer = () => {
  return (
    <footer className="bg-[#222222] px-4">
      <div className="max-w-[75rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 pt-[48px] pb-[32px]">
          <div className="flex flex-col items-start">
            <img
              className="w-[196px] h-[98px] mb-[32px]"
              src="https://www.freelogovectors.net/svg07/tasty-logo.svg"
              alt="logo"
            />
            <p className="text-white font-bold text-lg mb-[8px]">
              Follow Tasty
            </p>
            <ul className="flex">
              <li>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="w-[52px] h-[52px] mr-[16px] p-[2px] text-[#FF8997]"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-[52px] h-[52px] mr-[16px] p-[2px] text-[#FF8997]"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="w-[52px] h-[52px] mr-[16px] p-[2px] text-[#FF8997]"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="w-[52px] h-[52px] mr-[16px] p-[2px] text-[#FF8997]"
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <p className="font-bold text-white text-lg mt-[8px] md:hidden">
              Get tasty app
            </p>

            <div className="flex mt-[8px] mb-[30px] md:mb-[48px] md:mt-0">
              <img src={AS} alt="app store" className="h-[44px] pr-2" />
              <img src={GP} alt="google play" className="h-[44px] pl-2" />
            </div>

            <ul className="flex flex-col items-start md:items-end text-[#FF8997] font-bold underline underline-offset-2 leading-6">
              <li>
                <a href="/">Send Feedback</a>
              </li>
              <li>
                <a href="/">Recipes by Ingredient</a>
              </li>
              <li>
                <a href="/">Community Recipes</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">User Agreement</a>
              </li>
              <li>
                <a href="/">Accessibility Statement</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
