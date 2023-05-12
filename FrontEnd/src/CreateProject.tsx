import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CompanyLogo from './assets/logo.png';
import { ChangeEvent } from 'react';
import Navbar from "./Navbar";
import Verticalbar from "./Verticalbar";

function CreateProject() { 
  const navigate = useNavigate(); 
  const [imagePreview, setImagePreview] = useState("");

    
  const handleSetImage = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length > 0) {
      const file = files[0];
      console.log(`Selected file: ${file.name}`);
      const reader = new FileReader();

      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`./Home`);    
  };

  return (
    <div className="bg-white dark:bg-slate-800 w-screen rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
    <Navbar/>
    <Verticalbar/>
      <h2 className="absolute top-3 w-full text-center text-4xl font-bold leading-tight text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-cyan-800 py-6">
        Create New Project
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">

        <div className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-cyan-500">
        <label>Project Image</label>
        </div>
        <input 
          type="file" 
          name="image" 
          placeholder='Image' 
          className="block mx-auto w-25 justify-center rounded-md bg-cyan-600"
          onChange={e => handleSetImage(e)}
        />
       {imagePreview ? (
        <img
          className="block mx-auto mt-4 rounded-md"
          src={imagePreview}
          alt="Selected file preview"
          style={{ maxWidth: "400px", maxHeight: "400px" }}
        />
        ) : (
          <div className="bg-white dark:bg-slate-800 w-full h-64 flex items-center justify-center rounded-md text-white">
            <span>No image selected</span>
            </div>
        )}
 
        <input 
          type="text" 
          name="projectName" 
          placeholder="Project Name" 
          className="mt-10 block mx-auto w-75 justify-center rounded-md bg-cyan-600 py-1 text-center font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
        />

        <input 
          type="text" 
          name="repositoryLink" 
          placeholder="Repository Link:" 
          className="block mx-auto w-500 justify-center rounded-md bg-cyan-600 py-1 text-center font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
        />

        <Link to="/Home">
          <button 
            type="submit" 
            className="block mx-auto w-32 justify-center rounded-md bg-cyan-600 py-1 text-center font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 border-2 border-cyan-600 mt-9">
            Create Project
          </button>
        </Link>
      
    <div className="flex h-screen">
    <div className="m-auto mr-auto">
    <Link to="/Home">
      <button className="absolute bottom-5 left-1/4 block mx-auto w-32 justify-center rounded-md bg-cyan-600 py-1 text-center font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 border-2 border-cyan-600">
        Back
      </button>
    </Link>
    </div>
    </div>

        <img
          className="absolute bottom-3 right-7 h-15 w-50"
          src={CompanyLogo}
          alt="Your Company"
        />
      </form> 
    </div>
  );
}
  
export default CreateProject;