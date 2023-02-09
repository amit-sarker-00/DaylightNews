import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const AddSocialPost = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  // const [selectedImage, setSelectedImage] = useState();

  const handleRemove = (index) => {
    setFiles(files.filter((file, i) => i !== index));
  };
  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(Array.from(event.dataTransfer.files));
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const image = files[0];
    console.log(image);
    const imageHostKey = process.env.REACT_APP_Imgbb_API_KEY;
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        console.log(imageData);
        if (imageData.success) {
          const socialNews = {
            title: event.target.title.value,
            image: imageData.data.display_url,
            description: event.target.description.value,
            email: user?.email,
            name: user?.displayName,
          };
          console.log(socialNews);
          fetch("http://localhost:8000/addSocialNews", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(socialNews),
          })
            .then((res) => res.json())
            .then((data) => {
              toast.success("Post Added Successfully");
              navigate("/socialMedia");
            });
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-y-6  w-full md:w-96 my-8  mx-auto "
      >
        <div className="space-y-4">
          <div>
            <input
              type="text"
              name="title"
              id="title"
              required
              placeholder=" Heading"
              className="w-full border py-3 rounded-sm  text-gray-700"
              data-temp-mail-org="0"
            />
          </div>
          <div
            className="flex flex-col items-center justify-center p-10 bg-gray-200 border border-dashed rounded-sm"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            name="image"
          >
            <p className="text-center text-gray-600 font-medium">
              Drag and drop your images here
            </p>
            <div className="flex flex-wrap">
              {files.map((file, index) => (
                <div key={file.name} className="relative">
                  {console.log(file)}
                  <img
                    name="image"
                    accept="image/*"
                    required
                    className="w-64 h-32 m-4 object-cover rounded-lg"
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                  />
                  <button
                    className="absolute top-0 right-0 bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-full"
                    onClick={() => handleRemove(index)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="">
            <div className="">
              <textarea
                name="description"
                placeholder="Description"
                className="h-24 border w-full"
              />
            </div>
          </div>
          <div>
            <button className="btn">Create Post</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddSocialPost;
