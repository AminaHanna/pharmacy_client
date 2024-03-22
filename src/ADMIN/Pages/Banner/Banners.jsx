import React from "react";
import { Link, useParams } from "react-router-dom";

function Banners() {
  const {id} = useParams();
  return (
    <>
      <div className="flex flex-wrap justify-center gap-5 sm:gap-10 mt-5 sm:mt-16">
        <div className="bg-slate-200 p-8 rounded-md sm:p-16">
          <Link to={'banner1-add'}>
            <p className="sm:text-lg text-xs flex items-center gap-2">
              Banner 1 <i class="fa-sharp fa-solid fa-plus"></i>
            </p>
          </Link>
        </div>

        <div className="bg-red-100 p-8 rounded-md sm:p-16">
          <Link to={'banner2-add'}>
            <p className="sm:text-lg text-xs flex items-center gap-2">
              Banner 2 <i class="fa-sharp fa-solid fa-plus"></i>
            </p>
          </Link>
        </div>

        <div className="bg-violet-100 p-8 rounded-md sm:p-16">
          <Link to={'banner3-add'}>
            <p className="sm:text-lg text-xs flex items-center gap-2">
              Banner 3 <i class="fa-sharp fa-solid fa-plus"></i>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Banners;
