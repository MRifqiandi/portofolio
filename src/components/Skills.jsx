// import React from "react";

function Skills() {
  return (
    <div className="flex flex-col">
      <div className="flex content-center justify-center">
        <h1 id="skills" className="font-bold text-7xl">
          Skills
        </h1>
      </div>
      <div className="flex justify-center content-center p-10">
        <div className="flex flex-wrap w gap-4 justify-center content-center">
          <div className="flex content-center justify-center py-2 px-10 rounded-lg bg-custom-skill gap-5 shadow-lg shadow-gray-600">
            <img className="h-10" src="./src/assets/java-script.png"></img>
            <h1 className="font-bold">Java Script</h1>
          </div>
          <div className="flex content-center justify-center py-2 px-10 rounded-lg bg-custom-skill gap-5 shadow-lg shadow-gray-600">
            <img className="h-10" src="./src/assets/python.png"></img>
            <h1 className="font-bold">Python</h1>
          </div>
          <div className="flex content-center justify-center py-2 px-10 rounded-lg bg-custom-skill gap-5 shadow-lg shadow-gray-600">
            <img className="h-10" src="./src/assets/php.png"></img>
            <h1 className="font-bold">PHP</h1>
          </div>
          <div className="flex content-center justify-center py-2 px-10 rounded-lg bg-custom-skill gap-5 shadow-lg shadow-gray-600">
            <img className="h-10" src="./src/assets/html.png"></img>
            <h1 className="font-bold">HTML</h1>
          </div>
          <div className="flex content-center justify-center py-2 px-10 rounded-lg bg-custom-skill gap-5 shadow-lg shadow-gray-600">
            <img className="h-10" src="./src/assets/react.png"></img>
            <h1 className="font-bold">React Js</h1>
          </div>
          <div className="flex content-center justify-center py-2 px-10 rounded-lg bg-custom-skill gap-5 shadow-lg shadow-gray-600">
            <img className="h-10" src="./src/assets/github.png"></img>
            <h1 className="font-bold">GitHub</h1>
          </div>
          <div className="flex content-center justify-center py-2 px-10 rounded-lg bg-custom-skill gap-5 shadow-lg shadow-gray-600">
            <img className="h-10" src="./src/assets/git.png"></img>
            <h1 className="font-bold">Git</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
