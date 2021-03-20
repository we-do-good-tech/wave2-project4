import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';
import { Switch, useLocation } from 'react-router-dom';
import { flexColumnCenter, Link } from 'shared/components';
import { ReactComponent as NihulIcon } from 'assets/images/nihul_intro.svg';
import firebase from '../../firebase';
import { Buttons, SaveButton, ClearButton } from '../shared/Buttons';
import About from './panels/About';
import Games from './panels/Games';
import Info from './panels/Info';
import Sports from './panels/Sports';
import Team from './panels/Team';
import Video from './panels/Video';
import PrivateRoute from './PrivateRoute';
import TopBar from './TopBar';

require('firebase/auth');

const ExitButton = styled(ClearButton)`
  position: absolute;
  top: 40px;
  left: 35px;
`;

const StyledForm = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  max-height: calc(100vh - 460px);
  overflow-y: none;
`;

const TextInput = styled.input`
  width: 324px;
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

const Wrapper = styled.div`
  dispaly: flex;
  flex-direction: column;
  flex: 1;
  margin: 22px 32px;
  background: ${({ theme }) => theme.page.nihul.background};
  border: 4px solid ${({ theme }) => theme.page.nihul.border};
  box-sizing: border-box;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`;

const LoginWrapper = styled(Wrapper)`
  padding-top: 120px;
`;

const Header = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  line-height: 32.7px;
  color: ${({ theme }) => theme.page.nihul.header.color};
  margin-top: 32px;
  margin-bottom: 22px;
  direction: rtl;
`;

const TextInputGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  direction: rtl;
  transition: all 0.3s;
  margin-left: 20px;
  max-width: 420px;
`;

const StyledLabel = styled.label`
  min-width: 150px;
  margin-left: 1em;
  font-size: 20px;
`;

const ForgotPasswordWrapper = styled.div`
  width: 490px;
  padding-left: 25px;
`;

const ForgotPassword = styled(Link)`
  font-size: 15px;
  line-height: 10px;
  text-decoration: underline;
  align-self: flex-start;
  color: #021b5b;
  margin-bottom: 3p0x;
`;

const Footer = styled.div`
  ${flexColumnCenter};
  width: 100%;
  min-width: 1280px;
  bottom: 53px;
  position: fixed;
`;

const ErrorWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

const Error = styled.div<{ error: any }>`
  font-size: 20px;
  color: #ff0000;
  opacity: ${({ error }) => (error.length > 0 ? '1' : '0')};
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 160px);
  width: 100%;
`;

function onAuthStateChange(callback: any) {
  return firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      callback({ loggedIn: true, email: user.email });
    } else {
      callback({ loggedIn: false });
    }
  });
}

function login(username: string, password: string) {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}

function logout() {
  firebase.auth().signOut();
}

const Nihul = () => {
  const location = useLocation();
  const [user, setUser] = useState({ loggedIn: false });
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  const requestLogin = useCallback((data) => {
    setError('');
    login(data.email, data.password).catch((error) => setError(error.code));
  }, []);

  if (!user.loggedIn) {
    return (
      <LoginWrapper>
        <Header>היי, הגעת למסך העריכה הראשי עבור אדמינים</Header>
        <ErrorWrapper>
          <Error error={error}>שם משתמש או סיסמה לא נכונים</Error>
        </ErrorWrapper>
        <Form
          initialValues={{}}
          onSubmit={requestLogin}
          render={({ handleSubmit, pristine, submitting }) => (
            <StyledForm onSubmit={handleSubmit}>
              <TextInputGroup>
                <StyledLabel htmlFor="email">שם משתמש</StyledLabel>
                <Field
                  name="email"
                  render={({ input, meta }) => (
                    <div>
                      <TextInput {...input} />
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </div>
                  )}
                />
              </TextInputGroup>

              <TextInputGroup>
                <StyledLabel htmlFor="password">סיסמה</StyledLabel>
                <Field
                  name="password"
                  render={({ input, meta }) => (
                    <div>
                      <TextInput {...input} />
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </div>
                  )}
                />
              </TextInputGroup>
              <ForgotPasswordWrapper>
                <ForgotPassword $isActiveItem={false} to="nihul/forgotPassword">
                  שכחתי סיסמה
                </ForgotPassword>
              </ForgotPasswordWrapper>
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
      </LoginWrapper>
    );
  }
  // setIsAuthenticated(false);
  return (
    <Wrapper>
      <ExitButton onClick={logout} type="submit">
        יציאה
      </ExitButton>

      <Header>ברוכים הבאים, מה תרצו לערוך?</Header>

      <TopBar />

      {location.pathname === '/nihul' && (
        <IconsContainer>
          <NihulIcon />
        </IconsContainer>
      )}

      <Switch>
        {/* <Route component={() => <Login />} path="/nihul" exact /> */}
        <PrivateRoute isAuthenticated={user.loggedIn} component={About} path="/nihul/about" />
        <PrivateRoute isAuthenticated={user.loggedIn} component={Games} path="/nihul/games" />
        <PrivateRoute isAuthenticated={user.loggedIn} component={Info} path="/nihul/info" />
        <PrivateRoute isAuthenticated={user.loggedIn} component={Team} path="/nihul/team" />
        <PrivateRoute isAuthenticated={user.loggedIn} component={Sports} path="/nihul/sports" />
        <PrivateRoute isAuthenticated={user.loggedIn} component={Video} path="/nihul/video" />
      </Switch>
    </Wrapper>
  );
};

export default Nihul;
