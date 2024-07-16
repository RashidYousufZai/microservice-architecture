import React, { useEffect, useState } from "react";

const Main = () => {
  const [user, setUser] = useState(null);
  const userId = "6693d05da82caff4c3e58c4d";

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/users/${userId}`);
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        } else {
          throw new Error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <>
      {user ? (
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <header className="px-2 py-4 mt-16 flex flex-col justify-center items-center text-center">
              {/* Your user profile UI */}
              <img
                className="inline-flex object-cover border-4 border-indigo-600 rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-indigo-600/100 bg-indigo-50 text-indigo-600 h-24 w-24 !h-48 !w-48"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxoZWFkc2hvdHxlbnwwfDB8fHwxNjk1ODE3MjEzfDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt=""
              />
              <h1 className="text-2xl text-gray-500 font-bold mt-2">
                {user.name}
              </h1>
              <h2 className="text-base md:text-xl text-gray-500 font-bold">
                {user.email}
                <a
                  href=""
                  target="_blank"
                  className="text-indigo-900 hover:text-indigo-600 font-bold border-b-0 hover:border-b-4 hover:border-b-indigo-300 transition-all mb-2"
                ></a>
              </h2>
              <h2 className="text-base md:text-xl text-gray-500 font-bold">
                {user.secretKey}
                <a
                  href=""
                  target="_blank"
                  className="text-indigo-900 hover:text-indigo-600 font-bold border-b-0 hover:border-b-4 hover:border-b-indigo-300 transition-all mb-2"
                ></a>
              </h2>
            </header>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Main;
