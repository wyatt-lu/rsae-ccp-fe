import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// --- STYLED COMPONENTS ---

const PageWrapper = styled.div`
  background-color: #fffdfa;
  min-height: calc(100vh - 100px); /* Accounts for the header height */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`;

const HeaderText = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 0.5rem 0;
  color: #1a1a1a;
  
  span {
    color: #E2B853; /* RSAE Gold */
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #6c6c6c;
  font-weight: 500;
  margin: 0;
`;

const LoginCard = styled.form`
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 30px;
  width: 100%;
  max-width: 550px;
  padding: 4rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const LabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.label`
  font-size: 1.1rem;
  font-weight: 700;
  color: #5b5b5b;
`;

const ForgotPasswordLink = styled(Link)`
  font-size: 0.9rem;
  color: #4376ed;
  font-weight: 600;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Input = styled.input`
  background-color: #fafafa;
  border: 1px solid #dfdfdf;
  border-radius: 15px;
  padding: 1.2rem 1.5rem;
  font-size: 1.1rem;
  font-family: inherit;
  width: 100%;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #E2B853;
  }
`;

const CheckboxRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: #E2B853; /* Makes the checkbox gold when checked */
`;

const CheckboxLabel = styled.label`
  font-size: 1rem;
  color: #5b5b5b;
  font-weight: 500;
  cursor: pointer;
`;

// --- COMPONENT LOGIC ---

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // put firebase login stuff here
    
    console.log('Logging in with:', email, password);
    navigate('/dashboard'); 
  };

  return (
    <PageWrapper>
      <HeaderText>
        <Title><span>Admin</span> Portal Login</Title>
        <Subtitle>Secure Login Portal For Dashboard Admin</Subtitle>
      </HeaderText>

      <LoginCard onSubmit={handleLogin}>
        
        <FormGroup>
          <Label>Username / Email:</Label>
          <Input 
            type="email" 
            placeholder="@rsae-community.org" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <LabelRow>
            <Label>Password:</Label>
            <ForgotPasswordLink to="/forgot-password">
              Forgot Password?
            </ForgotPasswordLink>
          </LabelRow>
          <Input 
            type="password" 
            placeholder="••••••••••••" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>

        <CheckboxRow>
          <Checkbox type="checkbox" id="trustDevice" />
          <CheckboxLabel htmlFor="trustDevice">Trust this device for 30 days</CheckboxLabel>
        </CheckboxRow>

        <button 
          type="submit" 
          style={{ 
            backgroundColor: '#E2B853', 
            color: 'black', 
            padding: '1.2rem', 
            fontSize: '1.2rem', 
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <span>🔒</span> Secure Login
        </button>

      </LoginCard>
    </PageWrapper>
  );
}