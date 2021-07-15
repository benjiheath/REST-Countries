import styled from 'styled-components';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { useGlobalContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { theme, toggleTheme } = useGlobalContext();

  return (
    <Wrapper theme={theme}>
      <FlexContainer theme={theme}>
        <Link to='/'>
          <Title theme={theme}>Where in the world?</Title>
        </Link>
        <ThemeSwitcher>
          <Btn onClick={() => toggleTheme()} theme={theme}>
            {theme === 'dark' ? (
              <IoSunny style={{ fontSize: '2rem' }} />
            ) : (
              <IoMoon style={{ fontSize: '1.6rem' }} />
            )}
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </Btn>
        </ThemeSwitcher>
      </FlexContainer>
    </Wrapper>
  );
};

export default Header; /*





*/ // Styling

const Wrapper = styled.header`
  width: 100%;
  background-color: ${({ theme }) => `var(--${theme})`};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
  box-shadow: var(--shadow);
  transition: var(--trans);
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: var(--row);
  height: 7rem;
  align-items: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => `var(--${theme}-text)`};
  transition: var(--trans);
`;

const ThemeSwitcher = styled.div``;

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 13rem;

  color: ${({ theme }) => `var(--${theme}-text)`};
  border: none;
  background-color: transparent;
  font-weight: 800;
  font-size: 1.4rem;
  transition: all var(--trans);
  cursor: pointer;
  border-radius: 5px;
  padding: 1rem 1.5rem;

  & > * {
    transition: 0.2s ease-out;
  }

  &:hover {
    background-color: ${({ theme }) =>
      theme === 'dark' ? `var(--${theme}-bg)` : 'var(--light-text)'};
    box-shadow: ${({ theme }) => theme === 'light' && 'var(--shadow-btn)'};
    color: ${({ theme }) => theme === 'light' && `#fff`};

    & > * {
      fill: ${({ theme }) => (theme === 'dark' ? `#fdffa8` : 'var(--light-text)')};
      filter: ${({ theme }) => `var(--${theme}-ds)`};
      transform: ${({ theme }) =>
        theme === 'dark' ? 'scale(1.3) rotate(100deg)' : 'rotate(-360deg)'};
    }
  }
`;
