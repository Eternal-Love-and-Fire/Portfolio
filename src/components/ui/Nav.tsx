import { CustomLink } from "./CustomLink";

export const Nav = ({ sx }: { sx?: string }) => {
  return (
    <nav className={` ${sx}`}>
      <CustomLink text="Works" to="works" />
      <CustomLink text="About" to="about" />
      <CustomLink text="Resume" to="resume" />
    </nav>
  );
};
