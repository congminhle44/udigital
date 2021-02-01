/** @format */

import { Email, Phone, User } from '../../../../components/Icons';

import Button from '../../../../components/Button';

import Input from '../../../../components/Input';

import Heading from '../../../../components/Typography/heading';

import {
  ContactForm,
  ContactWrapper,
  StartedButton,
  TreeLeft,
  TreeRight,
} from './styles';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Sucessfully submitted!');
  };

  return (
    <ContactWrapper>
      <Heading>Work With US</Heading>
      <ContactForm onSubmit={handleSubmit}>
        <Input type='text' icon={<User />} placeholder='Name' name='name' />
        <Input type='email' icon={<Email />} placeholder='Email' name='email' />
        <Input type='tel' icon={<Phone />} placeholder='Phone' name='phone' />
        <StartedButton>
          <Button type='submit' variant='large'>
            Get Started
          </Button>
        </StartedButton>
      </ContactForm>
      <TreeLeft>
        <img src='/images/tree-left.png' alt='tree' />
      </TreeLeft>
      <TreeRight>
        <img src='/images/tree-right.png' alt='tree' />
      </TreeRight>
    </ContactWrapper>
  );
}
