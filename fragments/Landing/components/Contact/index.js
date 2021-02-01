/** @format */

import Heading from '../../../../components/Typography/heading';

import { ContactWrapper, TreeLeft, TreeRight } from './styles';

import { useEffect, useState } from 'react';

import { useMutation } from 'react-query';

import Form from './form';

import axios from 'axios';

export default function Contact() {
  const [info, setInfo] = useState();

  const mutation = useMutation((newInfo) =>
    axios.post('https://6017f21a971d850017a3f3df.mockapi.io/customers', newInfo)
  );

  useEffect(() => {
    if (mutation.isSuccess) alert('Thank you for your response');
  }, [mutation.isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(info);
  };

  const handleTyping = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <ContactWrapper>
      <Heading>Work With US</Heading>
      <Form
        mutation={mutation}
        handleSubmit={handleSubmit}
        handleTyping={handleTyping}
      />
      <TreeLeft>
        <img src='/images/tree-left.png' alt='tree' />
      </TreeLeft>
      <TreeRight>
        <img src='/images/tree-right.png' alt='tree' />
      </TreeRight>
    </ContactWrapper>
  );
}
