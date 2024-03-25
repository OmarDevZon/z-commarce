import React from "react";
import { Link } from "react-router-dom";

type TBreadCrumb = {
  title: string;
  slug?: string;
};

export const BreadCrumb: React.FC<TBreadCrumb> = ({ title, slug }) => {
  // const { title } = props;
  return (
    <div className="breadcrumb mb-0 py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0">
              <Link to="/" className="text-dark">
                Home &nbsp;
              </Link>
              <Link to={`../${slug}`} className="text-dark">
                / {title}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
