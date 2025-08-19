function UserProfile() {
    return (
      <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg shadow-blue-500">
        <img 
        className="rounded-full w-36 h-36 mx-auto"
        src="https://img.icons8.com/?size=100&id=11795&format=png&color=000000" alt="User" />
        <h1 className="text-3xl font-bold text-center text-blue-800 my-4">John Doe</h1>
        <p className="text-gray-600 text-base text-center">Developer at Example Co. <br></br>Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;