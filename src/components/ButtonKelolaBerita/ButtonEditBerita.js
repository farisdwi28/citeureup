import { Fragment, useState } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Switch,
} from "@material-tailwind/react";
import { getToken } from "../../utils/storage";
import fetch from "../../utils/fetch";
import Loading from "../../elements/Spinner";
import { useForm } from "react-hook-form";
import Toggle from "../../elements/Switch";

export default function EditNews(props) {
  const [buttonContent, setButtonContent] = useState("Simpan");
  const [isLoading, setIsLoading] = useState(false);
  const [size, setSize] = useState(null);

  const handleOpen = (value) => setSize(value);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      title: props.prev.title,
      posted_date: new Date(new Date(props.prev.posted_date).toString()).toISOString().split('T')[0],
      description: props.prev.description,
      status: props.prev.status
    }
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setValue("file", file);
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    const token = getToken();

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("posted_date", data.posted_date);
    formData.append("description", data.description);
    formData.append("status", data.status);
    formData.append("file", data.file);

    const options = {
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/news/update/${props.prev.id}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "multipart/form-data",
      },
      data: formData,
    };

    try {
      if (window.confirm("Apakah data telah sesuai?")) {
        setButtonContent("Sukses Menyimpan!");
        await fetch(options);
        window.location.reload(true);
      }
    } catch (err) {
      alert(JSON.stringify(err));
    }

    setIsLoading(false);
  };

  return (
    <Fragment>
      <IconButton variant="text" color="blue-gray" onClick={() => handleOpen("lg")}>
        <PencilIcon className="h-4 w-4" />
      </IconButton>
      <Dialog open={size === "lg"} handler={handleOpen}>
        <DialogHeader>Edit Berita</DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}> {/* Move the form tag here */}
          <DialogBody divider>
            {/* title */}
            <div className="my-4 flex justify-between items-center">
              <label
                htmlFor="name"
                className="block font-medium text-lg text-black mr-10 w-64"
              >
                Judul Berita
              </label>
              <input
                name="title"
                {...register("title", { required: true })}
                className="w-full text-black border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
              />
            </div>
            {/* posted_date */}
            <div className="my-4 flex justify-between items-center">
              <label
                htmlFor="name"
                className="block font-medium text-lg text-black mr-10 w-64"
              >
                Tanggal Berita
              </label>
              <input
                name="posted_date"
                {...register("posted_date", { required: true })}
                className="w-full text-black border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                type="date"
              />
            </div>
            {/* file */}
            <div className="my-4 flex justify-between items-center">
              <label
                htmlFor="name"
                className="block font-medium text-lg text-black mr-10 w-64"
              >
                Cover Berita
              </label>
              <input
                name="file"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full file:bg-gradient-to-b file:from-primary1 file:to-amber-500 file:px-6 file:py-3 file:n-5 file:border-none file:rounded-2xl file:text-white file:cursor-pointer file:shadow-lg file:shadow-amber-500/50 text-black/80 rounded-2xl cursor-pointer"
              />
            </div>
            <div className="my-4 flex justify-left items-center">
              <label
                htmlFor="name"
                className="block font-medium text-lg text-black mr-10 w-48"
              >Aktif</label>
              <Switch defaultChecked={props.prev.status} {...register("status")}/>
            </div>
            {/* Isi Berita */}
            <div className="mb-2">
              <label>
                <span className="block font-medium text-lg text-black mr-10 w-64">
                  Isi Berita
                </span>
                <textarea
                  name="description"
                  {...register("description", { required: true })}
                  className="block w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary1 text-black"
                  rows="5"
                ></textarea>
              </label>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={() => handleOpen(null)}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button
              className="bg-primary1 text-white hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none shadow-none hover:shadow-none"
              type="submit"
            >
              {isLoading ? <Loading /> : buttonContent}
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </Fragment>
  );
}
