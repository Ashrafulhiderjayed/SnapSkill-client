import img from '../../assets/icons/404.png'

const ErrorPage = () => {
    return (
        <div className="text-center">
      <img
        className="w-full h-full object-cover"
        src={img}
        alt="Error"
      />
      <button className="btn btn-outline btn-warning"><a href="/" className="not-found-link">Go back to the homepage</a></button>
    </div>
    );
};

export default ErrorPage;