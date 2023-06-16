

const PopularClassesDetails = ({cls}) => {
    const {
        image,    
        instructor_name,
        class_name,
        price,
        available_seats,
        students,
      } = cls;
      return (
        <div className='card border w-full'>
          <figure className='p-1'>
            {" "}
            <img src={image} alt='' className='rounded-xl' />
          </figure>
          <div className='card-body shadow-2xl my-3'>
            <h2 className='text-2xl text-center font-bold drop-shadow-0.5 text-primary'>{class_name}</h2>
            <h2><span className="font-bold">Instructor:</span> {instructor_name}</h2>
            <p><span className="font-bold"> Available Seat: </span>{available_seats}</p>
            <p><span className="font-bold"> Enroll Student: </span>{students}</p>
            <p><span className="font-bold">Price: BDT</span> {price}</p>
          </div>
        </div>
      );
    };

export default PopularClassesDetails;