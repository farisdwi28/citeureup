import { Fragment, useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import FormBasic from "../../elements/FormBasic";
import { getToken } from "../../utils/storage";
import { PencilIcon } from "@heroicons/react/24/solid";
import Toggle from "../../elements/Switch";
import fetch from "../../utils/fetch";

export default function Edit(props) {
  const [open, setOpen] = useState(false);
  const [buttonContent, setButtonContent] = useState("Simpan");
  const [isLoading, setIsLoading] = useState(false);
  const [umkmData, setUmkmData] = useState({
    id_owner_umkm: props.umkmData.id,
    name: props.umkmData.name,
    address: props.umkmData.address,
    phone: props.umkmData.phone,
    status: props.umkmData.status,
  });
  console.log(umkmData)

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
        status: umkmData.status,
      },
    };

    console.log(options);

    try {
      await fetch(options);
      setButtonContent("Simpan")
      window.location.reload(true);
    } catch (err) {
      alert(JSON.stringify(err));
    }

    setIsLoading(false);
  };

  const editStatus = async (id) => {
    setIsLoading(true);
    const token = getToken();
    const statusValue = umkmData.status;
    const options = {
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/user/update/status/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {
        status: statusValue,
      },
    };

      try {
        await fetch(options);
        setButtonContent("Simpan");
        window.location.reload(true);
      } catch (err) {
        alert(JSON.stringify(err));
      }

      setIsLoading(false);
    };

  const handleClick = () => {
    editData()
    editStatus(umkmData.id_owner_umkm);
  }

  return (
    <Fragment>
      <Tooltip content="Edit">
        <IconButton variant="text" color="blue-gray" onClick={handleOpen}>
          <PencilIcon className="h-4 w-4" />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Edit Mitra</DialogHeader>
        <DialogBody divider>
          <FormBasic
            label="Nama"
            placeholder="Name"
            type="text"
            value={umkmData.name}
            onChangeValue={(value) => setUmkmData({ ...umkmData, name: value })}
          />
          <FormBasic
            label="Alamat"
            placeholder="Address"
            type="text"
            value={umkmData.address}
            onChangeValue={(value) =>
              setUmkmData({ ...umkmData, address: value })
            }
          />
          <FormBasic
            label="No Telp"
            placeholder="Number"
            type="text"
            value={umkmData.phone}
            onChangeValue={(value) =>
              setUmkmData({ ...umkmData, phone: value })
            }
          />
          <Toggle
            label="Status"
            value={umkmData.status}
            onChange={(value) => setUmkmData({ ...umkmData, status: value })}
          />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen("")}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={handleClick}
            disabled={isLoading}
          >
            <span>{isLoading ? "Loading..." : buttonContent}</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
