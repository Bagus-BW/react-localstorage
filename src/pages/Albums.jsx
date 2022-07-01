import React, { Component } from 'react';
import Table from '../components/Table';

class Albums extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list_data_album: [],
            list_name_column: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(data => { this.setState({
                list_data_album: data,
                list_name_column: Object.keys(data[0])
            })
        })
    }

    render() {
        return (
            <div>
                <Table
                    tableName="Album Table"
                    listData={this.state.list_data_album}
                    listColumnName={this.state.list_name_column}
                />
            </div>
        );
    }
}

export default Albums;
