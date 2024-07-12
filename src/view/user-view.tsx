"use client";

// Components Import
import Button from "@/components/button";
import DataSheet from "@/components/data-sheet";

// Service Imports
import { GetAllProductsHook } from "@/service/query/users/get-user";

// React Imports
import { useState } from "react";

export default function UserView() {
  const [userId, setUserId] = useState(1);

  const { data } = GetAllProductsHook(userId);

  return (
    <div className="p-6">
      <DataSheet
        email={data?.email || "Email"}
        name={data?.name || "Name"}
        number={data?.phone || "Number"}
        website={data?.website || "Website"}
      />

      <div className="inline-flex">
        <Button
          isDisable={userId < 2}
          text="Prev"
          onCLick={() => setUserId(userId - 1)}
          className="rounded-l"
        />

        <Button
          isDisable={userId > 9}
          text="Next"
          onCLick={() => setUserId(userId + 1)}
          className="rounded-r"
        />
      </div>
    </div>
  );
}
