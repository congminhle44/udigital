/** @format */

import { InputWrap, BorderInput, InputLogo } from './style';

export default function Input({ type, placeholder, icon, name, onchange }) {
  return (
    <InputWrap>
      <InputLogo>{icon}</InputLogo>
      <BorderInput
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onchange}
      />
    </InputWrap>
  );
}
