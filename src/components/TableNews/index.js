import { PencilIcon, TrashIcon, EyeIcon } from "@heroicons/react/24/solid";
import {
  Card,
  Typography,
  CardBody,
  Chip,
  IconButton,
  Tooltip,
  DialogBody,
  DialogHeader
} from "@material-tailwind/react";
import { Fragment, useEffect, useState } from "react";
import { getToken } from "../../utils/storage";
import fetch from "../../utils/fetch";
import Loading from "../../elements/Spinner";
import { format } from "date-fns";
import EditNews from "../ButtonKelolaBerita/ButtonEditBerita";
import { Dialog } from "@headlessui/react";
import DetailBerita from "../../pages/DetailBerita";
import DetailNews from "../DetailBeritaModal";

const TABLE_HEAD = [
  "No Berita",
  "Cover Berita",
  "Judul Berita",
  "Tanggal Berita",
  "Status",
  "Action"
];

export default function TableNews() {
  const [isLoading, setIsLoading] = useState(false);
  const [tableRows, setTableRows] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isShowDetail, setShowDetail] = useState(false);

  const getData = async () => {
    const token = getToken();
    setIsLoading(true);
    const options = {
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/news`,
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

  const deleteNews = async id => {
    if (window.confirm("Apakah yakin ingin menghapus data berita ini?")) {
      const token = getToken();
      const options = {
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/news/delete/${id}`,
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
                ({ id, url_image, title, posted_date, status }, index) => {
                  const rowNumber = index + 1;
                  const isLast = index === tableRows.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";
                  return (
                    <tr key={index}>
                      <td className={classes}>
                        <span className="font-bold">{rowNumber}</span>
                      </td>
                      <td className={classes}>
                        <img src={url_image} className="w-48 h-30 rounded-xl" />
                      </td>
                      <td className={classes}>
                        <span className="font-normal leading-none opacity-100">
                          {title}
                        </span>
                      </td>
                      <td className={classes}>
                        <span className="font-normal leading-none opacity-100">
                          {posted_date
                            ? format(new Date(posted_date), "dd MMM yyyy")
                            : "-"}
                        </span>
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
                          <Tooltip content="Detail">
                            <IconButton variant="text" color="blue-gray">
                              <DetailNews data={tableRows[index]}></DetailNews>
                            </IconButton>
                          </Tooltip>
                          <EditNews prev={tableRows[index]} />
                          <Tooltip content="Delete">
                            <IconButton
                              variant="text"
                              color="blue-gray"
                              onClick={() => deleteNews(id)}
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
