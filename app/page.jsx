"use client";
import { React, useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [main, setMain] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMain([...main, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (i) =>{
      let copyTask = [...main]
      copyTask.splice(i, 1)
      setMain(copyTask)
  }

  let renderTask = <h2 className="font-bold text-2xl">No Task Available</h2>;
  if (main.length > 0) {
    renderTask = main.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between">
          <div className="flex justify-between mb-5 w-2/3">
            <h5 className="font-semibold text-2xl">{t.title}</h5>
            <h6 className="font-semibold text-xl"> {t.desc}</h6>
          </div>
          <button 
          onClick={()=>{
            deleteHandler(i)
          }}
          className="bg-red-400 font-bold px-3 py-2 text-white rounded">
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="  text-white bg-gray-200 text-center text-3xl p-5 font-bold">
        TO DO LIST
      </h1>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          className="m-10 px-20 py-2 border-b-2 outline-none bg-teal-50 "
          placeholder="Today's To Do ..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="m-10 px-20 py-10 border-b-2 outline-none bg-lime-50"
          placeholder="Enter Description Here ..."
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className="px-7 py-3 m-5 rounded-lg text-white bg-purple-300 font-bold">
          ADD
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200 ">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
