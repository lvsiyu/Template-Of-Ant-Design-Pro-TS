import React from 'react';
import type { Dispatch, SetStateAction, ReactNode } from 'react';
import { Menu } from 'antd';

interface ProTableListMenuProps {
  setKey: Dispatch<SetStateAction<string>>;
  dom: ReactNode;
}

const ProTableListMenu: React.FC<ProTableListMenuProps> = (props) => {
  const { setKey, dom } = props;
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
      }}
    >
      <Menu
        onSelect={(e) => setKey(e.key as string)}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.ItemGroup key="g1" title="第一组">
          <Menu.Item key="1">第一组内容1</Menu.Item>
          <Menu.Item key="2">第一组内容2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g2" title="第二组">
          <Menu.Item key="3">第二组内容1</Menu.Item>
          <Menu.Item key="4">第二组内容2</Menu.Item>
        </Menu.ItemGroup>
      </Menu>
      <div
        style={{
          flex: 1,
        }}
      >
        {dom}
      </div>
    </div>
  );
};

export default ProTableListMenu;
