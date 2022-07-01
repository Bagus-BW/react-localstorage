import React, { Component } from 'react';
import Table from '../components/Table';
import './../assets/css/style-post.css';

class Post extends Component {

    constructor(props) {
        super(props);

        this.state = {
            list_data_post: [],
            list_name_column: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => { this.setState({
                list_data_post: data,
                list_name_column: Object.keys(data[0])
            })
        })
    }

    render() {
        return (
            <div>
                <Table 
                    tableName="Post Table"
                    listData={this.state.list_data_post}
                    listColumnName={this.state.list_name_column}
                />
            </div>
        );
    }
}

export default Post;
