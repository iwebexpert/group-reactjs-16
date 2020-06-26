import { AboutPage } from "pages/AboutPage";
import { PageNotFound } from "pages/PageNotFound";
import { ProfilePage } from "pages/ProfilePage";
import { Messenger } from "components/Messenger";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Messenger,
  },
  {
    path: "/about",
    exact: true,
    component: AboutPage,
  },
  {
    path: "/profile",
    exact: true,
    component: ProfilePage,
  },
  {
    path: "/chats/:id",
    exact: true,
    component: Messenger,
  },
  {
    path: "*",
    exact: false,
    component: PageNotFound,
  },
];
