import React from 'react';
import Mnu from 'components/Mnu/Mnu.js'
import Wrapper from 'components/Layout/Layout';

export default class ClickKiller extends React.Component {

    state = {
        hideRegistrationBlock: false,
        count: 0,
        time: 0,
        timer: 20,
        setInterval: 50,
        startTimer: false,
        startCount: true,
        result: ''
    }

    componentDidUpdate = (prevProps, prevState) => {

        if (+prevState.time >= +prevState.timer && prevState.startCount === true){
            clearInterval(this.timer);
            this.setState({ startCount: false })
            this.resultClickKiller()
            console.log('====================================');
            console.log("+++++");
            console.log('====================================');
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
                    result={this.state.result}
                />
            </div>            
        )
    }

    onRegistrationEnter = () => {
        //тут должен быть axios(fetch?) запрос, по результатам которого меняется блок регистрации или кнопки
        this.setState({ hideRegistrationBlock: true })
    }

    onKillerClick = () => {
        if (this.state.startCount) {
            var count = this.state.count
            count++
            this.setState({ count: count })
        }  

        if (!this.state.startTimer){
            this.onSetInterval(Date.now())
            this.setState({ startTimer: true })
        }
    }

    onSetInterval = (date) => {        
        
        this.timer =  setInterval(() => {
            this.setState({ time: (((new Date - date) / 100) / 10).toFixed(1) })
        }, this.state.setInterval)
    }

    resultClickKiller = () => {
        var result = this.state.count / this.state.timer
        this.setState({ result: result })
    }
}