import React from 'react';
import styled from 'styled-components';
// import { BoundFunction } from '@testing-library/react';
import { Field } from 'react-final-form';

export type InputProps = {
  type: string;
  value: string;
};

const TextInput = styled.input`
  width: 85%;
  color: black;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  padding: 10px;
  background: #fffafa;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  border: none;
  border-radius: 30px;
  outline: 0;
  resize: none;
  text-align: right;
  font-stretch: ultra-condensed;
  direction: rtl;
  font-family: 'Assistant';
`;

const TextInputGroup = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  direction: rtl;
  transition: all 0.3s;
`;

const StyledLabel = styled.label`
  margin-left: 0.5rem;
  font-size: 20px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex: 1;
`;

export const FormInput = (props: any) => {
  const { type, value, name } = props;
  return (
    <StyledDiv>
      <TextInputGroup>
        <StyledLabel htmlFor={`description${name}`}>תיאור</StyledLabel>
        <Field
          name={`description${name}`}
          initialValue={value}
          type={type}
          render={({ input, meta }) => (
            <span>
              <TextInput {...input} />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </span>
          )}
        />
      </TextInputGroup>
      <TextInputGroup>
        <StyledLabel htmlFor={`link${name}`}>לינק</StyledLabel>
        <Field
          name={`link${name}`}
          initialValue={value}
          type={type}
          render={({ input, meta }) => (
            <span>
              <TextInput {...input} />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </span>
          )}
        />
      </TextInputGroup>
    </StyledDiv>
  );
};
