import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './SearchBar.scss'

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {

            // Valor padrão do Input de pesquisa

            search: this.props.defaultValue,
            timeOutHandler: null
        }

        this._handlerOnChangeInput = event => this.handlerOnchangeInput(event.target.value)
    }

    handlerOnchangeInput(search) {
        if (this.state.timeOutHandler !== null) {
            window.clearTimeout(this.state.timeOutHandler)
        }

        // O mpetodo onChange deverá ser chamado apenas após 300ms depois de parar de digitar

        const timeOutHandler = window.setTimeout(search => {
            this.props.onChange(search)
        }, 300, search)

        this.setState({ timeOutHandler, search })
    }

    render() {
        return (
            <div className={styles.searchBar}>
                Search: <input type='text' onChange={this._handlerOnChangeInput} value={this.state.search} />
            </div>
        )
    }
}

SearchBar.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default SearchBar