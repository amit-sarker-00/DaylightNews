import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import { addNews } from "../../../api/services";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import AddNewsForm from "./AddNewsForm";

const AddNews = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedImage, setSelectedImage] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const option = form.option.value;
    const description = form.description.value;
    setLoading(true);
    const formData = new FormData();
    formData.append("image", selectedImage);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const newsData = {
          title,
          category: option,
          picture: imageData.data.display_url,
          email: user?.email,
          description,
          author: {
            name: user?.displayName,
            author_img: user?.photoURL,
            email: user?.email,
            published_date: new Date().toLocaleString(),
          },
        };
        console.log(newsData);
        addNews(newsData).then((data) => {
          // console.log(data);
          setLoading(false);
          toast.success("Added Successfuly !");
          navigate("updateNews");
        });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // categories
  useEffect(() => {
    fetch("${process.env.REACT_APP_API_URL}news")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  // all category in news
  const allCategory = categories.map((news) => news.category);
  // unique category
  const uniqueCategory = [...new Set(allCategory)];
  return (
    <div className="lg:px-20 md:px-10 px-10">
      <AddNewsForm
        handleSubmit={handleSubmit}
        loading={loading}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        imageChange={imageChange}
        uniqueCategory={uniqueCategory}
      />
    </div>
  );
};

export default AddNews;
