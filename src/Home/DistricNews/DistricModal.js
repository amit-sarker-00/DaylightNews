import React from "react";
const DistricModal = ({
  uniqueDistrict,
  handleUpdateDistrict,
  setCity,
  city,
}) => {
  return (
    <div>
      <input type="checkbox" id="update-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative text-black bg-white  w-10/12 max-w-5xl">
          <form
            onSubmit={handleUpdateDistrict}
            className="space-y-1 ng-untouched ng-pristine ng-valid "
          >
            <div className="text-center">
              <h1 className="text-xl">CHANGE CITY</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-2">
              {uniqueDistrict?.map((district, uxi) => (
                <div className="flex" key={uxi} district={district}>
                  <input
                    type="radio"
                    name="radio-5"
                    id={district}
                    className="radio radio-success mr-2"
                    required
                  />
                  <label htmlFor={district}>{district}</label>
                </div>
              ))}
            </div>
            {city?.district && (
              <div className="text-center py-5">
                Click to make {city?.district} default city.
              </div>
            )}
            <div className="text-center ">
              <button type="submit" className="btn btn-success text-white mx-2">
                CONFIRM
              </button>

              <label
                htmlFor="update-modal"
                className="btn btn-error text-white mx-2"
              >
                CANCEL
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DistricModal;
