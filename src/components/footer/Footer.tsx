import React from 'react';
import s from "./index.module.scss";
import {Menu} from "../menu/Menu";
import {MENU} from "../../static-data/menu";

const Footer = () => {
  return (
    <div className={s.wrap}>
      <div className={s.left}>
        <Menu list={MENU}/>
      </div>
      <div className={s.right}>Copyright @2150</div>
    </div>
  );
};

export {Footer};