import React from 'react'
import './text.less'
import logo from '~/assets/images/logo.png' // === import logo from '../../assets/images/logo.png'

export default class extends React.Component {
    getObject = () => {
        return {
            one: 1,
            two: 2
        }
    }

    render() {
        const{getObject} = this
        const {text} = this.props
        return (
            <>
                <div className='text'>
                    <img onClick={() => console.log(JSON.stringify(getObject()))} src={logo} alt="logo"/>
                    <b className='success'>{text}</b>
                </div>
            </>
        )
    }
}