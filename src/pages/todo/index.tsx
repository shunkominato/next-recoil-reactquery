import { NextPage } from 'next';
// import { FixedLayout } from "src/layout";
import { Todo } from './components/Todo';

const TodoPage: NextPage = () => {
  return <Todo />;
};

// AboutPage.getLayout = FixedLayout;
export default TodoPage;
