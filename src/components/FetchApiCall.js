import { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
// import axios from 'axios'

const FetchApiCall = () => {
  //   const [isLoading, setIsloading] = useState(false)
  const [fetchedList, setFetchList] = useState([]);

  useEffect(() => {
    const functionCall = async () => {
      const listResponse = await fetch("https://apis.ccbp.in/tg/packages", {
        method: "GET",
      });
      const list = await listResponse.json();
      const updatedList = list.packages.map((item) => ({
        id: item.id,
        name: item.name,
        imageUrl: item.image_url,
        description: item.description,
      }));
      setFetchList(updatedList);
    };
    functionCall();
  }, []);

  //   useEffect(() => {
  //     axios
  //       .get('https://apis.ccbp.in/tg/packages')
  //       .then(res => {
  //         const list = res.data.packages
  //         const updatedList = list.map(item => ({
  //           id: item.id,
  //           name: item.name,
  //           imageUrl: item.image_url,
  //           description: item.description,
  //         }))
  //         setFetchList(updatedList)
  //       })
  //       .catch(err => console.log(err))
  //     // console.log(list)
  //   }, [])

  return (
    <div>
      <h1>Travel Guide</h1>
      {fetchedList.length === 0 ? (
        <div testid="loader">
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        </div>
      ) : (
        <ul>
          {fetchedList.map((c) => (
            <li key={c.id}>
              <img src={c.imageUrl} alt={c.name} />
              <h1>{c.name}</h1>
              <p>{c.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchApiCall;
