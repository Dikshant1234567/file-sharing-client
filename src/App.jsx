import "./App.css";
import { useRef, useState, useEffect } from "react";
import { UploadfileApi } from "./services/api";

function App() {
  const file = useRef();
  const result = useRef();
  const [Uploadfile, setUploadfile] = useState("");
  const [link, setLink] = useState("");
  const logo =
    "https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg";

  const uploadClick = () => {
    file.current.click();
  };

  useEffect(() => {
    const getImages = async () => {
      if (Uploadfile) {
        const data = new FormData();
        data.append("name", Uploadfile.name);
        data.append("file", Uploadfile);

        const response = await UploadfileApi(data);
        setLink(response.path);
      } else {
      }
    };
    getImages();
  }, [Uploadfile]);

  // console.log(Uploadfile);
  return (
    <div className="container">
      <img src={logo} alt="img" />
      <div className="right">
        <div>
          <input
            type="file"
            ref={file}
            onChange={(e) => setUploadfile(e.target.files[0])}
          />
          <h2>SHARE YOUR FILE</h2>
          <h4>
            Click the upload button below and get the link and share with your
            friends to download the image.
          </h4>
          <button onClick={() => uploadClick()}>Upload file</button>
          <br />
          <a href={link} target={"_blank"} ref={result}>
            {link ? link : Uploadfile ? <p className="link-wait">Wait for a second...</p> : link}
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
