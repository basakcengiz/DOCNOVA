import { Dropdown, Space } from 'antd';
import { DownOutlined, GlobalOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import type { MenuProps } from 'antd';
import { items } from '../helpers/arrays';
import { changeLanguage } from '../i18n/i18n';

const Language = () => {
  const { i18n } = useTranslation();

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    changeLanguage(e.key);
  };

  return (
    <div style={{ position: 'absolute', top: 25, right: 50 }}>
      <Dropdown menu={{ items, onClick: handleMenuClick }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <GlobalOutlined />
            {i18n.language.toUpperCase()}
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default Language;
