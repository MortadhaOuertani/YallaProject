import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiLogOut } from "react-icons/fi";

import AddRoadIcon from "@mui/icons-material/AddRoad";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import AddIcon from "@mui/icons-material/Add";

import ChatIcon from "@mui/icons-material/Chat";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import LocationSearchingOutlinedIcon from "@mui/icons-material/LocationSearchingOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import MarkunreadMailboxOutlinedIcon from "@mui/icons-material/MarkunreadMailboxOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ForkRightIcon from '@mui/icons-material/ForkRight';
export const menus = [
  {
    title: "Generale",
  },
  { name: "Dashboard", link: "/dashboard", icon: DashboardOutlinedIcon },
  { name: "Mes Livraisons", link: "/messages", icon: IosShareOutlinedIcon },
  {
    name: "Mes Annonces",
    link: "/notifications",
    icon: MarkunreadMailboxOutlinedIcon,
  },
  {
    name: "Mes trajets",
    link: "/trajets",
    icon: ForkRightIcon,
  },
  {
    title: "Mes outils",
  },
  {
    name: "Ajouter une annonce",
    link: "/ajouter-une-annonce",
    icon: AddIcon,
  },
  {
    name: "Crée un trajet",
    link: "/ajouter-un-trajet",
    icon: AddRoadIcon,
  },
  {
    name: "Chercher un colis",
    link: "/chercher-un-colis",
    icon: ManageSearchIcon,
  },
  {
    name: "Carnet d'adresse",
    link: "/carnet-d-adresse",
    icon: StickyNote2OutlinedIcon,
  },
  {
    name: "Mes paiements ",
    link: "/payments",
    icon: AttachMoneyOutlinedIcon,
  },
];

export const bottomMenu = [
  {
    dataTooltipTarget: "tooltip-home",
    link: "/dashboard",
    type: "button",
    className:
      "inline-flex flex-col items-center justify-center p-6 hover:bg-blue-600 group cursor-pointer",

    svg: {
      w: 26,
      h: 26,
    },
    icon: DashboardOutlinedIcon,
  },
  {
    dataTooltipTarget: "tooltip-bookmark",
    link: "/messages",
    type: "button",
    className:
      "inline-flex flex-col items-center justify-center p-6 hover:bg-blue-600 group cursor-pointer",
    svg: {
      w: 26,
      h: 26,
    },
    icon: ChatBubbleOutlineOutlinedIcon,
  },
  {
    dataTooltipTarget: "tooltip-add",
    type: "button",
    className:
      "inline-flex flex-col items-center justify-center p-4 hover:bg-blue-600 group cursor-pointer",
    svg: {
      w: 32,
      h: 32,
    },
    icon: AddIcon,
  },
  {
    dataTooltipTarget: "tooltip-search",
    link: "chercher-un-colis",
    type: "button",
    className:
      "inline-flex flex-col items-center justify-center p-4 hover:bg-blue-600 group cursor-pointer",
    svg: {
      w: 32,
      h: 32,
    },
    icon: SearchOutlinedIcon,
  },
  {
    dataTooltipTarget: "tooltip-settings",
    link: "",
    type: "button",
    className:
      "inline-flex flex-col items-center justify-center p-4 hover:bg-blue-600 group cursor-pointer",
    svg: {
      w: 32,
      h: 32,
    },
    icon: MoreHorizIcon,
  },
];
