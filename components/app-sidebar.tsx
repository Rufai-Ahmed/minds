"use client";
import {
  BoxIcon,
  ChevronRight,
  Cog,
  Grid3X3,
  LayoutDashboard,
  LogOut,
  MessageCircle,
  StarIcon,
  User,
} from "lucide-react";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { bebas } from "@/lib/font";
import Image from "next/image";
import { usePathname } from "next/navigation";

const topMenuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: StarIcon, label: "Role play", href: "/role-play" },
  { icon: BoxIcon, label: "Power skill", href: "/power-skill" },
  { icon: Grid3X3, label: "Ongoing", href: "/ongoing" },
];

const bottomMenuItems = [
  { icon: Cog, label: "Settings", href: "/settings" },
  { icon: MessageCircle, label: "Support", href: "/support" },
];

const profileDropdownItems = [
  { icon: User, label: "Profile", onClick: () => {} },
  { icon: Cog, label: "Settings", onClick: () => {} },
  {
    icon: LogOut,
    label: "Log out",
    onClick: () => {},
    className: "text-red-600",
  },
];

const userProfile = {
  name: "Sara Adams",
  email: "saraadams@gmail.com",
  avatar: "/path-to-profile-pic.jpg",
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div
          className={`px-4 py-3 font-bold text-5xl text-black ${bebas.className}`}
        >
          Logo
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4">
        <SidebarMenu>
          {topMenuItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton
                className={`text-[16px] py-[10px] duration-300 ${
                  isActive(item.href) && "bg-[#F3F3F3]"
                }`}
                asChild
              >
                <a href={item.href}>
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>

                  <ChevronRight className="group-hover:block hidden ml-auto size-10" />
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          {bottomMenuItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton
                className={`text-[16px] py-[10px] duration-300 ${
                  isActive(item.href) && "bg-[#F3F3F3]"
                }`}
                asChild
              >
                <a href={item.href}>
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}

          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="h-[50px] group-hover:bg-[#F3F3F3] py-10">
                  <div className="flex items-center gap-3">
                    <div className="size-[46px] rounded-full bg-gray-200 overflow-hidden">
                      <Image
                        src={userProfile.avatar}
                        width={100}
                        height={100}
                        alt="Profile"
                        className="size-[46px] object-cover"
                      />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-medium">{userProfile.name}</span>
                      <span className="text-[13px]">{userProfile.email}</span>
                    </div>
                  </div>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                {profileDropdownItems.map((item) => (
                  <DropdownMenuItem
                    key={item.label}
                    onClick={item.onClick}
                    className={item.className}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    <span>{item.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
