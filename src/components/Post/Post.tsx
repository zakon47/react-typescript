import React, {FC} from 'react';
import {IPost} from "../../models/post";
import s from "./index.module.scss"

interface IProps{
  post: IPost
}
const Post:FC<IProps> = ({post}) => {
  return (
    <div className={s.wrap}>
      <div className={s.top}>
        {post.id}: {post.title}
      </div>
      <div className={s.bottom}>
        UserId: {post.userId}
      </div>
    </div>
  );
};

export {Post};