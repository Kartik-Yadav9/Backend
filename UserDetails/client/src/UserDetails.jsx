import { Button, Label, Textarea, TextInput } from "flowbite-react";
import React from "react";
import UsersList from "./UsersList";

function UserDetails() {
  return (
    <div className="py-3 font-bold px-3">
      <p className="text-4xl mx-auto w-[204px]">User Details</p>
      <div className="grid grid-cols-[30%_auto] gap-5">
        {/* form */}

        <div className="py-5 bg-gray-200 px-2">
          <p className="text-2xl ">Form</p>
          <form className="flex flex-col gap-2">
            <Label htmlFor="name">Your Name</Label>
            <TextInput id="name" type="text" placeholder="name" required />
            <Label htmlFor="email">Your Email</Label>
            <TextInput
              id="email"
              type="email"
              placeholder="name@flowbite.com"
              required
            />
            <Label htmlFor="phone">your Phone</Label>
            <TextInput id="phone" type="number" placeholder="98437" required />
            <Label htmlFor="message">your Message</Label>
            <Textarea
              id="comment"
              placeholder="Leave a comment..."
              required
              rows={4}
            />
            <Button
              type="submit"
              className="bg-blue-400 text-white py-2 px-4 rounded-2xl"
            >
              Submit
            </Button>
          </form>
        </div>
        <UsersList />
      </div>
    </div>
  );
}

export default UserDetails;
