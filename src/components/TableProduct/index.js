import React, { useEffect, useState } from "react";
import { Card, Typography, CardBody, Chip } from "@material-tailwind/react";
import { getToken } from "../../utils/storage";
import fetch from "../../utils/fetch";
import DetailProduct from "../Product/DetailProduct";

const TABLE_HEAD = [
  "No",
  "Gambar Produk",
  "Nama Produk",
  "Harga",
  "Deskripsi",
  "Kategori",
  "Sales",
  "ID Store",
  "Status",
  "Action",
];

export default function TableProduct() {
  const [tableData, setTableData] = useState([]);
  console.log(tableData);

  const getData = async () => {
    try {
      const token = getToken();
      const options = {
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/product`,
        params: {
          active_on: "sukabirus",
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(options);
      if (response && response.data && Array.isArray(response.data)) {
        setTableData(response.data);
      } else {
        setTableData([]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Card className="h-full w-full">
      <CardBody className="overflow-scroll">
        {tableData.length > 0 ? (
          <table className="w-full table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
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
              {tableData.map(
                (
                  {
                    id,
                    images,
                    name,
                    price,
                    description,
                    category,
                    sale,
                    status,
                    store,
                  },
                  index
                ) => {
                  const rowNumber = index + 1;
                  const isLast = index === tableData.length - 1;
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
                        {images && images[0] ? (
                          <img
                            src={images[0]}
                            alt={name}
                            className="w-25 h-25 rounded-xl"
                          />
                        ) : (
                          "No Image Available"
                        )}
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
                          {price}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {description}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {category}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {sale}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {store && store.id}
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
                          <DetailProduct data={tableData[index]} />
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        ) : (
          <Typography variant="body" color="blue-gray" className="p-4">
            No data available.
          </Typography>
        )}
      </CardBody>
    </Card>
  );
}
