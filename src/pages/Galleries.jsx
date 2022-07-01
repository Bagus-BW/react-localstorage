import React, { Component } from 'react';
import Table from '../components/Table';

class Galleries extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list_data_gallery: [],
            list_name_column: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3030/api/v1/gallery')
            .then(response => response.json())
            .then(data => { this.setState({
                list_data_gallery: data.data,
                list_name_column: Object.keys(data.data[0])
            })
        })
    }

    render() {
        return (
            <div>
                <Table
                    tableName="Gallery Table"
                    listData={this.state.list_data_gallery}
                    listColumnName={this.state.list_name_column}
                />
            </div>
        );
    }
}

export default Galleries;
