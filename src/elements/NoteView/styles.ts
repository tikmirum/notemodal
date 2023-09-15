import styled from 'styled-components';

export const All = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: lightcyan;
  border-radius: 8px;
  border: 2px solid black;
  height: 70vh;
  width: 50vh;
`;

export const Header = styled('div')`
  display: flex;
  font-size: 46px;
`;

export const Row = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  border-bottom: 2px solid slategray;
  box-sizing: border-box;
  padding: 26px;
`;

export const TextArea = styled(`div`)`
  flex: 1;
  padding: 16px;
  text-align: start;
  border-radius: 8px;
  font-size: 24px;
  height: 100px;
`;

export const RowButton = styled('div')`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 0 16px 16px 16px;
`;

export const BackButton = styled('button')`
  cursor: pointer;
  font-size: 20px;
  width: 120px;
  height: 40px;
`;
