import React, {FC} from 'react';
import s from "./index.module.scss";
import { Link } from 'react-router-dom';
import {IMenu} from "../../static-data/menu";
import ClassName from "classnames";

interface IProps {
  className?: string
  list: Array<IMenu>
  delMargin?: "left" | "right"
}
const Menu:FC<IProps> = ({list, className, delMargin = "left"}) => {
  return (
    <div className={ClassName(s.wrap, s["del_margin_"+delMargin], className)}>
      {list.map(item=><Link to={item.href.replace("/:id?","")} key={item.href}>{item.label}</Link>)}
    </div>
  );
};

export {Menu};