import { useEffect } from 'react';
import axiosInstance from '../axiosInstance';
import { useAppDispatch, useAppSelector } from '../hooks/hook';
import { setInvoiceDetail, setInvoices } from '../store/slice/invoiceSlice';
import { Space, Table } from 'antd';
import type { TableProps } from 'antd';
import type { Invoice } from '../helpers/types';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const InvoiceList = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { t } = useTranslation();
  const { jwt } = useAppSelector((state) => state.user);
  const { invoices } = useAppSelector((state) => state.invoice);

  const raw = JSON.stringify({
    companyId: '01c880ca-46b5-4699-a477-616b84770071',
    documentType: 'OUTGOING',
    startDate: '2025-06-27T00:00:00.000Z',
    endDate: '2025-07-04T08:31:10.422Z',
    page: 0,
    size: 20,
    referenceDocument: '',
    type: null,
    status: null,
    paymentStatus: null,
    isDeleted: false
  });
  useEffect(() => {
    axiosInstance
      .post('/invoice/search', raw, {
        headers: {
          'Content-Type': 'application/json',
          'R-Auth': jwt
        }
      })
      .then((response) => {
        dispatch(setInvoices(response.data.invoices.content));
      })
      .catch(() => {
        toast.error(t('sthWrong'));
      });
  }, []);

  const columns: TableProps<Invoice>['columns'] = [
    {
      title: `${t('invoiceNumber')}`,
      dataIndex: 'invoiceNumber',
      key: 'invoiceNumber'
    },
    {
      title: `${t('customerName')}`,
      dataIndex: 'customerName',
      key: 'customerName',
      render: (text) => {
        return text.toLocaleUpperCase();
      }
    },
    {
      title: `${t('supplierName')}`,
      dataIndex: 'supplierName',
      key: 'supplierName',
      render: (text) => {
        return text.toLocaleUpperCase();
      }
    },
    {
      title: `${t('documentType')}`,
      dataIndex: 'documentType',
      key: 'documentType'
    },
    {
      title: `${t('currency')}`,
      dataIndex: 'currency',
      key: 'currency'
    },
    {
      title: `${t('action')}`,
      key: 'action',
      render: (_, record) => {
        return (
          <Space size="middle">
            <a
              onClick={() => {
                dispatch(setInvoiceDetail(record));
                navigate(`/invoice-detail`);
              }}
            >
              {<span style={{ color: '#FF9A9A' }}>{t('detail').toLocaleUpperCase()}</span>}
            </a>
          </Space>
        );
      }
    }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {jwt && (
        <Table
          columns={columns}
          rowKey="id"
          dataSource={invoices}
          style={{ width: '90%', border: '1px solid #e0e0e0', borderRadius: '10px', marginTop: '100px' }}
        />
      )}
    </div>
  );
};

export default InvoiceList;
