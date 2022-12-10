import { NextPage } from 'next';
import { Layout } from 'src/layout/Layout';
import { SignUp } from '../../page-contents/SignUp/SignUp';

const SignUpPage: NextPage = () => {
  return (
    <Layout title="sign_up">
      <SignUp />
    </Layout>
  );
  // return <SignUp />;
};

export default SignUpPage;
