import { useEffect, useState } from 'react';
import InstructorDetails from './InstructorDetails';

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("https://summer-photo-camp-server.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      });
  }, []);

  return (
    <div>
      <h2 className='uppercase lg:text-5xl sm:text-3xl text-center font-CreteRound text-primary my-10 p-3'>Popular Instructors</h2>      
      <div className='grid md:grid-cols-3 gap-5 my-5'>
        {instructors.map((instructor) => (

          <InstructorDetails 
          key={instructor._id} 
          instructor={instructor}>
          </InstructorDetails>
        ))}
      </div>
    </div>
    );
};

export default PopularInstructors;