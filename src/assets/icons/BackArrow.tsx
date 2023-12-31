import styled from 'styled-components';

const Path = styled.path`
  fill: var(--text-color);
`;

const BackArrow = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.66285 0.837993C9.3046 1.36187 9.40016 2.3068 8.87628 2.94855L5.16082 7.49999H22C22.8284 7.49999 23.5 8.17156 23.5 8.99998C23.5 9.82841 22.8284 10.5 22 10.5H5.16082L8.87628 15.0514C9.40016 15.6932 9.3046 16.6381 8.66285 17.162C8.0211 17.6859 7.07617 17.5903 6.55229 16.9485L0.838008 9.94855C0.387331 9.39647 0.387331 8.6035 0.838008 8.05142L6.55229 1.05142C7.07617 0.40967 8.0211 0.314116 8.66285 0.837993Z"
        fill="#414443"
      />
    </svg>
  );
};

export default BackArrow;
