import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import PrimaryButton from "../../../Components/Button/PrimaryButton";
import SmallSpinner from "../../../Components/Spinner/SmallSpinner";

const AddNewsForm = ({
  handleSubmit,
  loading,
  selectedImage,
  imageChange,
  uniqueCategory,
}) => {
  // unique category in option
  const uniqueCategoryOption = uniqueCategory.map((category, uxi) => (
    <option key={uxi} value={category}>
      {category}{" "}
    </option>
  ));
  return (
    <>
      <div className=" mt-6">
        <div className="w-[600px] lg:w-[1000px]  p-8 space-y-3 text-gray-800 rounded-xl bg-gray-50">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-600">
                News Title
              </label>

              <input
                className="w-full px-4 py-5 border rounded-md border-gray-200 dark:border-gray-700   focus:outline-green-500  text-gray-900"
                name="title"
                id="title"
                type="text"
                placeholder="Enter Your News Title "
                required
              />
            </div>

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm w-full">
                <label htmlFor="category" className="block text-gray-600">
                  Category
                </label>
                <select
                  name="option"
                  className="select select-bordered  w-full h-16 bg-white "
                >
                  {uniqueCategoryOption}
                </select>
              </div>
            </div>
            <div>
              <div className="space-y-1 text-sm">
                <label htmlFor="description" className="block text-gray-600">
                  Description
                </label>
                <textarea
                  className="w-full px-4 py-5 border rounded-md border-gray-200 dark:border-gray-700   focus:outline-green-500  text-gray-900"
                  name="description"
                  id="description"
                  type="text"
                  placeholder="Description"
                  required
                />
              </div>
            </div>

            <div className="mt-3">
              {selectedImage ? (
                <div className=" w-full">
                  {/* <p className="text-center ">
                      <label
                        className="btn btn-sm bg-[#3BB77E] text-white border-none "
                        htmlFor="uploadImage"
                      >
                        Upload new
                      </label>
                    </p> */}

                  <div className="flex justify-center ">
                    <PhotoProvider>
                      <PhotoView src={URL.createObjectURL(selectedImage)}>
                        <label htmlFor="uploadImage">
                          <img
                            className="w-full h-64 object-cover rounded-md"
                            src={URL.createObjectURL(selectedImage)}
                            alt=""
                          />
                        </label>
                      </PhotoView>
                    </PhotoProvider>
                  </div>
                </div>
              ) : (
                <label
                  htmlFor="uploadImage"
                  className="flex flex-col w-full border-4 border-dashed hover:bg-gray-100 hover:border-gray-200 dark:border-gray-700  "
                >
                  <div className="flex flex-col py-2 items-center justify-center h-60">
                    <ArrowUpTrayIcon className="w-8 h-8" />
                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                      Select a photo
                    </p>
                  </div>
                </label>
              )}
              <input
                required
                id="uploadImage"
                onChange={imageChange}
                accept="image/*"
                hidden
                type="file"
                className="opacity-0"
              />
            </div>

            <div className="space-y-2">
              <div>
                <PrimaryButton
                  type="submit"
                  classes="w-full px-8 py-5 font-semibold rounded-lg bg-[#3BB77E] text-white"
                >
                  {loading ? <SmallSpinner /> : "Save & Continue"}
                </PrimaryButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewsForm;
