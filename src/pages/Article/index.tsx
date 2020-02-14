import * as React from 'react';
import { useState } from 'react';

import './style/index.less'

import {
  Row,
  Col,
  Input,
  Select,
  Button,
  DatePicker,
  Affix,
  Icon,
} from 'antd'

const { Option } = Select
const { TextArea } = Input

import marked from 'marked'

const Article = () => {
  const [content, setContent] = useState('')
  const [markedStr, setMarkedStr] = useState('')
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    breaks: false,
    smartLists: true,
    smartypants: false
  })

  const contentChangingRenderMarked = (event: any) => {

    setContent(event.target.value)
    setMarkedStr(marked(event.target.value))

  }

  return (
    <div className="article">
      <Row gutter={5}>
        <Col span={24} style={{
          marginBottom: '20px'
        }}>
          <Row gutter={10} >
            <Col span={18} >
              <Input
                placeholder="文章标题"
                className="flex-1" />
            </Col>
            <Col span={6} className=" flex-end">
              <Select
                defaultValue="lucy"
                style={{
                  width: '100%'
                }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
              </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Col>
          </Row>
        </Col>
        {/* <div className="block-20 border-red"></div> */}
        <Col span={24} style={{
          marginBottom: '20px'
        }}>
          <Row gutter={10} >
            <Col span={18} >
              <Input
                placeholder="文章简介"
                className="flex-1" />
            </Col>
            <Col span={6} className=" flex-end">
              <Row gutter={0} type="flex" justify="space-between" className="width-100bf">
                <Col span={12} className="flex-start ">
                  <DatePicker className="width-100bf" />
                </Col>
                <Col span={12} className="flex-end ">
                  <DatePicker className="width-100bf" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row type="flex" justify="space-between" className="width-100bf">
            <Col span={12} className="flex-start ">
              <TextArea value={content} className="width-100bf" style={{
                height: '80vh'
              }}
              onChange={event => contentChangingRenderMarked(event)}/>
            </Col>
            <Col span={12} className="flex-end ">
              <div className="width-100bf marked-box" style={{
                height: '80vh',
                padding: '6px 8px'
              }}
              dangerouslySetInnerHTML={{
                __html: markedStr
              }}>
                
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
        <Button
          type="primary"
          size="large"
          shape="round"
          className="submit" >
          <Icon type="rocket" />
          发布
        </Button>
        <Button
          size="large"
          shape="round"
          className="save" >
          <Icon type="save" />
          暂存
        </Button>
    </div>
  )
}

export default Article