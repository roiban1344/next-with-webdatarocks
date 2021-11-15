import dynamic from "next/dynamic";
import Head from "next/head";

const PivotTable = dynamic(() => import("../components/PivotTable"), {
  ssr: false,
});

const Table = () => {
  return (
    <>
      <Head>
        <title>react-webdatarocks demo</title>
        <meta name="description" content="Demo app of react-webdatarocks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PivotTable />
    </>
  );
};

export default Table;
