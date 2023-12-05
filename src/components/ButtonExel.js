import { CloudArrowDownIcon } from '@heroicons/react/24/solid';
import * as XLSX from 'xlsx';

const ButtonExcel = ({ json, name }) => {
  const downloadExcel = () => {
    let worksheet = XLSX.utils.json_to_sheet(json);

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, `${name}.xlsx`);
  };
  return (
    <button
      className="bg-white text-primary1 border-2 border-primary1 rounded-lg w-[102px] h-11 text-sm flex items-center gap-2 py-2 justify-center"
      onClick={downloadExcel}
    >
      <CloudArrowDownIcon className="w-5" />
      Export
    </button>
  );
};

export default ButtonExcel;