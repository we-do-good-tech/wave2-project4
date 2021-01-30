import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';
import firebase from '../../firebase';

const Wrapper = styled.div.attrs({ dir: 'rtl' })`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const Buttons = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  min-width: 191px;
  min-height: 50px;
  font-size: 18px;
  text-weight: 400;
  margin: 0 15px;
  text-decoration: none;
  border-radius: 50px;
  cursor: pointer;
  outline: 0;
  &:hover {
    text-decoration: none;
  }
`;

const SaveButton = styled(StyledButton)`
  color: ${({ theme }: { theme: any }) => theme.button.primary.normal.color};
  background: ${({ theme }: { theme: any }) => theme.button.primary.normal.background};
  border: 2px solid ${({ theme }: { theme: any }) => theme.button.primary.normal.border};
  &:hover {
    color: ${({ theme }: { theme: any }) => theme.button.primary.hover.color};
    background: ${({ theme }: { theme: any }) => theme.button.primary.hover.background};
    border: 2px solid ${({ theme }: { theme: any }) => theme.button.primary.hover.border};
  }
`;

const ClearButton = styled(StyledButton)`
  color: ${({ theme }: { theme: any }) => theme.button.secondary.normal.color};
  background: ${({ theme }: { theme: any }) => theme.button.secondary.normal.background};
  border: 2px solid ${({ theme }: { theme: any }) => theme.button.secondary.normal.border};
  &:hover {
    color: ${({ theme }: { theme: any }) => theme.button.secondary.hover.color};
    background: ${({ theme }: { theme: any }) => theme.button.secondary.hover.background};
    border: 2px solid ${({ theme }: { theme: any }) => theme.button.secondary.hover.border};
  }
`;

const TextArea = styled.textarea`
  width: 854px;
  height: 246px;
  margin-top: 45px;
  color: black;
  font-size: 20px;
  padding: 35px;
  background: #fffafa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border: none;
  border-radius: 30px;
  outline: 0;
  resize: none;
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
        render={({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit}>
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

            <Buttons>
              <SaveButton type="submit">שמירה</SaveButton>
              <ClearButton
                onClick={() => {
                  form.reset();
                }}
              >
                ביטול
              </ClearButton>
            </Buttons>
          </form>
        )}
      />
    </Wrapper>
  );
};

export default Games;
