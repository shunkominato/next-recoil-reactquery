import { Button } from './TextInput';

export default {
  title: 'Components/Button',
  component: Button,
};

export const basicButton = () => <Button label="button" onClick={() => {}} />;
export const primaryButton = () => (
  <Button label="yellow" color="yellow" onClick={() => {}} />
);
