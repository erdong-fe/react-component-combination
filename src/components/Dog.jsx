import React from 'react'
import { Button } from 'antd';

export default class Dog extends React.Component {
    render() {
        const { count } = this.props;
        return (
            <div className="dog" style={{ marginRight: "30px" }}>
                <Button type="primary">狗🐶被点击了{count}次</Button>
            </div>
        )
    }
}