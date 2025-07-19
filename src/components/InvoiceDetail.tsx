import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../hooks/hook';
import { Card, Descriptions, type DescriptionsProps } from 'antd';
import dayjs from 'dayjs';

const InvoiceDetail = () => {
  const { t } = useTranslation();
  const { jwt } = useAppSelector((state) => state.user);
  const { invoiceDetail } = useAppSelector((state) => state.invoice);

  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: `${t('companyId')}`,
      children: <span>{invoiceDetail.companyId}</span>
    },
    {
      key: '2',
      label: `${t('createdTime')}`,
      children: <span>{dayjs(invoiceDetail.createdTime).format('DD/MM/YYYY HH:mm')}</span>
    },
    {
      key: '3',
      label: `${t('customerCountryCode')}`,
      children: <span>{invoiceDetail.customerCountryCode}, Zhejiang</span>
    },
    {
      key: '4',
      label: `${t('customerId')}`,
      children: <span>{invoiceDetail.customerId}</span>
    },
    {
      key: '5',
      label: `${t('customerName')}`,
      children: <span>{invoiceDetail.customerName}</span>
    },
    {
      key: '6',
      label: `${t('customerVat')}`,
      children: <span>{invoiceDetail.customerVat}</span>
    },
    {
      key: '7',
      label: `${t('documentType')}`,
      children: <span>{invoiceDetail.documentType}</span>
    },
    {
      key: '8',
      label: `${t('dueDate')}`,
      children: <span>{dayjs(invoiceDetail.dueDate).format('DD/MM/YYYY')}</span>
    },
    {
      key: '9',
      label: `${t('invoiceNumber')}`,
      children: <span>{invoiceDetail.invoiceNumber}</span>
    },
    {
      key: '10',
      label: `${t('issueDate')}`,
      children: <span>{dayjs(invoiceDetail.issueDate).format('DD/MM/YYYY')}</span>
    },
    {
      key: '11',
      label: `${t('lastUpdatedTime')}`,
      children: <span>{dayjs(invoiceDetail.lastUpdatedTime).format('DD/MM/YYYY HH:mm')}</span>
    },
    {
      key: '12',
      label: `${t('lineExtensionAmount')}`,
      children: <span>{invoiceDetail.lineExtensionAmount}</span>
    },
    {
      key: '13',
      label: `${t('localCreatedTime')}`,
      children: <span>{dayjs(invoiceDetail.localCreatedTime).format('DD/MM/YYYY HH:mm')}</span>
    },
    {
      key: '14',
      label: `${t('localLastUpdatedTime')}`,
      children: <span>{dayjs(invoiceDetail.localLastUpdatedTime).format('DD/MM/YYYY HH:mm')}</span>
    },
    {
      key: '15',
      label: `${t('payableAmount')}`,
      children: <span>{invoiceDetail.payableAmount}</span>
    },
    {
      key: '16',
      label: `${t('sendViaPeppol')}`,
      children: <span>{invoiceDetail.sendViaPeppol ? `${t('yes')}` : `${t('no')}`} </span>
    },
    {
      key: '17',
      label: `${t('source')}`,
      children: <span>{invoiceDetail.source}</span>
    },
    {
      key: '18',
      label: `${t('status')}`,
      children: <span>{invoiceDetail.status}</span>
    },
    {
      key: '19',
      label: `${t('statusTime')}`,
      children: <span>{dayjs(invoiceDetail.statusTime).format('DD/MM/YYYY HH:mm')}</span>
    },
    {
      key: '20',
      label: `${t('supplierCountryCode')}`,
      children: <span>{invoiceDetail.supplierCountryCode}</span>
    },
    {
      key: '21',
      label: `${t('supplierName')}`,
      children: <span>{invoiceDetail.supplierName}</span>
    },
    {
      key: '22',
      label: `${t('supplierVat')}`,
      children: <span>{invoiceDetail.supplierVat}</span>
    },
    {
      key: '23',
      label: `${t('taxExclusiveAmount')}`,
      children: <span>{invoiceDetail.taxExclusiveAmount}</span>
    },
    {
      key: '24',
      label: `${t('taxInclusiveAmount')}`,
      children: <span>{invoiceDetail.taxInclusiveAmount}</span>
    },
    {
      key: '25',
      label: `${t('type')}`,
      children: <span>{invoiceDetail.type}</span>
    },
    {
      key: '26',
      label: `${t('typeCode')}`,
      children: <span>{invoiceDetail.typeCode}</span>
    }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '70px' }}>
      {jwt && (
        <Card style={{ width: '90%' }} title={<span style={{ color: '#FF9A9A' }}>{t('invoiceDetail')}</span>}>
          <Descriptions items={items} />
        </Card>
      )}
    </div>
  );
};

export default InvoiceDetail;
