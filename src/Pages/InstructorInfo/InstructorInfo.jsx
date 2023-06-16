
const InstructorInfo = ({ instructor }) => {
  const { photoURL, name } = instructor;
  return (
    <div className='card  bg-base-100 shadow-xl'>
      <figure>
        <img src={photoURL} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2>Instructor Name: {name}</h2>
      </div>
    </div>
  );
};

export default InstructorInfo;
