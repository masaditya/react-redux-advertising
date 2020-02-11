import React from "react";

export const Post = () => {
  return (
    <div className="bg-white p-0 rounded shadow">
      <form method="POST" action="<?php echo site_url() ?>/Dashboard/add_post">
        <div className="row py-4 px-5 fz-1"></div>
        <div className="mr-3 ml-5 pt-1 pr-4 ">
          <h3>
            {" "}
            <b> Add Post ! </b>
          </h3>
          <h4>Let’s start make a noise for your brand !</h4>
          <div className="form-group account mt-5 ">
            <label>
              <b>Title</b>
            </label>
            <input
              type="text"
              className="form-control w-70 my-4"
              id="title"
              name="title"
              placeholder="Title"
              required
            />
          </div>
          <div className="form-group account mt-5 ">
            <label>
              <b>Content</b>
            </label>
            <textarea
              id="ckEditor"
              className="form-control"
              name="content"
              placeholder="Content"
              required
              defaultValue={""}
            />
          </div>
          <div className="form-group account mt-5 ">
            <label>
              <b>Slug</b>
              <small>
                (If you leave it blank, it will be generated automatically.)
              </small>
            </label>
            <input
              type="text"
              className="form-control w-70 my-4"
              name="title_slug"
              placeholder="Slag"
            />
          </div>
          <div className="form-group account mt-5 ">
            <label>
              <b>Summary &amp; Description (Meta Tag)</b>
            </label>
            <textarea
              className="form-control h-50 my-4"
              name="summary"
              placeholder="Summary & Description (Meta Tag)"
              required
              defaultValue={""}
            />
          </div>
          <div className="form-group account mt-5 ">
            <label>
              <b>Keywords (Meta Tag)</b>
            </label>
            <input
              type="text"
              className="form-control w-70 my-4"
              id="keywords"
              name="keywords"
              placeholder="Keywords (Meta Tag)"
              required
            />
          </div>
          <div className="form-group account mt-5 ">
            <label>
              <b>Language</b>
            </label>
            <select className="form-control w-60 my-4" id="lang" name="lang">
              <option value>Choose your Language</option>
              <option value=""></option>
            </select>
          </div>
          <div className="form-group account mt-5 ">
            <label>
              <b>Category</b>
            </label>
            <select
              className="form-control w-60 my-4"
              id="category"
              name="category"
            >
              <option value>Select a category</option>
            </select>
          </div>
          <div className="form-group account mt-5 ">
            <label>
              <b>Sub Category</b>
            </label>
            <select
              className="form-control w-60 my-4"
              id="subcategory"
              name="subcategory"
            >
              <option value>Select a Subcategory</option>
            </select>
          </div>
          <div className="w-70 text-center py-5">
            <button
              type="submit"
              className="btn btn-outline-primary w-50 btn-rounded py-2 "
            >
              Posting
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
