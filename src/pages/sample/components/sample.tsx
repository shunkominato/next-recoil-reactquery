import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
// import { useAddTodo } from './useAddTodo';
// import { todoState } from './features/todoAtom';
import { userInfo } from './features/sampleSelector';
import { useSampleQuery } from './features/useSampleQuery';

type FormValue = {
  todo: string;
};

export const Sample: FC = () => {
  // useEffect(() => {
  //   const user = useRecoilValueLoadable(userInfo);
  // },[])

  // const [count, setCount] = useState(initialState)

  const user = useSampleQuery();
  console.log(user);

  if (user.isLoading) {
    return (
      <div>
        <span>Loadin.</span>
      </div>
    );
  }

  // if(user.state === 'hasError') {
  //   return (<>err</>)
  // }

  return (
    <>
        ID:{user?.data?.id}
        ユーザID:{user.data?.userId}
        タイトル:{user.data?.title}
    </>
  );
};
