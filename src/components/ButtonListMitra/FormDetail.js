import { Fragment, useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
  Checkbox
} from "@material-tailwind/react";

export default function FormDetail(props) {
  const { text, Header } = props;
  const [size, setSize] = useState(null);

  const handleOpen = value => setSize(value);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <Fragment>
      <div className="flex gap-3 ">
        <Button
          className="flex gap-2 bg-primary1 text-white hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none shadow-none hover:shadow-none"
          onClick={() => handleOpen("lg")}
        >
          <PlusIcon className="w-5" />
          {text ? text : "Input"}
        </Button>
      </div>
      <Dialog open={size === "lg"} handler={handleOpen}>
        <DialogHeader>{Header}</DialogHeader>
        <DialogBody divider>
          {/* form  seperti login dan button*/}
          <form className="w-90" onSubmit={handleSubmit}>
            {/* nama */}
            <div className="my-4 flex justify-between items-center">
              <label
                htmlFor="name"
                className="block font-medium text-lg text-black mr-10 w-64"
              >
                Nama Usaha
              </label>
              <input className="w-full  border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1" />
            </div>
            {/* alamat */}
            <div className="my-4 flex justify-between items-center">
              <label
                htmlFor="name"
                className="block font-medium text-lg text-black mr-10 w-64"
              >
                Alamat Usaha
              </label>
              <input className="w-full  border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1" />
            </div>
            {/* no telepon */}
            <div className="my-4 flex justify-between items-center">
              <label
                htmlFor="name"
                className="block font-medium text-lg text-black mr-10 w-64"
              >
                No Telepon
              </label>
              <input className="w-full  border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1" />
            </div>
            {/* Aspek Usaha */}
            <div className="my-4 flex justify-between items-center">
              <label
                htmlFor="name"
                className="block font-medium text-lg text-black mr-10 w-64"
              >
                Aspek Usaha
              </label>
              <input className="w-full  border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1" />
            </div>
            {/* Perkiraan Omzet */}
            <div className="my-4 flex justify-between items-center">
              <label
                htmlFor="name"
                className="block font-medium text-lg text-black mr-10 w-64"
              >
                Perkiraan Omzet
              </label>
              <input className="w-full border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1" />
            </div>
            {/* Kategori */}
            <div className="my-4 flex justify-between items-center">
              <label
                htmlFor="name"
                className="block font-medium text-lg text-black mr-10 w-64"
              >
                Kategori
              </label>
              <div className="flex flex-col w-full">
                {/* list item row-1 */}
                <List className="flex-row gap-2">
                  <ListItem className="p-0">
                    <label
                      htmlFor="horizontal-list-react"
                      className="px-3 py-2 flex items-center w-full cursor-pointer"
                    >
                      <ListItemPrefix className="mr-3">
                        <Checkbox
                          id="horizontal-list-react"
                          ripple={false}
                          className="hover:before:opacity-0"
                          containerProps={{
                            className: "p-0"
                          }}
                        />
                      </ListItemPrefix>
                      <Typography color="blue-gray" className="font-medium">
                        Kuliner
                      </Typography>
                    </label>
                  </ListItem>
                  <ListItem className="p-0">
                    <label
                      htmlFor="horizontal-list-react"
                      className="px-3 py-2 flex items-center w-full cursor-pointer"
                    >
                      <ListItemPrefix className="mr-3">
                        <Checkbox
                          id="horizontal-list-react"
                          ripple={false}
                          className="hover:before:opacity-0"
                          containerProps={{
                            className: "p-0"
                          }}
                        />
                      </ListItemPrefix>
                      <Typography color="blue-gray" className="font-medium">
                        Fashion
                      </Typography>
                    </label>
                  </ListItem>
                  <ListItem className="p-0">
                    <label
                      htmlFor="horizontal-list-react"
                      className="px-3 py-2 flex items-center w-full cursor-pointer"
                    >
                      <ListItemPrefix className="mr-3">
                        <Checkbox
                          id="horizontal-list-react"
                          ripple={false}
                          className="hover:before:opacity-0"
                          containerProps={{
                            className: "p-0"
                          }}
                        />
                      </ListItemPrefix>
                      <Typography color="blue-gray" className="font-medium">
                        Jasa
                      </Typography>
                    </label>
                  </ListItem>
                </List>
                {/* list item row-2 */}
                <List className="flex-row w-full gap-2">
                  <ListItem className="p-0">
                    <label
                      htmlFor="horizontal-list-react"
                      className="px-3 py-2 flex items-center w-full cursor-pointer"
                    >
                      <ListItemPrefix className="mr-3">
                        <Checkbox
                          id="horizontal-list-react"
                          ripple={false}
                          className="hover:before:opacity-0"
                          containerProps={{
                            className: "p-0"
                          }}
                        />
                      </ListItemPrefix>
                      <Typography color="blue-gray" className="font-medium">
                        Kerajinan Tangan
                      </Typography>
                    </label>
                  </ListItem>
                  <ListItem className="p-0">
                    <label
                      htmlFor="horizontal-list-react"
                      className="px-3 py-2 flex items-center w-full cursor-pointer"
                    >
                      <ListItemPrefix className="mr-3">
                        <Checkbox
                          id="horizontal-list-react"
                          ripple={false}
                          className="hover:before:opacity-0"
                          containerProps={{
                            className: "p-0"
                          }}
                        />
                      </ListItemPrefix>
                      <Typography color="blue-gray" className="font-medium">
                        Tanaman
                      </Typography>
                    </label>
                  </ListItem>
                  <ListItem className="p-0">
                    <label
                      htmlFor="horizontal-list-react"
                      className="px-3 py-2 flex items-center w-full cursor-pointer"
                    >
                      <ListItemPrefix className="mr-3">
                        <Checkbox
                          id="horizontal-list-react"
                          ripple={false}
                          className="hover:before:opacity-0"
                          containerProps={{
                            className: "p-0"
                          }}
                        />
                      </ListItemPrefix>
                      <Typography color="blue-gray" className="font-medium">
                        Otomotif
                      </Typography>
                    </label>
                  </ListItem>
                  <ListItem className="p-0">
                    <label
                      htmlFor="horizontal-list-react"
                      className="px-3 py-2 flex items-center w-full cursor-pointer"
                    >
                      <ListItemPrefix className="mr-3">
                        <Checkbox
                          id="horizontal-list-react"
                          ripple={false}
                          className="hover:before:opacity-0"
                          containerProps={{
                            className: "p-0"
                          }}
                        />
                      </ListItemPrefix>
                      <Typography color="blue-gray" className="font-medium">
                        Lainnya
                      </Typography>
                    </label>
                  </ListItem>
                </List>
              </div>
            </div>
            {/* input profile */}
            <div className="my-4 flex justify-between items-center">
              <label
                htmlFor="name"
                className="block font-medium text-lg text-black mr-10 w-64"
              >
                Profile UMKM
              </label>
              <input
                className="absolute ml-[15.5rem] file:bg-gradient-to-b file:from-primary1 file:to-amber-500 file:px-6 file:py-3 file:n-5 file:border-none file:rounded-2xl file:text-white file:cursor-pointer file:shadow-lg file:shadow-amber-500/50 text-black/80 rounded-2xl cursor-pointer "
                type="file"
              />
            </div>
          </form>
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
            onClick={() => handleOpen(null)}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
