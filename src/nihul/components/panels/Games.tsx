import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';
import { flexColumnCenter } from 'shared/components';
import firebase from '../../../firebase';
import { Buttons, SaveButton, ClearButton } from '../../shared/Buttons';
import { StyledForm } from '../../shared/StyledForm';
import { Wrapper } from '../../shared/Wrapper';

const TextArea = styled.textarea`
  width: 900px;
  min-height: calc(100vh - 460px);
  max-height: calc(100vh - 460px);
  margin-top: 40px;
  margin-bottom: 33px;
  color: black;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  padding: 35px;
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
  height: 150px;
  bottom: 2px;
  position: fixed;
`;

const Games = () => {
  const itemsRef = firebase.database().ref('games');

  const [gamesDescription, setGamesDescription] = useState();

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
      <Form
        initialValues={{ gamesDescription }}
        onSubmit={onSubmit}
        // validate={validate}
        render={({ handleSubmit, pristine, form, submitting }) => (
          <StyledForm onSubmit={handleSubmit}>
            <Field
              value="hi"
              name="gamesDescription"
              render={({ input, meta }) => (
                <div>
                  <TextArea {...input} />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            />
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

export default Games;
