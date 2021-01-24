import React from 'react'
import { Button } from 'antd';

export default class Cat extends React.Component {
    render() {
        const { count } = this.props;
        return (
            <div className="cat">
                <Button type="primary">猫🐈被点击了{count}次</Button>
            </div>
        )
    }
}