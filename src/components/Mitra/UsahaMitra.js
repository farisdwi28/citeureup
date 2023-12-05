import React, { useState, useEffect } from "react";
import { getToken } from "../../utils/storage";
import { PencilIcon, TrashIcon, EyeIcon } from "@heroicons/react/24/solid";
import {
  Card,
  Typography,
  CardBody,
  Chip,
  IconButton,
  Tooltip
} from "@material-tailwind/react";
import Loading from "../../elements/Spinner";
import fetch from "../../utils/fetch";
import Detail from "../../components/ButtonListMitra/Detail";
import Detail1 from "../ButtonListMitra/Detail1";

const TABLE_HEAD = [
  "ID Usaha",
  "Nama Usaha/Toko",
  "Alamat Usaha",
  "No Telepon",
  "Aspek Usaha",
  "Kategori",
  "Status",
  "Action"
];

export default function TableUsahaMitra({ id_mitra }) {
  
  const [isLoading, setIsLoading] = useState(false);
  const [tableRows, setTableRows] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const getData = async () => {
    const token = getToken();
    setIsLoading(true);
    const options = {
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/store`,
      params: {
        id_mitra: id_mitra
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

  const deleteUsaha = async id => {
    if (window.confirm("Apakah yakin ingin menghapus data berita ini?")) {
      const token = getToken();
      const options = {
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/store/delete/${id}`,
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
                (
                  { id, name, address, phone, aspek, katagoriSaved, status },
                  index
                ) => {
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
                          className="font-bold"
                        >
                          {name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {address}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {phone}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {aspek}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {katagoriSaved}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            size="sm"
                            variant="ghost"
                            value={
                              status === 1
                                ? "Active"
                                : status === 0
                                  ? "Inactive"
                                  : "Inactive"
                            }
                            color={
                              status === 1
                                ? "green"
                                : status === 0
                                  ? "amber"
                                  : "red"
                            }
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex gap-2">
                        <Detail1
                          umkmData = {tableRows[index]}
                          />
                          <Tooltip content="Edit ">
                            <IconButton variant="text" color="blue-gray">
                              <PencilIcon className="h-4 w-4" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip content="Delete">
                            <IconButton
                              variant="text"
                              color="blue-gray"
                              onClick={() => deleteUsaha(id)}
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
