import { NextPage } from 'next';
import { Layout } from 'src/layout/Layout';
import { SignUp } from '../../pages-component/SignUp/SignUp';

const SignUpPage: NextPage = () => {
  return (
    <Layout title="sign_up">
      <SignUp />
    </Layout>
  );
  // return <SignUp />;
};

export default SignUpPage;
