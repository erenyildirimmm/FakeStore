import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ crumbs }) => {
  return (
    <nav className="breadcrumb bg-zinc-100 text-zinc-500 font-semibold py-4 md:px-8 px-4 mb-20 sm:text-sm text-xs rounded-xl">
      <ul className="flex items-center">
        {crumbs.map((crumb, index) => (
          <div className="flex" key={index}>
            <li>
              {crumb.path ? (
                <Link to={crumb.path}>{crumb.label}</Link>
              ) : (
                <span>{crumb.label}</span>
              )}
            </li>
            {index < (crumbs.length -1) && <span className="mx-2 text-zinc-950 font-semibold"> / </span>}
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default BreadCrumb;
