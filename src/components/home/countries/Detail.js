import styled from 'styled-components';

const Detail = ({ name, value, v2 }) => {
  return (
    <Wrapper v2={v2}>
      <Name>{name}</Name>
      <Value>{value}</Value>
    </Wrapper>
  );
};

export default Detail; /*




*/ // Styling

const Wrapper = styled.div`
  display: flex;
  font-size: ${({ v2 }) => (v2 ? '1.6rem' : '1.4rem')};
  padding-bottom: ${({ v2 }) => v2 && '1.2rem'};
  color: var(--text-color);
`;

export const Name = styled.p`
  font-weight: 600;
  margin-right: 0.4rem;
`;

const Value = styled.p`
  font-weight: 300;
`;
