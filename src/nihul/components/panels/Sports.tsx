import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import arrayMutators from 'final-form-arrays';
import isEqual from 'lodash.isequal';
import { Form, Field } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';
import { BiImage } from 'react-icons/bi';
import { openUploadWidget } from 'shared/services/CloudinaryService'; // fetchPhotos,
import firebase from '../../../firebase';
import { Buttons, SaveButton, ClearButton } from '../../shared/Buttons';
import { Wrapper } from '../../shared/Wrapper';

export const StyledForm = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  flex: 0 0 85%;
  max-height: 460px;
  overflow-y: auto;
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

const HeaderInput = styled.input`
  width: 435px;
  height: 40px;
  margin: 45px 0;
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

const TextInput = styled(HeaderInput)`
  width: 180px;
  margin: 0;
  margin-bottom: 31px;
`;

const TextInputGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  direction: rtl;
  transition: all 0.3s;
  margin-left: 20px;
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

const TeamMember = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 1200px;
`;

const Sports = () => {
  const itemsRef = firebase.database().ref('sports');

  const [sports, setSports] = useState([]);

  const onSubmit = async (values: any) => {
    itemsRef.update({ ...values });
  };

  const beginUpload = (tag: any, index: number) => {
    const uploadOptions = {
      cloudName: 'dhocrufiz',
      tags: [tag],
      uploadPreset: 'fyp2qfsx',
    };

    openUploadWidget(uploadOptions, (error: any, photos: any) => {
      if (!error) {
        if (photos.event === 'success') {
          const sportsArr = sports.map((m: any) => m);
          sportsArr[index].image = photos.info.secure_url;
          const data = {
            ...sportsArr,
          };
          itemsRef.update({ ...data });
        }
      }
    });
  };

  useEffect(() => {
    if (!sports) setSports([]);
    itemsRef.on('value', (snapshot: any) => {
      if (!isEqual(sports, snapshot.val()?.sports) && snapshot.val()?.sports) setSports(snapshot.val()?.sports);
    });
  }, [itemsRef, sports]);

  return (
    <Wrapper>
      <Form
        initialValues={{ sports }}
        onSubmit={onSubmit}
        // validate={validate}
        mutators={{
          ...arrayMutators,
        }}
        render={({ handleSubmit, pristine, form, submitting }) => (
          <StyledForm onSubmit={handleSubmit}>
            <FieldArray name="sports">
              {({ fields }: any) =>
                fields.map((name: any, index: number) => (
                  <TeamMember key={name}>
                    <TextInputGroup>
                      <StyledLabel htmlFor={`description${name}`}>תיאור</StyledLabel>
                      <Field
                        name={`${name}.description`}
                        render={({ input, meta }) => (
                          <span>
                            <TextInput {...input} />
                            {meta.touched && meta.error && <span>{meta.error}</span>}
                          </span>
                        )}
                      />
                    </TextInputGroup>
                    <TextInputGroup>
                      <StyledLabel htmlFor={`description${name}`}>תמונה</StyledLabel>
                      <Field
                        name={`${name}.image`}
                        render={({ input, meta }) => (
                          <UploadImageButton
                            onClick={() => {
                              beginUpload('team', index);
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
                    <TextInputGroup>
                      <StyledLabel htmlFor={`description${name}`}>שם</StyledLabel>
                      <Field
                        name={`${name}.name`}
                        render={({ input, meta }) => (
                          <span>
                            <TextInput {...input} />
                            {meta.touched && meta.error && <span>{meta.error}</span>}
                          </span>
                        )}
                      />
                    </TextInputGroup>
                  </TeamMember>
                ))
              }
            </FieldArray>
            <Buttons>
              <ClearButton
                disabled={submitting || pristine}
                onClick={() => {
                  form.reset();
                }}
              >
                ביטול
              </ClearButton>
              <SaveButton type="submit">שמירה</SaveButton>
            </Buttons>
          </StyledForm>
        )}
      />
    </Wrapper>
  );
};

export default Sports;
