import { FC } from 'react';
import { Row, Col, Form, Input, Checkbox, Button } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import styles from './index.module.less';
import classNames from 'classnames';

const WelcomeLoginPage: FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Row justify="center" className={styles.welcomeLogin}>
      <Row justify="center" className={classNames('flex', styles.bannerContent)}>
        <Col span={22}>
          <h1 className={styles.title}>Welcome Back</h1>
          <Form name="normal_login" className={styles.loginForm} initialValues={{ remember: true }} onFinish={onFinish}>
            <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
              <Input className={styles.itemHeight} prefix={<UserOutlined className={styles.itemIconFontSize} />} placeholder="Username" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
              <Input className={styles.itemHeight} prefix={<LockOutlined className={styles.itemIconFontSize} />} type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className={classNames(styles.loginFormButton, styles.itemHeight)} block>
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Row className={styles.bannerBackground}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1903 556">
          <path className={styles.svgBannerShape} d="M753.1,434.2c110.6,63.7,277.7,70.6,373.4,15.4L1905,0v555.9H0V0.2L753.1,434.2z"></path>
        </svg>
      </Row>
    </Row>
  );
};

export default WelcomeLoginPage;
