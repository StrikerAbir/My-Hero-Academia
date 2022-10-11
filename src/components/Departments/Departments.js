import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Department from './Department/Department';

const Departments = () => {
  const depts = useLoaderData();
  // console.log(depts);
    return (
      <div className="pb-24">
        <div className="flex justify-center py-10">
          <h1 className="text-2xl lg:text-4xl font-extrabold tracking-wider mb-10 px-20 py-5 bg-yellow-400 shadow-xl border-x-4 border-t-2 border-[#e92b19] rounded-lg ">
            Departments
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mx-10">
          {depts.map((dept) => (
            <Department key={dept.id} dept={dept}></Department>
          ))}
        </div>
      </div>
    );
};

export default Departments;