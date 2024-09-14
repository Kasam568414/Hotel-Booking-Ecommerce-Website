import React from "react";
import img1 from "../../src/assets/Ellipse 12.png";

const ReviewSection = () => {
  return (
    <div className="mt-10">
      <div className="w-full">
        <h1 className="text-5xl font-bold">Review</h1>

        <div className="flex items-center gap-3 mt-3">
          <h4 className="text-3xl font-bold">4.8</h4>
          <div className="rating">
            <input type="radio" name="rating-1" className="mask mask-star" />
          </div>
          <h4 className="text-xl text-gray-700 font-bold">599,33 Views</h4>
        </div>

        <div>
          <h1 className="text-5xl font-bold  mt-10"> User FeedBack</h1>
       <div>
       <div className="flex items-center gap-4 mt-4">
            <img src={img1} alt="" />
            <div className="flex">
            <div>
            <h4>Daniel Russsel</h4>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
              </div>
            </div>
              <h5>Just Now</h5>
            </div>
          </div>
          <p className="mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam nostrum itaque perspiciatis in delectus quis neque dolorum culpa animi velit.</p>
          <hr className="border  bg-gray-900 mt-2" />
       </div>
       <div>
       <div className="flex items-center gap-4 mt-4">
            <img src={img1} alt="" />
            <div className="flex">
            <div>
            <h4>Daniel Russsel</h4>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
              </div>
            </div>
              <h5>Just Now</h5>
            </div>
          </div>
          <p className="mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam nostrum itaque perspiciatis in delectus quis neque dolorum culpa animi velit.</p>
          <hr className="border  bg-gray-900 mt-2" />
       </div>
       <div>
       <div className="flex items-center gap-4 mt-4">
            <img src={img1} alt="" />
            <div className="flex">
            <div>
            <h4>Daniel Russsel</h4>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
              </div>
            </div>
              <h5>Just Now</h5>
            </div>
          </div>
          <p className="mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam nostrum itaque perspiciatis in delectus quis neque dolorum culpa animi velit.</p>
          <hr className="border  bg-gray-900 mt-2" />
       </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
