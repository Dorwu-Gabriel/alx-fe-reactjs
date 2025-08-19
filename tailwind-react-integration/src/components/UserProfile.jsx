function UserProfile() {
    return (
      <div className="bg-gray-100 md:p-8 sm:p-4 max-w-sm mx-auto my-20 rounded-lg shadow-lg shadow-blue-500 hover:shadow-2xl hover:shadow-blue-600 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
        <img 
          className="rounded-full w-36 h-36 mx-auto transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
          src="https://img.icons8.com/?size=100&id=11795&format=png&color=000000" 
          alt="User" 
        />
        <h1 className="text-xl font-bold text-center text-blue-800 my-4 transition-colors duration-300 hover:text-blue-600">John Doe</h1>
        <p className="text-gray-600 text-base text-center transition-colors duration-300 hover:text-gray-800">
          Developer at Example Co. <br />Loves to write code and explore new technologies.
        </p>
      </div>
    );
  }
  
  export default UserProfile;
