import * as WebDataRocksReact from "react-webdatarocks";
import "webdatarocks/webdatarocks.css";

const PivotTable = () => {
  return (
    <div>
      <WebDataRocksReact.Pivot
        toolbar={true}
        //componentFolder="https://cdn.webdatarocks.com/"
        //width="100%"
        //report="https://cdn.webdatarocks.com/reports/report.json"
        report={{
          dataSource: {
            filename: "http://localhost:3000/api/csv?id=1"
          },
        }}
      />
    </div>
  );
};

export default PivotTable;
