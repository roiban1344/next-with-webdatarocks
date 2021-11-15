import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";

const PivotTable = dynamic(() => import("../components/PivotTable"), {
  ssr: false,
});

const Table = () => {
  const [filePath, setFilePath] = useState("sample.csv");

  return (
    <>
      <Head>
        <title>react-webdatarocks demo</title>
        <meta name="description" content="Demo app of react-webdatarocks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <label htmlFor="csv-file-paths">Select CSV file path</label>
      <select
        name="csv-file-paths"
        onChange={({ target: { value } }) => {
          console.log(value);
          setFilePath(value);
        }}
      >
        <option value="sample.csv">/public/sample.csv</option>
        <option value="/api/download-csv?filename=1">/storage/1.csv</option>
        <option value="/api/download-csv?filename=2">/storage/2.csv</option>
        <option value="/api/download-csv?filename=empty">/storage/empty.csv</option>
      </select>
      <div>
        <PivotTable filePath={filePath} key={filePath} />
      </div>
    </>
  );
};

export default Table;
