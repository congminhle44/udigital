/** @format */

import { clients } from './data';

import { ClientCard, ClientWrapper } from './styles';

export default function Client() {
  const renderClientLogo = () => {
    return clients.map((client, index) => {
      return (
        <ClientCard key={index}>
          <img src={client.src} alt={client.name} />
        </ClientCard>
      );
    });
  };

  return <ClientWrapper>{renderClientLogo()}</ClientWrapper>;
}
