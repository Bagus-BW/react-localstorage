import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <div className='container'>
                <h1 className='mt-5'>{this.props.tableName}</h1>
                <table className='table table-striped table-hover'>
                    <thead>    
                        <tr className='table-dark text-center'>
                            <th>No</th>
                            {this.props.listColumnName.map((item, index) =>
                                <th key={index}>{item.toString().toUpperCase()}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.listData.map((row, index1) => 
                            <tr>
                                <th key={index1}>{index1+1}</th>
                                {this.props.listColumnName.map((item, index2) =>
                                    <td key={index2}>{row[item].toString()}</td>
                                )}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;
