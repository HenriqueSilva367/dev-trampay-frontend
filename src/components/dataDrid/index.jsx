import { useState } from "react";
import Papa from "papaparse";
import "./style.css";

function DataGrid() {
  const [data, setData] = useState([]);
  const [calumn, setCalumn] = useState([]);
  const [values, setValues] = useState([]);

  const handleFile = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: false,
      complete: function (result) {
        const conlumnArray = [];
        const valuesArray = [];

        result.data.map((results) => {
          conlumnArray.push(Object.keys(results));
          valuesArray.push(Object.values(results));
        });

        setData(result.data);
        setCalumn(conlumnArray[0]);
        setValues(valuesArray);
      },
    });
  };

  return (
    <>
      <div className="conteiner-datagrid">
        <section className="drag-files">
          <h3>Importe seus arquivos</h3>
          <p>Arraste ou clique para fazer upload</p>
          <input
            className="intup-file"
            type="file"
            name="file"
            accept=".csv"
            onChange={handleFile}
          />
        </section>

        <div className="table-file">
          <table>
            <thead className="tab_dados">
              <tr>
                {calumn.map((row, index) => (
                  <th key={index}>{row}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {values.map((col, index) => (
                <tr key={index}>
                  {col.map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default DataGrid;
