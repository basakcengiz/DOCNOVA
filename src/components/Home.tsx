import { Button, Form, Input } from 'antd';
import Title from 'antd/es/typography/Title';

import { useTranslation } from 'react-i18next';
import axiosInstance from '../axiosInstance';
import { useAppDispatch } from '../hooks/hook';
import { setUser } from '../store/slice/userSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Home = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    const raw = JSON.stringify({
      email: values.email,
      password: values.password
    });

    axiosInstance
      .post('/auth/login/dev', raw, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        dispatch(setUser(response.data));
        navigate('/invoiceList');
      })
      .catch(() => {
        toast.error(t('sthWrong'));
      });
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '80vh' }}>
      <Title style={{ color: '#FF9A9A' }} level={2}>
        {t('welcome').toLocaleUpperCase('tr')}
      </Title>
      <Form
        name="login"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        style={{
          width: '40%',

          margin: '0 auto',
          marginTop: '100px',
          padding: '30px',
          border: '1px solid #d9d9d9',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          backgroundColor: '#fff'
        }}
      >
        <Form.Item label={t('email')} name="email" rules={[{ required: true, message: t('emailReq') }]}>
          <Input />
        </Form.Item>

        <Form.Item label={t('password')} name="password" rules={[{ required: true, message: t('passwordReq') }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button color="pink" variant="solid" htmlType="submit" block>
            {t('login')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Home;
