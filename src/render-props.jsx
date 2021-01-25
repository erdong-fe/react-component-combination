import React from 'react'
import { message } from 'antd';

export default class RenderPropsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleClick() {
        let {
            count
        } = this.state;
        this.setState(
            { count: count+1 },
            () => {
                message.info(`已经点击${this.state.count}次`, 1);
            }
        );
    }

    render() {
        return (
            <div className="render-props" onClick={this.handleClick.bind(this)}>
                {
                    this.props.render(this.state)
                }
            </div>
        )
    }
}