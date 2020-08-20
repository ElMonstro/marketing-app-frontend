import React from 'react';
import { Upload, message, Button } from 'antd';
import { UploadOutlined, FileAddOutlined } from '@ant-design/icons';
import { requestHeaderDetails } from '../../services/utils';
import { groupMembersCsvUrlMappingObject } from '../../services/urls';

const validFileExtensions = ['csv', 'xls', 'xlsx']

const vaildateCsvOrXlsFile = (file, fileList) => {
  
  const extension = file.name.split('.').pop();
  if (validFileExtensions.includes(extension)){
    return Promise.resolve()
  } else {
    message.error(`${file.name} not valid; use csv or excel files`);
    return Promise.reject();
  }
}

export const UploadGroupsCsv = (props) => {
    
    const {getCurrentGroup, mode, fetchGroups, fetchGroupMembers} = props;
    const url = groupMembersCsvUrlMappingObject[mode];
    const group = getCurrentGroup();
    const properties = {
        name: 'file',
          data: {
          group, mode,
        },
        action: url,
        ...requestHeaderDetails(),
        beforeUpload: vaildateCsvOrXlsFile,

        onChange(info) {
          if (info.file.status !== 'uploading') {
          }
          if (info.file.status === 'done') {
            message.success(`File(${info.file.name}) uploaded successfully`);
            fetchGroups();
            fetchGroupMembers(group, mode);
          } else if (info.file.status === 'error') {
            message.error(info.file.response.detail);
          }
        },

        
      };

   return (
        <Upload {...properties}>
          <Button type="link"  size={'large'} block icon={<FileAddOutlined />}> <span style={{paddingTop: '5px'}}>upload </span> </Button>
        </Upload>
        )};
