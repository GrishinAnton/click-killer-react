import React from 'react';
import Mnu from 'components/Mnu/Mnu.js'
import Wrapper from 'components/Layout/Layout';

export default class ClickKiller extends React.Component {

    state = {
        hideRegistrationBlock: false,
        count: 0,
        time: 0,
        timer: 20,
        setInterval: 100
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log('====================================');
        console.log(prevProps, 'prevProps');
        console.log('====================================');

        console.log('====================================');
        console.log(prevState, 'prevState');
        console.log('====================================');
    }
    

    render() {

        
        return (
            <div>
                <Mnu />
                <Wrapper 
                    hideRegistrationBlock={this.state.hideRegistrationBlock}
                    onEnter={this.onRegistrationEnter}
                    onKiller={this.onKillerClick}
                    count={this.state.count}
                />
            </div>            
        )
    }

    onRegistrationEnter = () => {
        //тут должен быть axios(fetch?) запрос, по результатам которого меняется блок регистрации или кнопки
        this.setState({ hideRegistrationBlock: true })
    }

    onKillerClick = (e) => {
        var count = this.state.count
        count++
        this.onSetInterval()
        this.setState({ count: count })
    }

    onSetInterval = () => {
        
        setInterval(() => {
            
        }, this.state.setInterval)
    }
}