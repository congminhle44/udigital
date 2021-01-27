/** @format */

import Button from '../components/Button';

import { Body } from '../components/Typography/body';

import { Heading } from '../components/Typography/heading';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Button>Button</Button>
      <Button variant='large'>Button</Button>
      <Button rounded>Button</Button>
      <Heading variant='small'>This is a heading 1</Heading>
      <Body font='montserrat-medium' light>
        This is a body
      </Body>
    </div>
  );
}
