import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/hook';
import { logout } from '../store/slice/userSlice';

const LogoutButton = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div style={{ position: 'absolute', top: 25, right: 130 }}>
      <Button color="danger" variant="solid" onClick={handleLogout} /* style={{ position: 'absolute', right: '20', top: '20' }} */>
        {t('logout')}
      </Button>
    </div>
  );
};

export default LogoutButton;
