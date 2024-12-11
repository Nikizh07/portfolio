import React from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <div>
      <Link to="/">
        <div className="mmenu container flex lg:hidden bg-[#797979] p-2 text-white justify-center gap-2">
          <div className="my-[0.7px]">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          Menu
        </div>
      </Link>
    </div>
  );
};

export default MobileMenu;
