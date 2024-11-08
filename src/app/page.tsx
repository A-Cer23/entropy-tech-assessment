'use client'

import { useState } from "react"

export default function Home() {

  // uploader
  const [originalImage, setOriginalImage] = useState<File>()
  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !file.type.startsWith('image/')) {return}
    setOriginalImage(file);
  }

  // controller
  const [selectedAlgo, setSelectedAlgo] = useState('');
  const handleSelectedAlgo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const algo = event.target.value;
    setSelectedAlgo(algo);
  }
  const handleControllerSubmit = () => {
    if (!selectedAlgo) {
      return
    }

    switch (selectedAlgo) {
      case "floyd-steinberg-dither":
        break;
    }

  }



  return (
    <main className="flex flex-col min-h-screen items-center">
      <label>
        Upload an image:
        <input type="file" accept=".jpg, .jpeg, .png" className="border mt-5 ml-2" onChange={handleFile}/>
      </label>

      {originalImage && (
        <div className="flex flex-col items-center mt-10">
          <h3 className="underline">Controller</h3>
          <label className="pt-5">
            Algorithm:
            <select className=" text-black ml-2" onChange={handleSelectedAlgo}>
              <option value="">-- Select Algorithm --</option>
              <option value="floyd-steinberg-dither">Floyd Steinberg Dither</option>
            </select>
          </label>
          <button className="bg-blue-500 py-1 px-2 rounded-full font-bold mt-8" onClick={handleControllerSubmit}>Dither</button>
        </div>
      )}

      {originalImage && (
        <div className="pt-20">
          <h3 className="text-center">Live Preview</h3>
          <img src={URL.createObjectURL(originalImage)}  style={{width:'auto', height:'auto'}}/>
        </div>
        
      )}
    </main>
  )
}