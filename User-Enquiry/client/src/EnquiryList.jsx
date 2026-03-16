import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import axios from "axios";
import { toast } from "react-toastify";

function EnquiryList({ callData, gformData, setFormData }) {
  useEffect(() => {
    callData();
  }, []);

  const dltRow = (id) => {
    axios
      .delete(`http://localhost:8000/api/website/enquiry/delete/${id}`)
      .then(() => {
        console.log("deleted"), toast.success("deleted"), callData();
      })
      .catch((err) => console.log(err));
    // alert(id)
  };

  const updateRow = (id) => {
    axios
      .get(`http://localhost:8000/api/website/enquiry/find/${id}`)
      .then((res) => {
        setFormData(res.data.enquiry);
        toast.success("showed");
      })
      .catch((err) => {
        console.log(err), toast.error("failed");
      });
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Sr no</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>Phone Number</TableHeadCell>
            <TableHeadCell>Message</TableHeadCell>
            <TableHeadCell>
              <span className=" text-white">Delete</span>
            </TableHeadCell>
            <TableHeadCell>
              <span className=" text-white">Edit</span>
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          {gformData.length >= 1
            ? gformData.map((formData, index) => {
                return (
                  <TableRow
                    key={index}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {index + 1}
                    </TableCell>
                    <TableCell>{formData.name}</TableCell>
                    <TableCell>{formData.email}</TableCell>
                    <TableCell>{formData.number}</TableCell>
                    <TableCell>{formData.message}</TableCell>
                    <TableCell>
                      <button
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        onClick={() => dltRow(formData._id)}
                      >
                        Delete
                      </button>
                    </TableCell>
                    <TableCell>
                      <button
                        onClick={() => updateRow(formData._id)}
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Edit
                      </button>
                    </TableCell>
                  </TableRow>
                );
              })
            : "no data"}
        </TableBody>
      </Table>
    </div>
  );
}

export default EnquiryList;
