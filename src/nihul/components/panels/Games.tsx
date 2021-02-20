import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import isEqual from 'lodash.isequal';
import { Form, Field } from 'react-final-form';
import { flexColumnCenter } from 'shared/components';
import firebase from '../../../firebase';
import { Buttons, SaveButton, ClearButton } from '../../shared/Buttons';
import StyledModal from '../../shared/Modal';
import { StyledForm } from '../../shared/StyledForm';
import { Wrapper } from '../../shared/Wrapper';

const TextArea = styled.textarea`
  width: 900px;
  min-height: calc(100vh - 540px);
  max-height: calc(100vh - 540px);
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
  text-align: center;
  font-stretch: ultra-condensed;
  direction: rtl;
  font-family: 'Assistant';
`;

const HeaderInput = styled.input`
  width: 435px;
  height: 40px;
  margin-top: 40px;
  margin-bottom: 33px;
  color: black;
  font-size: 20px;
  font-weight: 600;
  font-style: normal;
  padding: 0 35px;
  background: #fffafa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border: none;
  border-radius: 30px;
  outline: 0;
  resize: none;
  text-align: center;
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

  const [gamesHeader, setGamesHeader] = useState();
  const [gamesDescription, setGamesDescription] = useState();
  const [sports, setSports] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const onSubmit = async (values: any) => {
    const data = {
      ...values,
      sports,
    };
    itemsRef.update({ ...data }, (error) => {
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
    itemsRef.on('value', (snapshot: any) => {
      if (
        (!isEqual(gamesHeader, snapshot.val()?.gamesHeader) && snapshot.val()?.gamesHeader) ||
        (!isEqual(gamesDescription, snapshot.val()?.gamesDescription) && snapshot.val()?.gamesDescription)
      ) {
        setGamesHeader(snapshot.val().gamesHeader);
        setGamesDescription(snapshot.val().gamesDescription);
        setSports(snapshot.val()?.sports);
      }
    });
  }, [itemsRef, gamesDescription, gamesHeader]);

  return (
    <Wrapper>
      <Form
        initialValues={{ gamesHeader, gamesDescription }}
        onSubmit={onSubmit}
        // validate={validate}
        render={({ handleSubmit, pristine, form, submitting }) => (
          <StyledForm onSubmit={handleSubmit}>
            <Field
              value="hi"
              name="gamesHeader"
              render={({ input, meta }) => (
                <div>
                  <HeaderInput {...input} />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            />
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
      <StyledModal isOpen={isOpen} setIsOpen={setIsOpen} error={isError} />
    </Wrapper>
  );
};

export default Games;
