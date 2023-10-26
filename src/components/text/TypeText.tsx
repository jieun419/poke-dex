import styled from 'styled-components';

const TypeTxt = styled.span`
  font-size: 0.6875rem;
  color: #fff;
  background-color: #000;
  border-radius: 50px;
  padding: 5px 9px 6px 9px;
`;

interface TypeT {
  typename: string;
}

const TypeText = ({ typename }: TypeT) => {
  return <TypeTxt>{typename}</TypeTxt>;
};

export default TypeText;
