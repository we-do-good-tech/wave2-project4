import styled from 'styled-components';

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled.button`
  min-width: 191px;
  min-height: 47px;
  padding-bottom: 3px;
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

export const SaveButton = styled(StyledButton)`
  color: ${({ theme }: { theme: any }) => theme.button.primary.normal.color};
  background: ${({ theme }: { theme: any }) => theme.button.primary.normal.background};
  border: 2px solid ${({ theme }: { theme: any }) => theme.button.primary.normal.border};
  &:hover {
    font-weight: 600;
    color: ${({ theme }: { theme: any }) => theme.button.primary.hover.color};
    background: ${({ theme }: { theme: any }) => theme.button.primary.hover.background};
    border: 2px solid ${({ theme }: { theme: any }) => theme.button.primary.hover.border};
  }
  &:active {
    color: ${({ theme }: { theme: any }) => theme.button.primary.active.color};
    background: ${({ theme }: { theme: any }) => theme.button.primary.active.background};
    border: 2px solid ${({ theme }: { theme: any }) => theme.button.primary.active.border};
  }
  &:disabled {
    color: ${({ theme }: { theme: any }) => theme.button.primary.disabled.color};
    background: ${({ theme }: { theme: any }) => theme.button.primary.disabled.background};
    border: 2px solid ${({ theme }: { theme: any }) => theme.button.primary.disabled.border};
    cursor: default;
    font-weight: 400;
  }
`;

export const ClearButton = styled(StyledButton)`
  color: ${({ theme }: { theme: any }) => theme.button.secondary.normal.color};
  background: ${({ theme }: { theme: any }) => theme.button.secondary.normal.background};
  border: 2px solid ${({ theme }: { theme: any }) => theme.button.secondary.normal.border};
  &:hover {
    color: ${({ theme }: { theme: any }) => theme.button.secondary.hover.color};
    background: ${({ theme }: { theme: any }) => theme.button.secondary.hover.background};
    border: 2px solid ${({ theme }: { theme: any }) => theme.button.secondary.hover.border};
  }
  &:active {
    color: ${({ theme }: { theme: any }) => theme.button.secondary.active.color};
    background: ${({ theme }: { theme: any }) => theme.button.secondary.active.background};
    border: 2px solid ${({ theme }: { theme: any }) => theme.button.secondary.active.border};
  }
  &:disabled {
    color: ${({ theme }: { theme: any }) => theme.button.secondary.disabled.color};
    background: ${({ theme }: { theme: any }) => theme.button.secondary.disabled.background};
    border: 2px solid ${({ theme }: { theme: any }) => theme.button.secondary.disabled.border};
    cursor: default;
    font-weight: 400;
  }
`;
