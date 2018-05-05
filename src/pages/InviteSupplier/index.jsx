import * as React from 'react';
import { Button, Input, Modal, notification } from 'antd';
import { withFormik } from 'formik';

import Menu from '../../components/Menu';
import { isEmail, required } from '../../utils/validator';
import './index.css';

class _InviteSupplier extends React.Component {

  openEmailModal = () => {
    Modal.info({
      title: 'Email',
      content: (
        <div>
          <h1>You has invited.</h1>
          <div><a href="#test" target="_blank">Open invite link</a></div>
        </div>
      ),
    });
  }

  openNotification = () => {
    notification.success({
      message: 'Email',
      description: <span>
        Email with invite link was sent to supplier. If you want to look at it press the button
        <Button className="mt-xxs" type="primary" onClick={() => this.openEmailModal()}>Open email</Button>
      </span>
    });
  };

  handleSubmit = () => {
    this.openNotification();
  }

  render() {
    const {
      errors,
      handleChange,
      handleBlur,
      dirty
    } = this.props;

    return (
      <div>
        <Menu current="invite_supplier"/>
        <div className="invite_wrapper mt-l">
          <Input placeholder="Supplier name" name="supplierName" onBlur={handleBlur} onChange={handleChange} />
          <Input placeholder="First name" name="firstName" className="mt-xxs" onBlur={handleBlur} onChange={handleChange} />
          <Input placeholder="Last name" className="mt-xxs" name="lastName" onBlur={handleBlur} onChange={handleChange} />
          <Input placeholder="Email" className="mt-xxs" name="email" onBlur={handleBlur} onChange={handleChange} />
          <Input placeholder="Phone" className="mt-xxs" name="phone" onBlur={handleBlur} onChange={handleChange} />
          <Button type="primary" className="mt-xs full-width" disabled={Object.keys(errors).length || !dirty} onClick={this.handleSubmit}>Send invite</Button>
        </div>
      </div>
    );
  }
}

const InviteSupplier = withFormik({
  mapPropsToValues: props => ({ firstName: '', lastName: '', email: '', supplierName: '', phone: '' }),
  validate: (values) => {
    const errors = {};

    if (!isEmail(values.email)) {
      errors.email = 'Incorrect email';
    } else if (required(values.email)) {
      errors.email = 'Required field';
    }
    if (required(values.supplierName)) {
      errors.email = 'Required field';
    }

    return errors;
  },
})(_InviteSupplier);

export default InviteSupplier;
