import { Fragment, useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import DetailView from "../../elements/DetailView";
import { getToken } from "../../utils/storage";
import { EyeIcon, XMarkIcon } from "@heroicons/react/24/solid";
import fetch from "../../utils/fetch";
import FormDetail from "./FormDetail";
import TableUsahaMitra from "../Mitra/UsahaMitra";

export default function Detail(props) {
  const [open, setOpen] = useState(false);
  const [buttonContent, setButtonContent] = useState("Simpan");
  const [isLoading, setIsLoading] = useState(false);
  const [umkmData, setUmkmData] = useState({
    id_owner_umkm: props.umkmData.id,
    name: props.umkmData.name,
    address: props.umkmData.address,
    phone: props.umkmData.phone,
    email: props.umkmData.email,
  });

  const handleOpen = () => {
    setOpen(!open);
  };

  const editData = async () => {
    setIsLoading(true);
    const token = getToken();
    const options = {
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/user/umkm/profil`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {
        id_owner_umkm: umkmData.id_owner_umkm,
        name: umkmData.name,
        address: umkmData.address,
        phone: umkmData.phone,
        email: umkmData.email,
      },
    };

    console.log(options);

    try {
      await fetch(options);
      setButtonContent("Simpan");
      window.location.reload(true);
    } catch (err) {
      alert(JSON.stringify(err));
    }

    setIsLoading(false);
  };

  return (
    
    <Fragment>
      <Tooltip content="View">
        <IconButton variant="text" color="blue-gray" onClick={handleOpen}>
          <EyeIcon className="h-4 w-4"/>
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        size="lg"
      >
        <div className="flex justify-between">
          <DialogHeader>Detail Mitra UMKM</DialogHeader>
          <button onClick={() => handleOpen("")}><XMarkIcon className="w-10 pr-2" /></button>
        </div>
        <DialogBody divider>
          <DetailView label="Nama Mitra" value={umkmData.name} />
          <DetailView label="Alamat Mitra" value={umkmData.address} />
          <DetailView label="No Telepon" value={umkmData.phone} />
          <DetailView label="Email" value={umkmData.email} />
        </DialogBody>
        <DialogBody divider>
        <FormDetail text="Tambah Usaha/Toko"/>
        <TableUsahaMitra id_mitra={props.umkmData.id}/>
        </DialogBody>
      </Dialog>
    </Fragment>

  );
}
