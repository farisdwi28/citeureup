import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";

import { MapPinIcon } from "@heroicons/react/24/solid";

const NewsCard = props => {
  const { img, title, description } = props;
  return (
    <Card className="mt-6 w-96">
      <CardHeader className="relative h-56">
        <img src={img} layout="fill" className="w-full h-full" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="flex items-center gap-1.5">
          <MapPinIcon className="-mt-0.5 h-5 w-5" />
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 ">
        <Button className="text-primary1 border border-primary1 rounded-full bg-tranparent shadow-none hover:shadow-none">
          Lihat Selengkapnya
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
