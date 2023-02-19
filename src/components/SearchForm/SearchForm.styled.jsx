import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  max-width: 300px;
  border: 1px solid #bfbbba;
  border-radius: 3px;
  background-color: #fff;
  overflow: hidden;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 32px;
  height: 32px;
  border: 0;
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
  }
`;
