import { useQuery } from "@tanstack/react-query";
import PopularClassesDetails from "./PopularClassesDetails";

const PopularClasses = () => {
  const { data: popularClasses = [] } = useQuery({
    queryKey: ["popularClasses"],

    queryFn: async () => {
      const res = await fetch("http://localhost:5000/popularClasses");
      return res.json();
    },
  });

  return (
    <div>
      <div className=' '>
        <div className='grid grid-cols-1 lg:grid-cols-3 mx-auto gap-3 p-10'>
          {popularClasses.map((cls, index) => (
            <PopularClassesDetails key={index} cls={cls}></PopularClassesDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
