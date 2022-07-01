import React, { Component } from 'react';
import Table from '../components/Table';

class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list_data_user: [],
            list_name_column: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3030/api/v1/users')
            .then(response => response.json())
            .then(data => { this.setState({
                list_data_user: data.data,
                list_name_column: Object.keys(data.data[0])
            })
        })
    }



    render() {
        return (
            <div>
                <Table
                    tableName="User Table"
                    listData={this.state.list_data_user}
                    listColumnName={this.state.list_name_column}
                />
            </div>
        );
    }
}

export default Users;
