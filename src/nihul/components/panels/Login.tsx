import React from 'react';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';
import { flexColumnCenter } from 'shared/components';
import { Buttons, SaveButton } from '../../shared/Buttons';
import { Wrapper } from '../../shared/Wrapper';

const StyledForm = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  max-height: calc(100vh - 460px);
  overflow-y: none;
`;

const TextInput = styled.input`
  width: 435px;
  height: 40px;
  margin: 15px 0;
  color: black;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  padding: 0 35px;
  background: #fffafa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border: none;
  border-radius: 30px;
  outline: 0;
  resize: none;
  text-align: right;
  font-stretch: ultra-condensed;
  direction: rtl;
  font-family: 'Assistant';
`;

const Footer = styled.div`
  ${flexColumnCenter};
  width: 100%;
  min-width: 1280px;
  bottom: 53px;
  position: fixed;
`;

type Props = {
  startLogin?: ((email: string, password: any) => () => Promise<any>) | undefined;
};

const Login = ({ startLogin }: Props) => {
  const onSubmit = (e: any) => {
    console.log(e, startLogin);
    // startLogin(e.email, e.password);
  };
  return (
    <Wrapper>
      <Form
        initialValues={{}}
        onSubmit={onSubmit}
        // validate={validate}
        render={({ handleSubmit, pristine, submitting }) => (
          <StyledForm onSubmit={handleSubmit}>
            <Field
              name="email"
              render={({ input, meta }) => (
                <div>
                  <TextInput {...input} />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            />
            <Field
              name="password"
              render={({ input, meta }) => (
                <div>
                  <TextInput {...input} />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            />
            <Footer>
              <Buttons>
                <SaveButton type="submit" disabled={submitting || pristine}>
                  כניסה
                </SaveButton>
              </Buttons>
            </Footer>
          </StyledForm>
        )}
      />
    </Wrapper>
  );
};

export default Login;
