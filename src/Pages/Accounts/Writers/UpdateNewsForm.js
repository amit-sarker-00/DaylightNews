import React from "react";
import { toast } from "react-hot-toast";
import { updateNews } from "../../../api/services";
import PrimaryButton from "../../../Components/Button/PrimaryButton";

const UpdateNewsForm = ({ news, uniqueCategory }) => {
  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const from = event.target;
    const title = from.title.value;
    const category = from.option.value;
    const description = from.description.value;
    const image = from.image.files[0];
    if (!image) {
      const updateNewsData = {
        id: news._id,
        title,
        category,
        description,
      };
      updateNews(updateNewsData).then((data) => {
        console.log(data);
        toast.success("news Updated Successfully");
      });
      return;
    }
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const updateNewsData = {
          id: news._id,
          title,
          category,
          description,
          image: imageData.data.display_url,
        };
        updateNews(updateNewsData).then((data) => {
          console.log(data);
          toast.success("news Updated Successfully");
        });
      });
  };
  const uniqueCategoryOption = uniqueCategory.map((category, uxi) => (
    <option key={uxi} value={category}>
      {category}
    </option>
  ));
  return (
    <div>
      <input type="checkbox" id="update-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative text-black bg-white  w-10/12 max-w-5xl">
          <label
            htmlFor="update-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form
            onSubmit={handleUpdateProduct}
            className="space-y-1 ng-untouched ng-pristine ng-valid "
          >
            <div className="text-center">
              <h1 className="text-xl"> Update Your News!</h1>
            </div>

            <div className="space-y-3 text-sm ">
              <label className="block text-sm">News Title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter Your news Name"
                className="w-full px-4 py-3 rounded-md bg-gray-100  text-gray-900 "
                defaultValue={news?.title}
              />
            </div>

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
            <div className="space-y-3 text-sm">
              <label className="block text-sm">Description</label>

              <textarea
                type="textarea"
                name="description"
                placeholder="Enter Your Shop Description"
                className="w-full h-full px-4 py-3 rounded-md dark:border-gray-700   dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
                defaultValue={news?.description}
              />
            </div>

            <div className="py-2 w-full">
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="file-input  file-input-success w-full "
                defaultValue={news?.picture}
              />
            </div>
            <div>
              <PrimaryButton
                type="submit"
                classes="w-full px-8 py-5 font-semibold rounded-lg text-white bg-[#3BB77E] "
              >
                Submit & Update
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateNewsForm;
