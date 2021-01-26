/** @format */

import Button from '../components/Button';

import {
  BodyGilroy,
  BodyMont,
  BodyMontMed,
} from '../components/Typography/body';

import { Heading, Heading2, Heading3 } from '../components/Typography/heading';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Button>Button</Button>
      <Button variant='large'>Button</Button>
      <Button rounded>Button</Button>
      <Heading>This is a heading 1</Heading>
      <Heading2>This is a heading 2</Heading2>
      <Heading3>This is a heading 3</Heading3>
      <BodyGilroy>This is a body</BodyGilroy>
      <BodyMont>This is a body</BodyMont>
      <BodyMontMed>This is a body</BodyMontMed>
    </div>
  );
}
