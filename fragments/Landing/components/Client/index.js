/** @format */
import Image from 'next/image';

import { api, clients } from '../../../../config/api';

import { useQuery } from 'react-query';

import { ClientCard, ClientWrapper } from './styles';

const fetchClients = async () => {
  const res = await api.get(clients);

  return res.data;
};

export default function Client() {
  const { data, status } = useQuery('clients', fetchClients);

  const renderClientLogo = () => {
    if (data) {
      const baseUrl = 'http://localhost:1337';

      return data.map((client, index) => {
        return (
          <ClientCard key={index}>
            <Image
              src={`${baseUrl}${client.logo.url}`}
              alt={client.logo.name}
              width={client.logo.width}
              height={client.logo.height}
            />
          </ClientCard>
        );
      });
    }
  };

  return <ClientWrapper>{renderClientLogo()}</ClientWrapper>;
}
