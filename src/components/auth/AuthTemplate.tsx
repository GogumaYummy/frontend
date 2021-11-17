import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../lib/style/colors';

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${colors.gray[2]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`;

interface AuthTemplateProps {
  children: ReactNode;
}

function AuthTemplate({ children }: AuthTemplateProps) {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">PAPERBOX</Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
}

export default AuthTemplate;
