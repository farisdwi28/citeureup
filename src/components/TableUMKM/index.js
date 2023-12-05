import { TrashIcon, EyeIcon } from "@heroicons/react/24/solid";
import {
  Card,
  Typography,
  CardBody,
  Chip,
  IconButton,
  Tooltip
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { getToken } from "../../utils/storage";
import fetch from "../../utils/fetch";
import Loading from "../../elements/Spinner";
import ButtonEdit from "../ButtonListMitra/ButtonEdit";
import Detail from "../ButtonListMitra/Detail";

const TABLE_HEAD = [
  "No",
  "Nama",
  "Alamat",
  "No Telp",
  "Email",
  "Status",
  "Action"
];

export default function TableUMKM() {
  const [isLoading, setIsLoading] = useState(false);
  const [tableRows, setTableRows] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const getData = async () => {
    const token = getToken();
    setIsLoading(true);
    const options = {
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/user/umkm`,
      params: {
        active_on: "sukabirus"
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    try {
      const response = await fetch(options);
      if (Array.isArray(response.data)) {
        setTableRows(response.data);
      } else {
        setTableRows([]);
      }
    } catch (err) {
      alert(JSON.stringify(err));
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteUMKM = async id => {
    if (window.confirm("Apakah yakin ingin menghapus data mitra ini?")) {
      const token = getToken();
      const options = {
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/user/delete-umkm/${id}`,
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      try {
        await fetch(options);
        getData();
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 2000);
      } catch (err) {
        alert("GAGAL DELETE: " + err.message);
      }
    }
  };

  return (
    <Card className="h-full w-full">
      <CardBody className="overflow-scroll">
        {isLoading ? (
          <Loading />
        ) : tableRows.length === 0 ? (
          <div className="text-center py-8 text-blue-gray-400">Data kosong</div>
        ) : (
          <table className="w-full table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map(head => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map(
                ({ id, name, address, phone, email, status }, index) => {
                  const rowNumber = index + 1;
                  const isLast = index === tableRows.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={index}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {rowNumber}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {address}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {phone}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {email}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            size="sm"
                            variant="ghost"
                            value={
                              status === true
                                ? "Active"
                                : status === false
                                ? "Inactive"
                                : "Inactive"
                            }
                            color={
                              status === true
                                ? "green"
                                : status === false
                                ? "amber"
                                : "red"
                            }
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex gap-2">
                          <Detail
                          umkmData = {tableRows[index]}
                          />
                          <ButtonEdit 
                          umkmData = {tableRows[index]}
                          />
                          <Tooltip content="Delete">
                            <IconButton
                              variant="text"
                              color="blue-gray"
                              onClick={() => deleteUMKM(id)}
                            >
                              <TrashIcon className="h-4 w-4" />
                            </IconButton>
                          </Tooltip>
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        )}
        {isSuccess && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4">
            <strong className="font-bold">Success:</strong>
            <span className="block sm:inline">Data successfully deleted!</span>
          </div>
        )}
      </CardBody>
    </Card>
  );
}
