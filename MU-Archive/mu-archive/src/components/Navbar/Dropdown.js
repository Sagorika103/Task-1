import React, { useState } from "react";
import { archiveDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";


function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "archive-submenu clicked" : "archive-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {archiveDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;