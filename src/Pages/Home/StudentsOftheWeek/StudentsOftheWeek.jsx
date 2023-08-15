
import './StudentsOftheWeek.css';

const StudentsOftheWeek = () => {
    return (
        <div className='w-full'>
            <h2 className='uppercase lg:text-5xl sm:text-3xl text-center font-CreteRound text-primary my-8'>Student's of the Week</h2>
            <section className="container lg:py-10 w-full flex md:flex-row sm:flex-col items-center justify-between">
                <div className="student-card lg:h-1/3 w-80 rounded-xl drop-shadow-2xl border">
                    {/* <div className='title'>
                        <h1>Tamim Iqbal Khan</h1>
                        <p>Kazir Dewri, Chattogram, Bangladesh</p>
                    </div> */}
                    <div className="image">
                        <div className="outer">
                            <div className="inner student-card-img">
                                {/* <img src={img1}></img> */}
                            </div>
                        </div>
                    </div>
                    <div className="name">
                    Jane Cole
                    </div>
                    <div className="details bg-primary text-white">
                        <div className="col ms-6">
                            <ul type='none'>
                                <li>Class: X11</li>
                                <li>Roll No. 51</li>
                                <li>Faculty: Science</li>
                                <li>Reg No: 939822</li>
                                <li>Contact No: 01746282931</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="student-card h-1/3 w-80 rounded-xl drop-shadow-2xl">
                    {/* <div className='title'>
                        <h1>Tamim Iqbal Khan</h1>
                        <p>Kazir Dewri, Chattogram, Bangladesh</p>
                    </div> */}
                    <div className="image">
                        <div className="outer">
                            <div className="inner student-card-img2">
                                {/* <img src={img1}></img> */}
                            </div>
                        </div>
                    </div>
                    <div className="name">
                        Luke Ford
                    </div>
                    <div className="details bg-primary text-white">
                        <div className="col ms-6">
                            <ul type='none'>
                                <li>Class: X1</li>
                                <li>Roll No. 21</li>
                                <li>Faculty: Science</li>
                                <li>Reg No: 039822</li>
                                <li>Contact No: 01846282931</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="student-card h-1/3 w-80 rounded-xl drop-shadow-2xl">
                    <div className='title'>
                        {/* <h1>Street Photography</h1> */}
                        {/* <p>Kazir Dewri, Chattogram, Bangladesh</p> */}
                    </div>
                    <div className="image">
                        <div className="outer">
                            <div className="inner student-card-img3">
                                {/* <img src={img1}></img> */}
                            </div>
                        </div>
                    </div>
                    <div className="name">
                        John Doe
                    </div>
                    <div className="details bg-primary text-white">
                        <div className="col ms-6">
                            <ul type='none'>
                                <li>Class: X1</li>
                                <li>Roll No. 41</li>
                                <li>Faculty: Science</li>
                                <li>Reg No: 539822</li>
                                <li>Contact No: 01546282931</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </section>
        </div>
    );
};

export default StudentsOftheWeek;