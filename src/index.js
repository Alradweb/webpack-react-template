import React from 'react'
import ReactDOM from 'react-dom'
import './main.less'
import Text from './components/text/Text'

class App extends React.Component {
    render() {
        return (
            <div className='my-app'>
                <h1 className='test-font'>React App</h1>
                <Text text={'some important text'}/>
            </div>
        )
    }
}

if (module.hot) {
    const statuses = []
    module.hot.addStatusHandler(status => {
        statuses.push(status)
        if (statuses.length > 5) window.location.reload()
    })
}

ReactDOM.render(<App/>, document.getElementById('root'))
