import React from 'react';
import Mnu from 'components/Mnu/Mnu.js'
import Wrapper from 'components/Layout/Layout';

export default class ClickKiller extends React.Component {

    state = {
        hideRegistrationBlock: false,
        count: 0,
        time: 0,
        timer: 20,
        setInterval: 50
    }

    componentDidUpdate = (prevProps, prevState) => {

        if (+prevState.time >= +prevState.timer){
            clearInterval(this.timer);
        }
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
                    time={this.state.time}
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
        this.onSetInterval(Date.now())
        this.setState({ count: count })
    }

    onSetInterval = (date) => {        
        
        this.timer =  setInterval(() => {
            this.setState({ time: (((new Date - date) / 100) / 10).toFixed(1) })
        }, this.state.setInterval)
    }
}