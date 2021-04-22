import React, { useRef, useState } from 'react';
import { Button, Input, Space, Tag, Form } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import type { ActionType } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
import { queryBasisTable, createBasisTable, uploadBasisTable, deleteBasisTable } from './service';
import type { DataSourceType, tagValueDataType, TagListDataType } from './data/index';

const TagList: React.FC<TagListDataType> = ({ value, onChange }) => {
  const ref = useRef<Input | null>(null);
  const [newTags, setNewTags] = useState<tagValueDataType[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    let tempsTags = [...(value || [])];
    if (inputValue && tempsTags.filter((tag) => tag.label === inputValue).length === 0) {
      tempsTags = [...tempsTags, { key: `new-${tempsTags.length}`, label: inputValue }];
    }
    onChange?.(tempsTags);
    setNewTags([]);
    setInputValue('');
  };

  return (
    <Space>
      {(value || []).concat(newTags).map((item) => (
        <Tag key={item.key}>{item.label}</Tag>
      ))}
      <Input
        ref={ref}
        type="text"
        size="small"
        style={{ width: 78 }}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputConfirm}
        onPressEnter={handleInputConfirm}
      />
    </Space>
  );
};

const EditTableList: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const [dataSource, setDataSource] = useState<DataSourceType[]>([]);
  const [form] = Form.useForm();

  const columns: ProColumns<DataSourceType>[] = [
    {
      title: '活动名称',
      dataIndex: 'title',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '此项为必填项',
          },
        ],
      },
      width: '30%',
    },
    {
      title: '状态',
      key: 'state',
      dataIndex: 'state',
      valueType: 'select',
      valueEnum: {
        all: { text: '全部', status: 'Default' },
        open: {
          text: '未解决',
          status: 'Error',
        },
        closed: {
          text: '已解决',
          status: 'Success',
        },
      },
    },
    {
      title: '标签',
      dataIndex: 'labels',
      width: '20%',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '此项为必填项',
          },
        ],
      },
      renderFormItem: (_, { isEditable }) => {
        return isEditable ? <TagList /> : <Input />;
      },
      render: (_, row) => row?.labels?.map((item) => <Tag key={item.key}>{item.label}</Tag>),
    },
    {
      title: '操作',
      valueType: 'option',
      width: 250,
      render: (text, record, index, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </a>,
        <EditableProTable.RecordCreator
          key="copy"
          record={{
            ...record,
            id: (Math.random() * 1000000).toFixed(0),
          }}
        >
          <a>复制此行到末尾</a>
        </EditableProTable.RecordCreator>,
      ],
    },
  ];

  return (
    <PageContainer>
      <EditableProTable<DataSourceType>
        rowKey="id"
        bordered
        actionRef={actionRef}
        headerTitle="可编辑表格"
        maxLength={5}
        // 关闭默认的新建按钮
        recordCreatorProps={false}
        columns={columns}
        request={(params) => queryBasisTable({ ...params })}
        search={{
          labelWidth: 120,
        }}
        /* 在可编辑表格时不能有页数，会逻辑冲突 */
        /* pagination={{
          showQuickJumper: true,
          pageSize: 10,
        }} */
        value={dataSource}
        onChange={setDataSource}
        editable={{
          form,
          editableKeys,
          onSave: async (_, row, newLine) => {
            if (newLine) {
              await createBasisTable(row).then((data) => {
                if (data?.code === 200) actionRef?.current?.reload();
              });
            } else {
              await uploadBasisTable(row).then((data) => {
                if (data?.code === 200) actionRef?.current?.reload();
              });
            }
          },
          onDelete: async (_, row) => {
            await deleteBasisTable(row.id).then((data) => {
              if (data?.code === 200) actionRef?.current?.reload();
            });
          },
          onChange: setEditableRowKeys,
          actionRender: (row, config, dom) => [dom.save, dom.delete, dom.cancel],
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            onClick={() => {
              actionRef.current?.addEditRecord?.({
                id: (Math.random() * 1000000).toFixed(0),
                title: '新的一行',
              });
            }}
            icon={<PlusOutlined />}
          >
            新建一行
          </Button>,
          <Button
            key="rest"
            onClick={() => {
              form.resetFields();
            }}
          >
            重置表单
          </Button>,
        ]}
      />
    </PageContainer>
  );
};

export default EditTableList;
