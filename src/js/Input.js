import React, { Component } from 'react'
import '../css/form.css'

export default class Input extends Component {

    constructor(props) {
        super(props)
        this.state = { value: "", }
        this.passValue = this.passValue.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }


    passValue() {
        console.log("passing value of: " + this.state.value)
        this.props.submit(this.state.value)
        this.setState({ value: "" })
    }
