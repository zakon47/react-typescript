import React, {useEffect} from 'react';
import s from "./index.module.scss";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Post} from "../../components/Post/Post";
import {Link, useRouteMatch} from 'react-router-dom';
import {useActions} from "../../hooks/useAction";

interface MatchParams {
  id?: string;
}

const PagePosts = () => {
  const {data} = useTypedSelector(state => state)
  const {data__getPostById} = useActions()
  const {params} = useRouteMatch<MatchParams>()

  const id = params.id ? parseInt(params.id, 10) || -1 : -1;

  useEffect(()=>{
    if(id >= 0){
      data__getPostById(id)
    }
  },[id])

  if(!data.posts) return <div>Loading...</div>
  return (
    <div className={s.wrap}>
      {id >= 0 ? (
        <div>
          <Link to={"/posts"}>Назад</Link>
          <hr/>
          {!!data.post ? <Post post={data.post}/> : <div>Loading...</div>}
        </div>
      ) : (
        data.posts.length ? data.posts?.map(item=>(
           <Link to={`/posts/${item.id}`} key={item.id}><Post post={item}/></Link>
        )) : <div>Список пуст</div>
      )}
    </div>
  );
};

export {PagePosts};