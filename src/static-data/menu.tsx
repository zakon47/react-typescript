import {PageIndex} from "../pages/index/PageIndex";
import {PagePosts} from "../pages/posts/PagePosts";
import {PagePhotos} from "../pages/photos/PagePhotos";

export interface IMenu{
  id: number
  component: any
  label: string
  href: string
  exact?: boolean
}

export const MENU: Array<IMenu> = [
  {
    id: 1,
    label: "Главная",
    href: "/",
    exact: true,
    component: PageIndex
  },
  {
    id: 1,
    label: "Посты",
    href: "/posts/:id?",
    component: PagePosts
  },
  {
    id: 1,
    label: "Фотографии",
    href: "/photos/:id?",
    component: PagePhotos
  },
]