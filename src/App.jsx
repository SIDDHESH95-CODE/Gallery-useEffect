import axios from "axios";
import GalleryCard from "./components/GalleryCard";
import { useState } from "react";

function App() {

  const [imageData, setImageData] = useState();

  async function getData() {
    const URL = "https://picsum.photos/v2/list?page=3&limit=10";
    const { data } = await axios.get(URL);
    // const data = res.data;
    console.log(data);
  }

  return (
    <div className="p-10 w-full min-h-screen bg-zinc-800 text-white text-2xl">
      <button
        onClick={getData}
        className="mb-5 px-4 py-2 bg-blue-500 cursor-pointer rounded-md"
      >
        Get Data
      </button>
      <GalleryCard />
    </div>
  );
}

export default App;
