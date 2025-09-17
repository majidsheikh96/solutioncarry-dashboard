"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Search,
  Menu,
  Bell,
  User,
  Settings,
  LogOut,
  Briefcase,
  Trophy,
  Crown,
  FileText,
  Wallet,
  BarChart3,
  Package,
  Star,
  Download,
  PlusCircle,
  ChevronDown,
  BookOpen,
  MessageSquare,
  MessageCircle,
  Gift,
  CreditCard,
  Shield,
  Users,
} from "lucide-react";

interface FreelancerNavigationProps {
  userType?: "freelancer" | "student";
}

export function FreelancerNavigation({
  userType = "freelancer",
}: FreelancerNavigationProps) {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const [notifications] = useState([
    {
      id: 1,
      title: "New project proposal received",
      message:
        "Sarah Johnson sent you a proposal for 'E-commerce Website Development'",
      time: "2 min ago",
      unread: true,
    },
    {
      id: 2,
      title: "Payment received",
      message: "$2,500 payment for 'Mobile App UI Design' has been processed",
      time: "1 hour ago",
      unread: true,
    },
    {
      id: 3,
      title: "Project milestone completed",
      message: "Mike Chen approved milestone 2 for 'React Dashboard Project'",
      time: "3 hours ago",
      unread: false,
    },
  ]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to search results
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SC</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                SolutionCarry
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {/* Browse Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`px-4 py-2 transition-all duration-200 ${
                    pathname.startsWith("/browse")
                      ? "bg-green-600 text-white hover:bg-green-700 shadow-md"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <span className="text-sm font-medium mr-2">Browse</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuLabel>Browse Categories</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/browse/projects" className="flex items-center">
                    <Briefcase className="mr-2 h-4 w-4" />
                    Projects
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/browse/freelancers"
                    className="flex items-center"
                  >
                    <Users className="mr-2 h-4 w-4" />
                    Freelancers
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/browse/memberships"
                    className="flex items-center"
                  >
                    <Crown className="mr-2 h-4 w-4" />
                    Memberships
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/browse/get-verified"
                    className="flex items-center"
                  >
                    <Shield className="mr-2 h-4 w-4" />
                    Get Verified
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/browse/clients" className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    Clients
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/browse/reviews" className="flex items-center">
                    <Star className="mr-2 h-4 w-4" />
                    Reviews
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Find Work Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`px-4 py-2 transition-all duration-200 ${
                    pathname.startsWith("/find-work")
                      ? "bg-green-600 text-white hover:bg-green-700 shadow-md"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <span className="text-sm font-medium mr-2">Find Work</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuLabel>Find Opportunities</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link
                    href="/find-work/projects"
                    className="flex items-center"
                  >
                    <Briefcase className="mr-2 h-4 w-4" />
                    Projects
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/find-work/contests"
                    className="flex items-center"
                  >
                    <Trophy className="mr-2 h-4 w-4" />
                    Contests
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/find-work/services"
                    className="flex items-center"
                  >
                    <Package className="mr-2 h-4 w-4" />
                    Services
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Manage Finances Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`px-4 py-2 transition-all duration-200 ${
                    pathname.startsWith("/finances")
                      ? "bg-green-600 text-white hover:bg-green-700 shadow-md"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <span className="text-sm font-medium mr-2">
                    Manage Finances
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuLabel>Financial Management</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/finances/overview" className="flex items-center">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Financial Overview
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/finances/billing" className="flex items-center">
                    <FileText className="mr-2 h-4 w-4" />
                    Billing & Earnings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/finances/transactions"
                    className="flex items-center"
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Transactions & Invoices
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/finances/withdraw" className="flex items-center">
                    <Wallet className="mr-2 h-4 w-4" />
                    Withdrawal Earnings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link
                    href="/finances/add-funds"
                    className="flex items-center"
                  >
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Funds
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/finances/tax-forms"
                    className="flex items-center"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Tax Forms
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/finances/tax-information"
                    className="flex items-center"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Tax Information
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search projects, freelancers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 w-full"
                />
              </div>
            </form>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="h-5 w-5" />
                  {notifications.filter((n) => n.unread).length > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-red-500 text-white text-xs">
                      {notifications.filter((n) => n.unread).length}
                    </Badge>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-80 max-h-96 overflow-y-auto"
                align="end"
              >
                <div className="p-3 border-b">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-sm">Notifications</h3>
                    <Badge variant="secondary" className="text-xs">
                      {notifications.filter((n) => n.unread).length} new
                    </Badge>
                  </div>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.slice(0, 5).map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-3 border-b hover:bg-gray-50 cursor-pointer transition-colors ${
                        notification.unread ? "bg-blue-50" : ""
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div
                          className={`w-2 h-2 rounded-full mt-2 ${
                            notification.unread ? "bg-blue-500" : "bg-gray-300"
                          }`}
                        ></div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm text-gray-900 truncate">
                            {notification.title}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t bg-gray-50">
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-xs bg-transparent"
                    >
                      Mark All Read
                    </Button>
                    <Link href="/notifications" className="flex-1">
                      <Button
                        size="sm"
                        className="w-full text-xs bg-blue-600 hover:bg-blue-700"
                      >
                        View All
                      </Button>
                    </Link>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">John Doe</p>
                    <p className="w-[200px] truncate text-sm text-muted-foreground">
                      john.doe@example.com
                    </p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/my-library" className="flex items-center">
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>My Library</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/achievements" className="flex items-center">
                    <Star className="mr-2 h-4 w-4" />
                    <span>Achievements</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/subscription" className="flex items-center">
                    <Crown className="mr-2 h-4 w-4" />
                    <span>Subscription</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/my-questions" className="flex items-center">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span>My Questions</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/chat" className="flex items-center">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    <span>Messages</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/progress" className="flex items-center">
                    <Star className="mr-2 h-4 w-4" />
                    <span>Learning Progress</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/invite-friends" className="flex items-center">
                    <Gift className="mr-2 h-4 w-4" />
                    <span>Invite Friends</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/referrals" className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    <span>Referrals</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/billing" className="flex items-center">
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing & Payments</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/feedback" className="flex items-center">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    <span>Feedback & Suggestions</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/privacy" className="flex items-center">
                    <Shield className="mr-2 h-4 w-4" />
                    <span>Privacy Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/notifications" className="flex items-center">
                    <Bell className="mr-2 h-4 w-4" />
                    <span>Notification Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/settings" className="flex items-center">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/logout"
                    className="flex items-center text-red-600"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {/* Mobile Search */}
                  <form onSubmit={handleSearch}>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </form>

                  {/* Mobile Navigation */}
                  <nav className="space-y-4">
                    {/* Browse Section */}
                    <div className="space-y-2">
                      <h3 className="font-semibold text-green-600 px-2">
                        Browse
                      </h3>
                      <Link href="/browse/projects">
                        <Button
                          variant={
                            isActive("/browse/projects") ? "default" : "ghost"
                          }
                          className={`w-full justify-start ${
                            isActive("/browse/projects")
                              ? "bg-green-600 text-white"
                              : ""
                          }`}
                        >
                          <Briefcase className="mr-2 h-4 w-4" />
                          Projects
                        </Button>
                      </Link>
                      <Link href="/browse/freelancers">
                        <Button
                          variant={
                            isActive("/browse/freelancers")
                              ? "default"
                              : "ghost"
                          }
                          className={`w-full justify-start ${
                            isActive("/browse/freelancers")
                              ? "bg-green-600 text-white"
                              : ""
                          }`}
                        >
                          <Users className="mr-2 h-4 w-4" />
                          Freelancers
                        </Button>
                      </Link>
                      <Link href="/browse/memberships">
                        <Button
                          variant={
                            isActive("/browse/memberships")
                              ? "default"
                              : "ghost"
                          }
                          className={`w-full justify-start ${
                            isActive("/browse/memberships")
                              ? "bg-green-600 text-white"
                              : ""
                          }`}
                        >
                          <Crown className="mr-2 h-4 w-4" />
                          Memberships
                        </Button>
                      </Link>
                    </div>

                    {/* Find Work Section */}
                    <div className="space-y-2">
                      <h3 className="font-semibold text-green-600 px-2">
                        Find Work
                      </h3>
                      <Link href="/find-work/projects">
                        <Button
                          variant={
                            isActive("/find-work/projects")
                              ? "default"
                              : "ghost"
                          }
                          className={`w-full justify-start ${
                            isActive("/find-work/projects")
                              ? "bg-green-600 text-white"
                              : ""
                          }`}
                        >
                          <Briefcase className="mr-2 h-4 w-4" />
                          Projects
                        </Button>
                      </Link>
                      <Link href="/find-work/contests">
                        <Button
                          variant={
                            isActive("/find-work/contests")
                              ? "default"
                              : "ghost"
                          }
                          className={`w-full justify-start ${
                            isActive("/find-work/contests")
                              ? "bg-green-600 text-white"
                              : ""
                          }`}
                        >
                          <Trophy className="mr-2 h-4 w-4" />
                          Contests
                        </Button>
                      </Link>
                    </div>

                    {/* Finances Section */}
                    <div className="space-y-2">
                      <h3 className="font-semibold text-green-600 px-2">
                        Manage Finances
                      </h3>
                      <Link href="/finances/overview">
                        <Button
                          variant={
                            isActive("/finances/overview") ? "default" : "ghost"
                          }
                          className={`w-full justify-start ${
                            isActive("/finances/overview")
                              ? "bg-green-600 text-white"
                              : ""
                          }`}
                        >
                          <BarChart3 className="mr-2 h-4 w-4" />
                          Financial Overview
                        </Button>
                      </Link>
                      <Link href="/finances/billing">
                        <Button
                          variant={
                            isActive("/finances/billing") ? "default" : "ghost"
                          }
                          className={`w-full justify-start ${
                            isActive("/finances/billing")
                              ? "bg-green-600 text-white"
                              : ""
                          }`}
                        >
                          <FileText className="mr-2 h-4 w-4" />
                          Billing & Earnings
                        </Button>
                      </Link>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
