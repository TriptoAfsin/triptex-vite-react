import { Code2, House } from "lucide-react";

export const APP_CONFIG = {
  name: "Triptex Vite React Boilerplate",
  logoIcon: "/txb.png",
  colorPrimary: "#377fcc",
  colorSecondary: "#000000",
  appLink: "https://play.google.com/store/apps/details?id=com.hawkers.notebot",
  botLink: "https://www.messenger.com/t/103148557940299",
  submitLink: "https://forms.gle/RjPXedjRDim4YE6P8",
  founder: {
    name: "Afshin Nahian Tripto",
    github: "https://github.com/TriptoAfsin",
    web: "https://www.triptex.me/",
  },
};

export const APP_HEADER_MENU = [
  {
    id: 0,
    icon: <House size={20} strokeWidth={1.5} />,
    label: "Home",
    href: "/",
  },
  {
    id: 2434,
    icon: <Code2 size={20} strokeWidth={1.5} />,
    label: "Github",
    href: "https://github.com/TriptoAfsin/triptex-vite-react-boilerplate",
    isExternal: true,
  },
];
