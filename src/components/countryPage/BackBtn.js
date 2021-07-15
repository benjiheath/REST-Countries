import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';

const BackBtn = ({ text, onClick }) => {
  return (
    <Link to='/'>
      <Btn onClick={onClick}>
        <HiArrowNarrowLeft size={'1.4em'} />
        {text}
      </Btn>
    </Link>
  );
};

export default BackBtn; /*





*/ // Styling

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  box-shadow: var(--shadow-btn);
  cursor: pointer;
  padding: 0.8rem 0.5rem 0.7rem 0.4rem;
  padding-top: 0.8rem;
  width: 11rem;
  background-color: var(--bg-element);
  color: var(--text-color);
  transition: var(--trans);

  svg {
    fill: var(--text-color);
    margin-right: 1rem;
    transition: var(--trans);
  }

  &:hover {
    box-shadow: var(--shadow-btn-hover);
    transform: translateY(0.05rem);

    & svg {
      transform: translateX(-1rem);
    }
  }

  &:active {
    transform: translateY(0.1rem) scale(0.95);
    box-shadow: none;
  }
`;
