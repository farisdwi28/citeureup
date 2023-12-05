import { Fragment, useState } from "react";
import {  EyeIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Switch,
  Typography
} from "@material-tailwind/react";
import { getToken } from "../utils/storage";
import fetch from "../utils/fetch";
import Loading from "../elements/Spinner";
import { useForm } from "react-hook-form";
import Toggle from "../elements/Switch";
import SearchInput from "./Search";
import InputSearch from "./InputSearch";

export default function DetailNews({ data }) {
  const [size, setSize] = useState(null);

  const handleOpen = value => setSize(value);

  return (
    <Fragment>
      <IconButton
        variant="text"
        color="blue-gray"
        onClick={() => handleOpen("lg")}
      >
        <EyeIcon className="h-4 w-4" />
      </IconButton>
      <Dialog open={size === "lg"} handler={handleOpen} size="lg">
        <DialogHeader>
          <div>
            <h1>Detail Berita</h1>
          </div>
        </DialogHeader>
        <DialogBody className="h-[40rem] overflow-scroll grid justify-center">
          <div className="grid object-center justify-center">
            <img
              src={data.url_image}
              className="object-scale-down h-60 rounded-lg"
            ></img>
          </div>
          <div className="text-black font-semibold text-lg grid object-center justify-center mt-2">
            {data.title}
          </div>
          <Typography className="font-normal max-w-4xl">
            {data.description}
          </Typography>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
