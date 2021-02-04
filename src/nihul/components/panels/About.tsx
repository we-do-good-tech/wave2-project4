import React, { useState, useEffect, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'rc-scrollbars';
import { Form, Field } from 'react-final-form';
import { BiTrash } from 'react-icons/bi';
import firebase from '../../../firebase';
import { Buttons, SaveButton, ClearButton } from '../../shared/Buttons';
import { InputProps, FormInput } from '../../shared/InputTypes';
import { StyledForm } from '../../shared/StyledForm';
import { Wrapper } from '../../shared/Wrapper';

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
  flex-direction: row-reverse;
  max-width: 80%;
  min-width: 80%;
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

const textInputs: InputProps[] = [
  {
    type: 'input',
    value: 'ניסיון',
  },
  {
    type: 'input',
    value: '2ניסיון',
  },
];

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
      right: '100px',
      borderRadius: '10px',
      bottom: '2px',
      top: '2px',
    };
    return <div style={trackStyle} {...props} />;
  };

  const itemsRef = firebase.database().ref('games');

  const [gamesDescription, setGamesDescription] = useState();
  const [inputs, setInputs] = useState(() => {
    const initialState = textInputs;
    return initialState;
  });

  const addInputGroup = () => {
    inputs.push({ type: 'input', value: '' });
    setInputs(inputs);
  };

  const removeInputGroup = (e: any, indexToDelete: number) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('number', indexToDelete);
    setInputs(inputs.filter((value, index) => index !== indexToDelete));
  };

  const onSubmit = async (values: any) => {
    itemsRef.update({ ...values });
  };

  useEffect(() => {
    itemsRef.on('value', (snapshot: any) => {
      setGamesDescription(snapshot.val().gamesDescription);
    });
  }, [itemsRef]);

  return (
    <Wrapper>
      <Scrollbars renderThumbVertical={thumbVertical} renderTrackVertical={trackVertical} hideTracksWhenNotNeeded>
        <Form
          initialValues={{ gamesDescription, ...inputs }}
          onSubmit={onSubmit}
          // validate={validate}
          render={({ handleSubmit, form }) => (
            <StyledForm onSubmit={handleSubmit}>
              <Field
                value="hi"
                name="gameDescription"
                render={({ input, meta }) => (
                  <div>
                    <TextArea {...input} />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />
              {inputs.map((i: InputProps, index) => (
                <TextInputWrapper key={index}>
                  <FormInput {...i} name={index} />
                  <DeleteButton type="button" onClick={(eve) => removeInputGroup(eve, index)}>
                    <BiTrash />
                  </DeleteButton>
                </TextInputWrapper>
              ))}
              <TextButton
                onClick={() => {
                  addInputGroup();
                }}
              >
                הוספה
              </TextButton>
              <Buttons>
                <ClearButton
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
      </Scrollbars>
    </Wrapper>
  );
};

export default About;
