import { useNavigate } from 'react-router-dom';

const useGoToPage = (url: string) => {
  const navigate = useNavigate();

  const goToPage = () => {
    navigate(url);
  };

  return goToPage;
};

export default useGoToPage;
