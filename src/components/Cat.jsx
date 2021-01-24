import React from 'react'
import { Button } from 'antd';

export default class Cat extends React.Component {
    render() {
        return (
            <div className="cat">
                <Button type="primary">猫🐈</Button>
            </div>
        )
    }
}