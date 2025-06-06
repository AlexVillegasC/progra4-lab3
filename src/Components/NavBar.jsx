import { Link } from '@tanstack/react-router';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white fixed w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className='flex items-center justify-between h-16'>                
                <div className="hidden md:flex space-x-4">
                    <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded">Home</Link>                    
                    <Link to="/users" className="hover:bg-gray-700 px-3 py-2 rounded">Users</Link>                    
                </div>

            </div>

        </div>
    </nav>
  );
}

export default NavBar;
