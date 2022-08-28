import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
// import { useAddTodo } from './useAddTodo';
// import { todoState } from './features/todoAtom';
import { userInfo } from './features/sampleSelector';


type FormValue = {
  todo: string;
};

export const Sample: FC = () => {
  // useEffect(() => {
  //   const user = useRecoilValueLoadable(userInfo);
  // },[]) 

  // const [count, setCount] = useState(initialState)

  const user = useRecoilValueLoadable(userInfo);
  console.log(user);

  if(user.state === 'loading') {
    return (
      <div>
        <span>Loadin.</span>
      </div>
    )
  }

  // if(user.state === 'hasError') {
  //   return (<>err</>)
  // }

  // return (
  //   <>
  //       ID:{user.contents.id}
  //       ユーザID:{user.contents.userId}
  //       タイトル:{user.contents.title}
  //   </>
  // );
  return (
    <>
aas
    </>
  );
};
