import useClasses from '../../../hooks/useClasses';
import Class from '../Class/Class';

const Classes = () => {
    const [classes] = useClasses()
    console.log(classes)
    return (
        <div className='m-5 pt-5'>
            <h2 className='text-4xl font-bold text-center'>Our Popular Classes : {classes.length}</h2>
            <p className='font-semibold text-center m-2 pb-5'>Find Your Game With Real Champions Academy</p>
            <div className='grid md:grid-cols-3 gap-5 my-5'>
            {
                classes.map(item => <Class 
                    key={item._id}
                    item={item}
                    ></Class>)
            }
            </div>
        </div>
    );
};

export default Classes;