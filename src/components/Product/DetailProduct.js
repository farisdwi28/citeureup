import { Fragment, useState } from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  IconButton,
} from "@material-tailwind/react";
import DetailView from "../../elements/DetailView";

export default function DetailNews({ data }) {
  const [size, setSize] = useState(null);

  const handleOpen = (value) => setSize(value);

  return (
    <Fragment>
      <IconButton variant="text" color="blue-gray" onClick={() => handleOpen("lg")}>
        <EyeIcon className="h-4 w-4" />
      </IconButton>
      <Dialog open={size === "lg"} handler={handleOpen} size='lg'>
        <DialogHeader>
          <div>
            <h1>Detail Produk</h1>
          </div>
        </DialogHeader>
        <DialogBody>
          <img src={data.iamges}/>
          <DetailView label="Nama Produk" value={data.name} />
          <DetailView label="Harga" value={data.price} />
          <DetailView label="Deskripsi" value={data.description} />
          <DetailView label="Kategori" value={data.category} />
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
