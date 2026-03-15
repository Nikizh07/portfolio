import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <div className="w-full">
      <Link to="/">
        <div className="mmenu flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 lg:hidden">
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
