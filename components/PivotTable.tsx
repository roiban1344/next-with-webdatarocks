import * as WebDataRocksReact from "react-webdatarocks";
import "webdatarocks/webdatarocks.css";

const PivotTable = ({ filePath }: { filePath: string }) => {
  return (
    <div>
      <WebDataRocksReact.Pivot
        toolbar={true}
        report={{
          dataSource: {
            filename: filePath,
          },
        }}
      />
    </div>
  );
};

export default PivotTable;
