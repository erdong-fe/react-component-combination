import React from 'react'
import Dog from './components/Dog';
import Cat from './components/Cat';
import { message } from 'antd';


function clickCountHOC(WrappedComponent) {
    return class extends React.Component {
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
                <div className="wrapped" onClick={this.handleClick.bind(this)}>
                    <WrappedComponent />
                </div>
            )
        }
    }
}

export const WrappedDog = clickCountHOC(Dog);
export const WrappedCat = clickCountHOC(Cat);