import React, { useState, useEffect } from 'react';
import { message } from 'antd';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import ProForm, {
  ProFormText,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormRadio,
  ProFormUploadButton,
  ProFormDigit,
  ProFormTextArea,
  ProFormCheckbox,
  ProFormTimePicker,
  ProFormSwitch,
  ProFormRate,
  ProFormSlider,
} from '@ant-design/pro-form';
import { queryBasisForm, uploadBasisForm } from './services';
import type { basisFormDataType } from './data';

const BasisForm: React.FC = () => {
  const [basisFormData, setBasisFormData] = useState({} as basisFormDataType);

  useEffect(() => {
    queryBasisForm().then(({ data }) => setBasisFormData(data || {}));
  }, []);

  const submitForm = (values: basisFormDataType) => {
    uploadBasisForm(values).then((data) => {
      if (data.code === 200) {
        message.success('提交成功');
      } else {
        message.error('提交失败');
      }
    });
  };

  return (
    <PageContainer>
      <ProCard loading={Object.keys(basisFormData).length === 0}>
        {Object.keys(basisFormData).length !== 0 ? (
          <ProForm<basisFormDataType>
            submitter={{
              render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,
            }}
            onFinish={async (values) => {
              submitForm(values);
            }}
            initialValues={{
              text1: basisFormData?.text1,
            }}
          >
            <ProCard gutter={[{ xs: 8, sm: 8, md: 16, lg: 24, xl: 32 }, 16]}>
              <ProCard bordered headerBordered title="输入框">
                <ProForm.Group>
                  <ProFormText
                    name="text1"
                    label="默认长度的输入框"
                    tooltip="最长为 24 位"
                    placeholder="请输入"
                    rules={[{ required: true, message: '请输入内容!' }]}
                  />
                </ProForm.Group>

                <ProForm.Group>
                  <ProFormText
                    width="xs"
                    name="text2"
                    label="104长度的输入框"
                    placeholder="请输入"
                  />
                </ProForm.Group>

                <ProForm.Group>
                  <ProFormText
                    width="sm"
                    name="text3"
                    label="216长度的输入框"
                    placeholder="请输入"
                  />
                </ProForm.Group>

                <ProForm.Group>
                  <ProFormText
                    width="md"
                    name="text4"
                    label="328长度的输入框"
                    placeholder="请输入"
                  />
                </ProForm.Group>

                <ProForm.Group>
                  <ProFormText
                    width="lg"
                    name="text5"
                    label="440长度的输入框"
                    placeholder="请输入"
                  />
                </ProForm.Group>

                <ProForm.Group>
                  <ProFormText
                    width="xl"
                    name="text6"
                    label="552长度的输入框"
                    placeholder="请输入"
                  />
                </ProForm.Group>

                <ProForm.Group>
                  <ProFormDigit width="md" name="num" label="数字输入框" initialValue={5} />
                </ProForm.Group>

                <ProFormText name="text7" label="未限制长度的输入框" placeholder="请输入" />

                <ProFormTextArea label="文本框" name="textarea" />
              </ProCard>
              <ProCard bordered headerBordered title="选择框">
                <ProForm.Group>
                  <ProFormDatePicker width="md" name="datepicker" label="日期选择框" />
                </ProForm.Group>

                <ProForm.Group>
                  <ProFormDateRangePicker width="md" name="rangepicker" label="日期范围选择框" />
                </ProForm.Group>

                <ProForm.Group>
                  <ProFormTimePicker width="md" name="timepicker" label="时间选择框" />
                </ProForm.Group>

                <ProForm.Group>
                  <ProFormSwitch name="switch" label="开关" />
                </ProForm.Group>

                <ProForm.Group>
                  <ProFormRate width="md" name="rate" label="评分" />
                </ProForm.Group>

                <ProForm.Group>
                  <ProFormSlider
                    width="md"
                    name="slider"
                    label="滑动输入条"
                    marks={{ 0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' }}
                  />
                </ProForm.Group>

                <ProForm.Group>
                  <ProFormSelect
                    initialValue="option1"
                    options={[{ value: 'option1', label: '选项1' }]}
                    width="md"
                    name="select1"
                    label="下拉选择框"
                  />
                </ProForm.Group>

                <ProForm.Group>
                  <ProFormSelect
                    initialValue={['option1', 'option2']}
                    fieldProps={{
                      mode: 'tags',
                    }}
                    options={[
                      { value: 'option1', label: '选项1' },
                      { value: 'option2', label: '选项2' },
                      { value: 'option3', label: '选项3' },
                    ]}
                    width="md"
                    name="select2"
                    label="下拉多选框"
                  />
                </ProForm.Group>

                <ProForm.Group>
                  <ProFormRadio.Group
                    label="单选框"
                    name="radio"
                    initialValue="单选1"
                    options={['单选1', '单选2', '单选3']}
                  />
                </ProForm.Group>

                <ProForm.Group>
                  <ProFormCheckbox.Group
                    label="多选框"
                    name="checkbox"
                    options={['多选1', '多选2', '多选3']}
                  />
                </ProForm.Group>

                <ProFormUploadButton
                  extra="支持扩展名：.jpg .zip .doc .wps"
                  label="倒签报备附件"
                  name="file"
                  title="上传文件"
                />
              </ProCard>
            </ProCard>
          </ProForm>
        ) : null}
      </ProCard>
    </PageContainer>
  );
};

export default BasisForm;
