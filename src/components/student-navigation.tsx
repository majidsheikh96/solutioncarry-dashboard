"use client";

import { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserIcon, BookOpen, Clock, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export const StudentNavigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white p-4 border-b">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">Student Dashboard</div>
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <UserIcon className="h-4 w-4 mr-2" />
              Profile
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem asChild>
              <Link
                href="/my-library"
                className="flex items-center cursor-pointer"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                My Library
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href="/recent-activity"
                className="flex items-center cursor-pointer"
              >
                <Clock className="h-4 w-4 mr-2" />
                Recent Activity
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href="/settings"
                className="flex items-center cursor-pointer"
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/logout" className="flex items-center cursor-pointer">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default StudentNavigation;
