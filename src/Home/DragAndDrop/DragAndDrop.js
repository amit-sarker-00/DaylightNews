import React, { useState } from "react";

const ImageUpload = () => {
  const [files, setFiles] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(Array.from(event.dataTransfer.files));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleFileInput = (event) => {
    setFiles(Array.from(event.target.files));
  };

  const handleRemove = (index) => {
    setFiles(files.filter((file, i) => i !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Files:", files);
    // You can send the files to the server or do further processing here.
  };

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <form onSubmit={handleSubmit}>
        <div
          className="flex flex-col items-center justify-center p-10 bg-gray-200 border border-dashed rounded-lg"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <p className="text-center text-gray-600 font-medium">
            Drag and drop your images here
          </p>
          <div className="flex flex-wrap">
            {files.map((file, index) => (
              <div key={file.name} className="relative">
                <img
                  className="w-64 h-64 m-4 object-cover rounded-lg"
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
        <div className="mt-5">
          <label className="btn bg-black text-white font-medium py-2 px-4 rounded-lg mr-5">
            Upload Files
            <input
              type="file"
              className="hidden"
              onChange={handleFileInput}
              multiple
            />
          </label>
          <button
            type="submit"
            className="btn bg-black text-white font-medium py-2 px-4 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageUpload;
