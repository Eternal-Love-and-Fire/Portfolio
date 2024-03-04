import { LinkCustom } from "../../../shared";
export const Nav = ({ sx }: { sx?: string }) => {
  return (
    <nav className={` ${sx}`}>
      <LinkCustom text="Works" to="works" />
      <LinkCustom text="About" to="about" />
      <LinkCustom text="Resume" to="resume" />
    </nav>
  );
};
