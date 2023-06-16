import { useEffect, useState } from "react";
import InstructorInfo from "../InstructorInfo/InstructorInfo";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      });
  }, []);

  return (
    <div>
      <div className='mx-auto text-center md:w-4/12 my-8'>
        <h2 className='text-3xl font-semibold uppercase py-4'>
          Popular Instructors
        </h2>
        <p>Choose your instructor to improve yourself.</p>
      </div>
      <div className='grid md:grid-cols-3 gap-5 my-5'>
        {instructors.map((instructor) => (
          <InstructorInfo key={instructor._id} instructor={instructor}></InstructorInfo>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
