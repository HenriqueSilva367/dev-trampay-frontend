import { useState, useRef, useEffect } from "react";
import "./style.css";
import completeArchive from "../../assets/img-home/completeArchive.svg";
import Header from "../../components/header/index";

export default function Home() {

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    
  };

  return (
    <>
      <Header />
      <div id="app">
        <section className="drag-files">
          <i className="ph ph-cloud-arrow-up"></i>

          <h3>Importe seus arquivos</h3>
          <p>Arraste ou clique para fazer upload</p>
          <input type="file" onDragOver={handleDrop} onDrop={handleDrop} />
        </section>
        <section className="files">
          <div className="box done">
            <div className="icon">
              <i className="ph-fill ph-file">
                <img src={completeArchive} alt="" />
              </i>
            </div>
            <div className="info">
              <div className="filename">README.md</div>
              <div className="filesize">
                <span>12 KB</span>
              </div>
              <div className="bar">
                <progress value="100" max="100"></progress>
                <span>100%</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
