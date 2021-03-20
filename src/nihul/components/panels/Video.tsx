import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import arrayMutators from 'final-form-arrays';
import isEqual from 'lodash.isequal';
import { Form, Field } from 'react-final-form';
import { flexColumnCenter, FlexMiddle } from 'shared/components';
import firebase from '../../../firebase';
import { Buttons, SaveButton, ClearButton } from '../../shared/Buttons';
import { Wrapper } from '../../shared/Wrapper';

export const StyledForm = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  flex: 0 0 85%;
  min-height: 600px;
  max-height: calc(100vh - 460px);
  overflow-y: none;
`;

const HeaderInput = styled.input`
  width: 435px;
  height: 40px;
  margin: 45px 0;
  color: black;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  padding: 0 15px;
  background: #fffafa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border: none;
  border-radius: 30px;
  outline: 0;
  resize: none;
  text-align: left;
  font-stretch: ultra-condensed;
`;

const TextInput = styled(HeaderInput)`
  width: 655px;
  margin: 0;
  margin-bottom: 31px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TextInputGroup = styled(FlexMiddle)`
  width: 65%;
  max-width: 750px;
  justify-content: space-between;
  direction: rtl;
  transition: all 0.3s;
  margin-top: 20px;
`;

const StyledLabel = styled.label`
  margin-left: 0.5rem;
  font-size: 20px;
  margin-bottom: 31px;
`;

const Footer = styled.div`
  ${flexColumnCenter};
  width: 100%;
  min-width: 1280px;
  bottom: 53px;
  position: fixed;
`;

const Video = () => {
  const itemsRef = firebase.database().ref('video');

  const [video, setVideo] = useState({ tomer: '', nir: '', shira: '' });

  const onSubmit = async (values: any) => {
    itemsRef.update({ ...values });
  };

  useEffect(() => {
    if (!video) setVideo({ tomer: '', nir: '', shira: '' });
    itemsRef.on('value', (snapshot: any) => {
      if (!isEqual(video, snapshot.val()) && snapshot.val()) setVideo(snapshot.val());
    });
  }, [itemsRef, video]);

  return (
    <Wrapper>
      <Form
        initialValues={{ ...video }}
        onSubmit={onSubmit}
        mutators={{
          ...arrayMutators,
        }}
        render={({ handleSubmit, pristine, form, submitting }) => (
          <StyledForm onSubmit={handleSubmit}>
            <TextInputGroup>
              <StyledLabel htmlFor="tomer">תומר</StyledLabel>
              <Field
                name="tomer"
                render={({ input, meta }) => (
                  <span>
                    <TextInput {...input} />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </span>
                )}
              />
            </TextInputGroup>
            <TextInputGroup>
              <StyledLabel htmlFor="nir">ניר</StyledLabel>
              <Field
                name="nir"
                render={({ input, meta }) => (
                  <span>
                    <TextInput {...input} />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </span>
                )}
              />
            </TextInputGroup>
            <TextInputGroup>
              <StyledLabel htmlFor="shira">שירה</StyledLabel>
              <Field
                name="shira"
                render={({ input, meta }) => (
                  <span>
                    <TextInput {...input} />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </span>
                )}
              />
            </TextInputGroup>
            <Footer>
              <Buttons>
                <ClearButton
                  disabled={submitting || pristine}
                  onClick={() => {
                    form.reset();
                  }}
                >
                  ביטול
                </ClearButton>
                <SaveButton type="submit" disabled={submitting || pristine}>
                  שמירה
                </SaveButton>
              </Buttons>
            </Footer>
          </StyledForm>
        )}
      />
    </Wrapper>
  );
};

export default Video;
