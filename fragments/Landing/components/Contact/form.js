/** @format */

import { Email, Phone, User } from '../../../../components/Icons';

import Button from '../../../../components/Button';

import Input from '../../../../components/Input';

import { ContactForm, HideLabel, StartedButton } from './styles';

export default function Form({ handleTyping, handleSubmit, mutation }) {
  return (
    <ContactForm onSubmit={handleSubmit}>
      <label>
        <HideLabel>Name</HideLabel>
        <Input
          id='name'
          onchange={handleTyping}
          type='text'
          icon={<User />}
          placeholder='Name'
          name='name'
        />
      </label>
      <label>
        <HideLabel>Email</HideLabel>
        <Input
          id='email'
          onchange={handleTyping}
          type='email'
          icon={<Email />}
          placeholder='Email'
          name='email'
        />
      </label>
      <label>
        <HideLabel>Telephone</HideLabel>
        <Input
          id='tel'
          onchange={handleTyping}
          type='tel'
          icon={<Phone />}
          placeholder='Phone'
          name='phone'
        />
      </label>
      <StartedButton>
        <Button disabled={mutation.isLoading} type='submit' variant='large'>
          {mutation.isLoading ? 'Loading...' : 'Get Started'}
        </Button>
      </StartedButton>
    </ContactForm>
  );
}
