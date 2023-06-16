import useEnrollClass from "../../hooks/useEnrollClass";



const EnrolledClasses = () => {
    const [enrollClass, refetch] = useEnrollClass()
    return (
        <div className='w-full'>
            <div className='text-center my-8'>
            <h2 className='text-3xl uppercase py-4'>My Enrolled Classes:{enrollClass.length}</h2>
            </div>  
            <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Class</th>
                <th>Class Name</th>
              </tr>
            </thead>
            <tbody>
              {
                enrollClass.map((cls, index) => <tr key={cls._id}>
                    <th>{index + 1}</th>
                    <td><img className='h-14' src={cls.image} alt="" /></td>
                    <td>{cls.className}</td>
                  </tr>)
              }
              
            </tbody>
          </table>
        </div> 
        </div>
    );
};

export default EnrolledClasses;