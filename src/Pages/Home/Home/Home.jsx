import Animation from "../Animation/Animation";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import StudentsOftheWeek from "../StudentsOftheWeek/StudentsOftheWeek";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <StudentsOftheWeek></StudentsOftheWeek>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Animation></Animation>
        </div>
    );
};

export default Home;