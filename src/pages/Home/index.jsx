import Header from "../../components/header/index";
import DataGrid from "../../components/dataDrid";
import "./style.css";

function Home() {
  return (
    <>
      <Header />
      <div id="app">
        <div className="data-grid">
          <DataGrid />
        </div>
      </div>
    </>
  );
}

export default Home;
