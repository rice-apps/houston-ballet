"use client"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";

type Props = {
    vendorPhoto: string
    vendorName: string
    vendorDescription: string
    website: string
    categories: string[]
  }

  export default function VendorCard(props: Props) {
    return (
      <div className="max-w-[24rem] rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1">
        <div className="relative">
          <div className="w-32 h-32 overflow-hidden">
            <img
              src={props.vendorPhoto}
              alt="photo of vendor"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <Card className="rounded-lg rounded-t-none">
          <CardBody className="p-4">
            <Typography variant="h4" color="blue-gray" className="text-xl font-semibold mb-2">
              {props.vendorName}
            </Typography>
            <Typography variant="lead" color="gray" className="mt-3 font-normal text-sm">
              {props.vendorDescription}
            </Typography>
            <a href={props.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mt-3 block">
              {props.website}
            </a>
          </CardBody>
  
          <CardFooter className="p-4">
            {props.categories.map((category, index) => (
              <span
                key={index}
                className="inline-block bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
              >
                {category}
              </span>
            ))}
          </CardFooter>
        </Card>
      </div>
    );
  }
  
  
  