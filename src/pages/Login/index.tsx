import React, { useState } from 'react'
import './style/index.less'

import { Button, Spin, Input, Icon, message } from 'antd'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const submit = async () => {
    message.warn(JSON.stringify({
      username, password
    }))
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }

  return (
    <div className="login">
      <div className="login-box">
        <Spin tip="Loading..." spinning={isLoading}>
          <div className="login-header">
            <img src={require('../../assets/svgs/草莓.svg').default} draggable={false} />
            <div className="login-title">唯二主義</div>
          </div>
          <br />
          <br />
          <Input
            id="username"
            size="large"
            placeholder="输你的大名"
            prefix={
              <Icon type="user" style={{
                color: 'rgba(0, 0, 0, .25)'
              }} />
            }
            onChange={event => {
              setUsername(event.target.value)
            }} />
          <br />
          <br />
          <Input.Password
            id="password"
            size="large"
            placeholder="输你的密码"
            prefix={
              <Icon type="key" style={{
                color: 'rgba(0, 0, 0, .25)'
              }} />
            }
            onChange={event => {
              setPassword(event.target.value)
            }} />
          <br />
          <br />
          <br />
          <Button
            type="primary"
            size="large"
            block
            onClick={submit}>

            登录
          </Button>
        </Spin>
      </div>

    </div>
  )
}

export default Login