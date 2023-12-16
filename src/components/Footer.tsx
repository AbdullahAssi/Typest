import styled from "styled-components";
import {
  BsGithub,
  BsInstagram,
  BsWhatsapp,
  BsCodeSlash,
  BsLinkedin,
} from "react-icons/bs";

import { useThemeContext } from "../hooks/useTheme";

import Tooltip from "./Tooltip";
import Social from "./Social";

const StyledLink = styled.a`
  &:hover {
    color: ${({ theme }) => theme.text.title};
  }
`;

const Footer = () => {
  const { systemTheme } = useThemeContext();
  return (
    <footer className="mb-3 mt-auto">
      <div className=" flex items-center justify-between ">
        <div className="flex items-center justify-center ">
          <Tooltip tooltipId="Github">
            <Social
              url="http://github.com/AbdullahAssi"
              tooltipContent="Github"
              tooltipId="Github"
            >
              <BsGithub className="text-2xl" />
            </Social>
          </Tooltip>
          <Tooltip tooltipId="Linkedin">
            <Social
              url="https://www.linkedin.com/in/muhammad-abdullah-796597246/"
              tooltipContent="Linkedin"
              tooltipId="Linkedin"
            >
              <BsLinkedin className="text-2xl" />
            </Social>
          </Tooltip>

          <Tooltip tooltipId="Instagram">
            <Social
              url="https://www.instagram.com/abdullahassi225/"
              tooltipContent="Instagram"
              tooltipId="Instagram"
            >
              <BsInstagram className="text-2xl " />
            </Social>
          </Tooltip>
        </div>

        <div>Copyright Ⓒ 2023 Typest. All Rights Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
