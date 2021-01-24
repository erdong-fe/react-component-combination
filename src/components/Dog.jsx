import React from 'react'
import { Button } from 'antd';

export default class Dog extends React.Component {
    render() {
        return (
            <div className="dog" style={{ marginRight: "30px" }}>
                <Button type="primary">狗🐶</Button>
            </div>
        )
    }
}