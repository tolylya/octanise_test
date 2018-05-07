import * as React from 'react';
import { Button, Card, notification, Table, Modal } from 'antd';

import Menu from '../../components/Menu';
import NewRequestModal from './NewRequestModal';
import './index.css';
import { getCustomerRequests, newCustomerRequest } from '../../actions/mainActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class CustomerRequests extends React.Component {

  state = {
    modalOpen: false,
    lastRequest: {},
  };

  columns = [
    {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  }, {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  }, {
    title: 'Required date',
    dataIndex: 'requiredDate',
    key: 'requiredDate',
  }, {
    title: 'Last date',
    dataIndex: 'lastDate',
    key: 'lastDate',
  }, {
    title: 'Supplier',
    dataIndex: 'supplier',
    key: 'supplier',
  }, {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: text => {
      return <span className={text === 'Pending' ? 'blue' : text === 'Approved' ? 'green' : ''}>{text}</span>
    },
  }];

  componentDidMount() {
    this.props.actions.getCustomerRequests(this.props.currentUser.id);
  }

  onCreateRequest = (values) => {
    const supplier = this.props.users[values.supplier];
    const body = {
      ...values,
      requiredDate: values.requiredDate.format('DD-MM-YYYY'),
      lastDate: values.lastDate.format('DD-MM-YYYY'),
      status: 'Pending',
      supplier: `${supplier.firstName} ${supplier.lastName}`,
    };

    this.props.actions.newCustomerRequest(this.props.currentUser.id, body);
    this.setState({ modalOpen: false, lastRequest: body }, this.openNotification);
  };

  openEmailModal = (values) => {
    Modal.info({
      title: 'Email',
      content: (
        <div>
          <h1>You had new request.</h1>
          <h2>Location: {values.location}</h2>
          <div>Description: {values.description}</div>
          <div>Required date: {values.requiredDate}</div>
          <div>Last date: {values.lastDate}</div>
        </div>
      ),
    });
  }

  openNotification = () => {
    notification.success({
      message: 'Email',
      description: <span>
        Email about new request was sent to supplier. If you want to look at it press the button
        <Button className="mt-xxs" type="primary" onClick={() => this.openEmailModal(this.state.lastRequest)}>Open email</Button>
      </span>
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <Menu current="customer_requests"/>
        <div className="mt-l">
          <Card title="Requests" extra={<Button type="primary" onClick={() => this.setState({modalOpen: true})}>New request</Button>}>
            <Table columns={this.columns} dataSource={this.props.customerRequests} />
          </Card>
        </div>
        <NewRequestModal
          visible={this.state.modalOpen}
          onSubmit={this.onCreateRequest}
          onCancel={() => this.setState({modalOpen: false})}
          suppliers={this.props.suppliers}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    customerRequests: state.main.customerRequests,
    suppliers: state.main.suppliers,
    currentUser: state.main.currentUser,
    users: state.main.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({newCustomerRequest, getCustomerRequests}, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerRequests);
