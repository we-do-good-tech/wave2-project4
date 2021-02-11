import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import arrayMutators from 'final-form-arrays';
import isEqual from 'lodash.isequal';
import { Scrollbars } from 'rc-scrollbars';
import { Form, Field } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';
import { BiTrash } from 'react-icons/bi';
// import { flexColumnCenter } from 'shared/components';
import firebase from '../../../firebase';
import { Scrollers } from '../../../shared/components/index';
import { Buttons, SaveButton, ClearButton } from '../../shared/Buttons';
import StyledModal from '../../shared/Modal';
import { StyledForm } from '../../shared/StyledForm';
import { Wrapper } from '../../shared/Wrapper';

const StyledWrapper = styled(Wrapper)`
  flex-direction: column;
  padding: 1rem;
  direction: rtl;
  max-width: 89%;
  margin: 0 auto;
`;

const DeleteButton = styled.button`
  background: transparent;
  border: none;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  opacity: 0;
  color: #737373;
  &:hover {
    color: black;
  }
`;

const TextInputWrapper = styled.div`
  display: flex;
  max-width: 97%;
  min-width: 97%;
  flex: 1;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  justify-content: space-around;
  align-items: center;
  &:hover > ${DeleteButton} {
    opacity: 1;
    transition: all 0.3s;
  }
`;

const TextButton = styled.button`
  font-size: 20px;
  padding: 0.7rem;
  margin: 24px 0 53px 0;
  text-decoration: underline;
  color: ${({ theme }: { theme: any }) => theme.button.secondary.normal.color};
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.2s;
  &:hover {
    background-color: #afd9e3;
    transition: all 0.2s;
  }
`;

const TextArea = styled.textarea`
  width: 854px;
  height: 75px;
  margin-top: 30px;
  color: black;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  padding: 20px;
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

const TextInput = styled.input`
  width: 80%;
  color: black;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  padding: 10px;
  background: #fffafa;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  border: none;
  border-radius: 10px;
  outline: 0;
  resize: none;
  text-align: right;
  font-stretch: ultra-condensed;
  direction: rtl;
  font-family: 'Assistant';
`;

const TextInputGroup = styled.div`
  flex: 0 0 45%;
  max-width: 45%;
  direction: rtl;
  transition: all 0.3s;
  position: relative;
`;

const StyledLabel = styled.label`
  margin-left: 0.5rem;
  font-size: 20px;
`;

const StyledError = styled.span`
  position: absolute;
  right: 22%;
  top: 10px;
  color: red;
  font-size: 20px;
  pointer-events: none;
`;

// const Footer = styled.div`
//   ${flexColumnCenter};
//   width: 100%;
//   height: 150px;
//   padding-bottom: 51px;
//   position: fixed;
//   bottom: 0;
//   right: 0;
// `;

const About = () => {
  const { thumbVertical, trackVertical } = Scrollers;

  const itemsRef = firebase.database().ref('about');

  const [aboutDescription, setAboutDescription] = useState();
  const [aboutLinks, setAboutLinks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const onSubmit = async (values: any) => {
    itemsRef.update({ ...values }, (error) => {
      if (error) {
        setIsOpen(true);
        setIsError(true);
      } else {
        setIsOpen(true);
        setIsError(false);
      }
    });
  };

  useEffect(() => {
    if (!aboutLinks) setAboutLinks([]);
    itemsRef.on('value', (snapshot: any) => {
      setAboutDescription(snapshot.val()?.aboutDescription || '');
      if (!isEqual(aboutLinks, snapshot.val()?.aboutLinks) && snapshot.val()?.aboutLinks)
        setAboutLinks(snapshot.val()?.aboutLinks);
    });
  }, [itemsRef, aboutLinks]);

  const required = (value: any) => (value ? undefined : 'לא ניתן להשאיר שדה ריק');
  const requiredArray = (value: any) => (value && value.length > 0 ? undefined : 'לא ניתן להשאיר שדה ריק');
  /*  const newAboutLink = {
    text: '',
    path: '',
  }; */

  return (
    <Wrapper>
      <Form
        initialValues={{ aboutDescription, aboutLinks }}
        onSubmit={onSubmit}
        mutators={{
          ...arrayMutators,
        }}
        render={({
          handleSubmit,
          form: {
            mutators: { push }, // pop
          },
          pristine,
          submitting,
          form,
        }) => (
          <StyledForm onSubmit={handleSubmit}>
            <Field
              value="hi"
              name="aboutDescription"
              render={({ input, meta }) => (
                <div>
                  <TextArea {...input} />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            />
            <Scrollbars renderThumbVertical={thumbVertical} renderTrackVertical={trackVertical} hideTracksWhenNotNeeded>
              <StyledWrapper>
                <FieldArray name="aboutLinks" validate={requiredArray}>
                  {({ fields }: any) =>
                    fields.map((name: any, index: number) => (
                      <TextInputWrapper key={name}>
                        <TextInputGroup>
                          <StyledLabel htmlFor={`${name}.text`}>תיאור</StyledLabel>
                          <Field
                            name={`${name}.text`}
                            validate={required}
                            render={({ input, meta }) => (
                              <span>
                                <TextInput {...input} />
                                {meta.touched && meta.error && <StyledError>{meta.error}</StyledError>}
                              </span>
                            )}
                          />
                        </TextInputGroup>
                        <TextInputGroup>
                          <StyledLabel htmlFor={`${name}.path`}>לינק</StyledLabel>
                          <Field
                            name={`${name}.path`}
                            validate={required}
                            render={({ input, meta }) => (
                              <span>
                                <TextInput {...input} />
                                {meta.touched && meta.error && <StyledError>{meta.error}</StyledError>}
                              </span>
                            )}
                          />
                        </TextInputGroup>
                        <DeleteButton type="button" onClick={() => fields.remove(index)}>
                          <BiTrash />
                        </DeleteButton>
                      </TextInputWrapper>
                    ))
                  }
                </FieldArray>
              </StyledWrapper>
            </Scrollbars>
            <TextButton
              onClick={() => {
                push('aboutLinks', undefined);
                // console.log('stop here!');
              }}
            >
              הוספה
            </TextButton>
            <Buttons>
              <ClearButton
                type="button"
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
          </StyledForm>
        )}
      />
      <StyledModal isOpen={isOpen} setIsOpen={setIsOpen} error={isError} />
    </Wrapper>
  );
};

export default About;
