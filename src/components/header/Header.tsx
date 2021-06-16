import React from 'react';
import s from "./index.module.scss";
import {Menu} from "../menu/Menu";
import {MENU} from "../../static-data/menu";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={s.wrap}>
      <div className={s.left}>
        <Link to={"/"}>LOGO</Link>
      </div>
      <div className={s.right}>
        <Menu list={MENU} className={s.menu} delMargin={"right"}/>
      </div>
    </div>
  );
};

export {Header};