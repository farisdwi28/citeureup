import { PencilIcon, TrashIcon, EyeIcon } from "@heroicons/react/24/solid";
import {
  Card,
  Typography,
  CardBody,
  Chip,
  IconButton,
  Tooltip
} from "@material-tailwind/react";
import { images } from "../../constans";
import { useEffect, useState } from "react";
import { getToken } from "../../utils/storage";
import fetch from "../../utils/fetch";

const TABLE_HEAD = [
  "ID Produk",
  "Gambar Produk",
  "Nama Produk",
  "Harga",
  "Deskripsi",
  "ID Store",
  "Kategori",
  "Status",
  "Action"
];

const TABLE_ROWS = [
];

export default function TableProductUMKM() {
  const [data, setData] = useState(TABLE_ROWS);

  const getData = async () => {
    const token = getToken();
    // setIsLoading(true);
    const options = {
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/landing-page/product`,
      params: {
        sort_by: JSON.stringify({best_seller: true}),
        active_on: "sukabirus",
        search: '',
        catagory: ''
      },
      headers: {
        Authorization: `Bearer ${token}`,
        "X-API-KEY" : "admin2023",
      }
    };
    try {
      const response = await fetch(options);
      if (Array.isArray(response.data)) {
        let processedData = structuredClone(response.data);
        processedData = processedData.filter((data) => data.store.id === localStorage.getItem("umkm_store"))
        for (let i = 0; i < processedData.length; i++) {
          processedData[i].id_store = processedData[i].store.id
        }
        setData(processedData);
      } else {
        setData([]);
      }
    } catch (err) {
      alert(JSON.stringify(err));
    }
    // setIsLoading(false);
  };

  useEffect(() => {
    getData()
  }, [])
  return (
    <Card className="h-full w-full">
      <CardBody className="overflow-scroll">
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
            {data.map(
              (
                {
                  id,
                  images,
                  name,
                  price,
                  description,
                  id_store,
                  category,
                  status
                },
                index
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={id}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {id}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <img
                        src={images && images[0]}
                        className="w-20 h-20 rounded-xl"
                        alt="Product images"
                      />
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
                        {id_store}
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
                        <Tooltip content="Edit ">
                          <IconButton variant="text" color="blue-gray">
                            <EyeIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Edit ">
                          <IconButton variant="text" color="blue-gray">
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Delete">
                          <IconButton variant="text" color="blue-gray">
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
      </CardBody>
    </Card>
  );
}
