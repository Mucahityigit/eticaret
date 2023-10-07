import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  console.log(categories);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div className="w-2/6 max-h-screen bg-gray-100 p-4">
      <div className="border-b pb-1 px-2 text-xl font-bold">KATEGORİ</div>
      {categories?.map((category, i) => (
        <div
          onClick={() => setCategory(category)}
          className="text-lg mt-1 cursor-pointer hover:bg-gray-200 p-2"
          key={i}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;
