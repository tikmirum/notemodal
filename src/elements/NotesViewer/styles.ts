import styled from 'styled-components';
import PlusSvg from 'assets/images/plus.png';

export const All = styled('div')`
  display: flex;
  flex-direction: column;
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

export const RowNote = styled('div')`
  display: flex;
  justify-content: space-between;
  margin: 16px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid gray;
  height: 50px;
  align-items: center;
`;

export const Title = styled('div')`
  font-size: 36px;
  padding: 4px;
`;

export const Delete = styled('img')`
  cursor: pointer;
  width: 30px;
  height: 30px;
`;
export const Plus = styled('img')`
  cursor: pointer;
  width: auto;
  height: 60px;
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

export const ActionButtons = styled('div')`
  display: flex;
  align-items: center;
  gap: 8px;
`;
