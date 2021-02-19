/** @format */

import Heading from '../../../../components/Typography/heading';

import { ContactWrapper, TreeLeft, TreeRight } from './styles';

import { useEffect, useState } from 'react';

import { useMutation } from 'react-query';

import Form from './form';

import { FormattedMessage } from 'react-intl';

import { api, customers } from '../../../../config/api';
import Image from 'next/image';

export default function Contact() {
  const [info, setInfo] = useState();

  const mutation = useMutation((newInfo) => api.post(customers, newInfo));

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
      <Heading>
        <FormattedMessage id='contacttitle' />
      </Heading>
      <Form
        mutation={mutation}
        handleSubmit={handleSubmit}
        handleTyping={handleTyping}
      />
      <TreeLeft>
        <Image
          src='/images/treeleft.jpg'
          alt='tree left'
          width={150}
          height={250}
        />
      </TreeLeft>
      <TreeRight>
        <Image
          src='/images/treeright.jpg'
          alt='tree right'
          width={150}
          height={250}
        />
      </TreeRight>
    </ContactWrapper>
  );
}
