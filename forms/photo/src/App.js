import { nanoid } from "nanoid";
import React, {useState} from "react";
import Image from "./components/Image";

function App() {
  const [images, setImages] = useState([])

  function fileToDataUrl(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
    
      fileReader.addEventListener('load', evt => {
        resolve(evt.currentTarget.result);
      });
      
      fileReader.addEventListener('error', evt => {
        reject(new Error(evt.currentTarget.error));
      });
      
      fileReader.readAsDataURL(file);
    });
  }
  
  async function handleSelect(evt) {
      const files = [...evt.target.files];
      const urls = await Promise.all(files.map(async o => ({
        src: await fileToDataUrl(o),
        name: o.name,
        id: nanoid()
      })));
      setImages((prevImage) => ([...prevImage, ...urls]))
  }

  function handleRemove(id) {
    setImages((prevImage) => prevImage.filter((el) => el.id !== id))
  }

  return (
    <>
      <div className="photo">
        Click to select
        <input accept="image/*"
          type="file"
          className="photo-input"
          multiple
          onChange={handleSelect}
          />
      </div>
      <div className="images-list">
        {images.map((el) => <Image 
        onRemove={handleRemove}
        href={el.src}
        name={el.name}
        id={el.id}
        key={el.id}/>)}
      </div>
    </>
  );
}

export default App;
