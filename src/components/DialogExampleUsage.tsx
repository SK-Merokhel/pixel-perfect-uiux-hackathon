// src/components/DialogExampleUsage.tsx
"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/ui/DialogExample"; // Correct path to Dialog components
import { Button } from "@/ui/sheet"; // Correct path to Button component

const DialogExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Trigger Button */}
      <DialogTrigger asChild>
        <Button variant="default">Open Dialog</Button>
      </DialogTrigger>

      {/* Dialog Content */}
      <DialogContent className="p-6 rounded-lg shadow-lg">
        {/* Accessible Title */}
        <DialogTitle>Dialog Title</DialogTitle>

        {/* Content */}
        <p className="text-gray-600 mt-2">
          This is the content inside the dialog modal.
        </p>

        {/* Close Button */}
        <DialogClose asChild>
          <Button variant="outline" className="mt-4">
            Close
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default DialogExample;
