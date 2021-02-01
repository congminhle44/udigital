/** @format */

import { Email, Phone, User } from '../../../../components/Icons';

import Button from '../../../../components/Button';

import Input from '../../../../components/Input';

import { ContactForm, StartedButton } from './styles';

export default function Form({ handleTyping, handleSubmit, mutation }) {
  return (
    <ContactForm onSubmit={handleSubmit}>
      <Input
        onchange={handleTyping}
        type='text'
        icon={<User />}
        placeholder='Name'
        name='name'
      />
      <Input
        onchange={handleTyping}
        type='email'
        icon={<Email />}
        placeholder='Email'
        name='email'
      />
      <Input
        onchange={handleTyping}
        type='tel'
        icon={<Phone />}
        placeholder='Phone'
        name='phone'
      />
      <StartedButton>
        <Button disabled={mutation.isLoading} type='submit' variant='large'>
          {mutation.isLoading ? 'Loading...' : 'Get Started'}
        </Button>
      </StartedButton>
    </ContactForm>
  );
}
