import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import arrayMutators from 'final-form-arrays';
import isEqual from 'lodash.isequal';
import { Form, Field } from 'react-final-form';
import { BiImage } from 'react-icons/bi';
import { flexColumnCenter } from 'shared/components';
import { openUploadWidget } from 'shared/services/CloudinaryService'; // fetchPhotos,
import firebase from '../../../firebase';
import { Buttons, SaveButton, ClearButton } from '../../shared/Buttons';
import { Wrapper } from '../../shared/Wrapper';

export const StyledForm = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  flex: 0 0 85%;
  max-height: calc(100vh - 460px);
  overflow-y: none;
`;

const Input = styled.input`
  color: black;
  width: 220px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  background: transparent;
  border: none;
  outline: 0;
  resize: none;
  text-align: left;
  font-stretch: ultra-condensed;
  font-family: 'Assistant';
`;

const TextInputGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  direction: rtl;
  transition: all 0.3s;
  margin-left: 20px;
  margin-top: 79px;
  margin-bottom: 298px;
`;

const StyledLabel = styled.label`
  margin-left: 0.5rem;
  font-size: 20px;
  margin-bottom: 31px;
`;

const StyledBiImage = styled(BiImage).attrs({ transform: 'scale(1.5 1.5)' })``;

const IconContainer = styled.div`
  width: 24px;
  height: 20px;
  margin: 0 10px 0 15px;
  padding: 0;
  display: flex;
  flex: 1;
  margin-bottom: 0;
`;

const UploadImageButton = styled.button`
  width: 220px;
  height: 40px;
  color: black;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  padding: 0 35px 0 5px;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 31px;
`;

const Footer = styled.div`
  ${flexColumnCenter};
  width: 100%;
  min-width: 1280px;
  bottom: 53px;
  position: fixed;
`;

const Sports = () => {
  const itemsRef = firebase.database().ref('info');

  const [pdf, setPdf] = useState('');

  const onSubmit = async (values: any) => {
    itemsRef.update({ ...values });
  };

  const beginUpload = (tag: any) => {
    const uploadOptions = {
      cloudName: 'dhocrufiz',
      tags: [tag],
      uploadPreset: 'fyp2qfsx',
    };

    openUploadWidget(uploadOptions, (error: any, photos: any) => {
      if (!error) {
        if (photos.event === 'success') {
          const data = {
            pdf: photos.info.secure_url,
          };
          itemsRef.update({ ...data });
        }
      }
    });
  };

  useEffect(() => {
    if (!pdf) setPdf('');
    itemsRef.on('value', (snapshot: any) => {
      if (!isEqual(pdf, snapshot.val()?.pdf) && snapshot.val()?.pdf) setPdf(snapshot.val()?.pdf);
    });
  }, [itemsRef, pdf]);

  return (
    <Wrapper>
      <Form
        initialValues={{ pdf }}
        onSubmit={onSubmit}
        // validate={validate}
        mutators={{
          ...arrayMutators,
        }}
        render={({ handleSubmit, pristine, form, submitting }) => (
          <StyledForm onSubmit={handleSubmit}>
            <TextInputGroup>
              <StyledLabel htmlFor="pdf">קובץ</StyledLabel>
              <Field
                name="pdf"
                render={({ input, meta }) => (
                  <UploadImageButton
                    onClick={() => {
                      beginUpload('info');
                    }}
                  >
                    <Input dir="ltr" {...input} />
                    <IconContainer>
                      <StyledBiImage />
                    </IconContainer>
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </UploadImageButton>
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

export default Sports;
