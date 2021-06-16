import React from 'react';
import s from "./index.module.scss";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const PagePhotos = () => {
  const {data} = useTypedSelector(state => state)
  if(!data.photos) return <div>Loading...</div>
  return (
    <>
      {data.photos.length ? data.photos?.map(item=>(
        <div className={s.item} key={item.id}>
          <div>{item.id} - {item.title}</div>
        </div>
      )) : <div>Список пуст</div>}
    </>
  );
};

export {PagePhotos};