import * as React from 'react';
import { Link } from 'react-router';
import { Menu as AntdMenu } from 'antd';

class Menu extends React.Component {
  render() {
    return (
        <AntdMenu
          selectedKeys={[this.props.current]}
          mode="horizontal"
        >
          <AntdMenu.Item key="invite_supplier">
            <Link to="/invite-supplier">Invite supplier</Link>
          </AntdMenu.Item>
          <AntdMenu.Item key="customer_requests">
            <Link to="/customer/requests">Requests</Link>
          </AntdMenu.Item>
        </AntdMenu>
    );
  }
}

export default Menu;
