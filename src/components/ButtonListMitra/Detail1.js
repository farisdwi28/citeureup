import { Fragment, useState, useEffect } from "react";
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

export default function Detail1(props) {
  console.log(props)
  const [open, setOpen] = useState(false);
  const [buttonContent, setButtonContent] = useState("Simpan");
  const [isLoading, setIsLoading] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const getData = async () => {
    const token = getToken();
    setIsLoading(true);
    const options = {
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/store`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    try {
      const response = await fetch(options);

    } catch (err) {
      alert(JSON.stringify(err));
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  // const editData = async () => {
  //   setIsLoading(true);
  //   const token = getToken();
  //   const options = {
  //     method: "POST",
  //     url: `${process.env.REACT_APP_API_URL}/user/umkm/profil`,
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     },
  //     data: {
  //       id_owner_umkm: umkmData.id_owner_umkm,
  //       name: umkmData.name,
  //       address: umkmData.address,
  //       phone: umkmData.phone,
  //       email: umkmData.email,
  //     },
  //   };

  //   console.log(options);

  //   try {
  //     await fetch(options);
  //     setButtonContent("Simpan");
  //     window.location.reload(true);
  //   } catch (err) {
  //     alert(JSON.stringify(err));
  //   }

  //   setIsLoading(false);
  // };

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
          <DetailView label="Nama Mitra" value={props.umkmData && props.umkmData.user && props.umkmData.user.name} />
          <DetailView label="Alamat Mitra" value={props.umkmData && props.umkmData.user && props.umkmData.user.address} />
          <DetailView label="No Telepon" value={props.umkmData && props.umkmData.user && props.umkmData.user.phone} />
          <DetailView label="Email" value={props.umkmData && props.umkmData.user && props.umkmData.user.email} />
        </DialogBody>
        <DialogBody divider>
        <FormDetail text="Tambah Usaha/Toko"/>
        <TableUsahaMitra id_mitra={props.umkmData.user.id}/>
        </DialogBody>
      </Dialog>
    </Fragment>

  );
}
