import { FaLinkedin, FaTelegram, FaEnvelope, FaGithub } from "react-icons/fa";

export const ContactsList = () => {
  return (
    <ul className="flex gap-4 text-3xl">
      <li>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/yevgen-kotyk-124012179/"
        >
          <FaLinkedin className="hover:text-gray-500 transition-colors duration-300" />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://t.me/EternalLoveAndFire">
          <FaTelegram className="hover:text-gray-500 transition-colors duration-300" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=evhenisssss@gmail.com"
        >
          <FaEnvelope className="hover:text-gray-500 transition-colors duration-300" />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://github.com/Eugene-CG">
          <FaGithub className="hover:text-gray-500 transition-colors duration-300" />
        </a>
      </li>
    </ul>
  );
};
