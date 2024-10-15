import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Links = ({ page, selectedPage, setSelectedPage }) => {
  const toLowerCase = page.toLocaleLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === toLowerCase ? "text-red-500" : ""} lg:hover:text-red-400 transition duration-300`}
      href={`#${toLowerCase}`}
      onClick={() => setSelectedPage(toLowerCase)}
    >
      {page}
    </AnchorLink>
  );
};

export default Links;
