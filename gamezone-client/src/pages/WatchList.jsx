import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";



const WatchList = () => {

    const { user } = useContext(AuthContext);
  const [WatchList,setWatchList] = useState([]);

  useEffect(() => {
    if (user?.email) {
      // console.log(user.email);

      fetch(`https://gamezone-server.vercel.app/watchlist?userEmail=${user.email}`)
        .then((res) => res.json())
        .then((data) => setWatchList(data))
        .catch((error) => {
          toast.error(error.message);
        });
    }
  }, [user?.email]);


    return (
        <div>
      <h1 className="text-3xl text-center font-bold text-green-500 mb-5">
        My WatchList
      </h1>

      {WatchList.length === 0 ? (
        <p className="text-center text-green-500">No reviews found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Genre</th>
                <th>Rating</th>
                <th>Year</th>
              </tr>
            </thead>

            <tbody>
              {WatchList.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.genre}</td>
                  <td>{item.rating}</td>
                  <td>{item.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    );
};

export default WatchList;