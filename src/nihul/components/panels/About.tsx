import React, { useState, useEffect, HTMLAttributes } from 'react';
import styled from 'styled-components';
import arrayMutators from 'final-form-arrays';
import isEqual from 'lodash.isequal';
import { Scrollbars } from 'rc-scrollbars';
import { Form, Field } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';
import { BiTrash } from 'react-icons/bi';
import firebase from '../../../firebase';
import { Buttons, SaveButton, ClearButton } from '../../shared/Buttons';
import { StyledForm } from '../../shared/StyledForm';
import { Wrapper } from '../../shared/Wrapper';

const StyledWrapper = styled(Wrapper)`
  flex-direction: column;
  padding: 1rem;
  direction: rtl;
  max-width: 89%;
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
  max-width: 95%;
  min-width: 95%;
  flex: 1;
  flex-wrap: wrap;
  margin-top: 2rem;
  justify-content: space-around;
  align-items: center;
  &:hover > ${DeleteButton} {
    opacity: 1;
    transition: all 0.3s;
  }
`;

const TextButton = styled.button`
  padding: 0.7rem;
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
`;

const StyledLabel = styled.label`
  margin-left: 0.5rem;
  font-size: 20px;
`;

const About = () => {
  const thumbVertical = ({ style, ...props }: HTMLAttributes<HTMLDivElement>) => {
    const finalStyle = {
      ...style,
      cursor: 'pointer',
      backgroundColor: '#0C2D80',
      borderRadius: '10px',
    };
    return <div style={finalStyle} {...props} />;
  };

  const trackVertical = ({ style, ...props }: HTMLAttributes<HTMLDivElement>) => {
    const trackStyle = {
      ...style,
      backgroundColor: '#C4C4C4',
      width: '6px',
      right: '0',
      borderRadius: '10px',
      bottom: '2px',
      top: '2px',
    };
    return <div style={trackStyle} {...props} />;
  };

  const itemsRef = firebase.database().ref('about');

  const [aboutDescription, setAboutDescription] = useState();
  const [aboutLinks, setAboutLinks] = useState([]);
  const onSubmit = async (values: any) => {
    itemsRef.update({ ...values });
  };

  useEffect(() => {
    console.log('stop!');
    if (!aboutLinks) setAboutLinks([]);
    itemsRef.on('value', (snapshot: any) => {
      setAboutDescription(snapshot.val()?.aboutDescription || '');
      if (!isEqual(aboutLinks, snapshot.val()?.aboutLinks) && snapshot.val()?.aboutLinks)
        setAboutLinks(snapshot.val()?.aboutLinks);
    });
  }, [itemsRef, aboutLinks]);

  const newAboutLink = {
    text: '',
    path: '',
  };

  return (
    <Wrapper>
      <Form
        initialValues={{ aboutDescription, aboutLinks }}
        onSubmit={onSubmit}
        // validate={validate}
        mutators={{
          ...arrayMutators,
        }}
        render={({
          handleSubmit,
          form: {
            mutators: { push }, // pop
          },
          pristine,
          form,
          submitting,
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
                <FieldArray name="aboutLinks">
                  {({ fields }: any) =>
                    fields.map((name: any, index: number) => (
                      <TextInputWrapper key={name}>
                        <TextInputGroup>
                          <StyledLabel htmlFor={`${name}.text`}>תיאור</StyledLabel>
                          <Field
                            name={`${name}.text`}
                            render={({ input, meta }) => (
                              <span>
                                <TextInput {...input} />
                                {meta.touched && meta.error && <span>{meta.error}</span>}
                              </span>
                            )}
                          />
                        </TextInputGroup>
                        <TextInputGroup>
                          <StyledLabel htmlFor={`${name}.path`}>לינק</StyledLabel>
                          <Field
                            name={`${name}.path`}
                            render={({ input, meta }) => (
                              <span>
                                <TextInput {...input} />
                                {meta.touched && meta.error && <span>{meta.error}</span>}
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
            <TextButton onClick={() => push('aboutLinks', newAboutLink)}>הוספה</TextButton>
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

export default About;
