import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Services",
    path: "/services",
    newTab: false,
  },
  {
    id: 3,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 5,
    title: "More",
    newTab: false,
    submenu: [
      {
        id: 50,
        title: "Hire",
        path: "/hire",
        newTab: false,
      },
      {
        id: 49,
        title: "Portfolio",
        path: "/portfolio",
        newTab: false,
      },
      {
        id: 51,
        title: "Privacy Policy",
        path: "/privacy-policy",
        newTab: false,
      },
      {
        id: 52,
        title: "Terms of Services",
        path: "/tos",
        newTab: false,
      },
      // {
      //   id: 53,
      //   title: "Refund Policy",
      //   path: "/privacy-policy",
      //   newTab: false,
      // },
      {
        id: 54,
        title: "Careers",
        path: "/careers",
        newTab: false,
      },
    ],
  },
];
export default menuData;
