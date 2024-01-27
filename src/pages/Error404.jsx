import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className=" flex flex-col items-center justify-center h-[80vh] bg-gray-100">
            <div className='p-6 text-center'>
                <h1 className="text-4xl font-bold mb-4 text-red-500">Error 404</h1>
                <p className="text-lg mb-8 text-red-500 ">Page not found</p>
                <Link to="/" className="text-blue-500 hover:underline">Go back to Home</Link>
            </div>
        </div>
    );
};

export default Error404;
