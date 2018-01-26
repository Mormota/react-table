import React, { Component } from 'react';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	hidden: this.props.hidden,
        	table: this.props.table
        }
    }



    sort = (field) => {
    	
    	let table = this.state.table.slice(1, this.state.table.length)
    	table.sort(function(a, b) {
			var nameA = a.cells[field]
			var nameB = b.cells[field]
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}

			// a neveknek egyeznie kell
			return 0;
		});
		table.unshift(this.state.table[0])
		this.setState({table: table})
    	console.log(table)
    };

    hide = (field) => {
    	let hidden = this.state.hidden
    	hidden.push(field)
    	this.setState({hidden: hidden})
    }


    render() {
    	let table = this.state.table
        return (
            <div>
				<table>
					<tbody>
						{
							table.map((row, n) => (
									<tr key={n}>{
										row.cells.map(
											(cell, i) => {
												if(!this.state.hidden.includes(i)){
													if(row.type === "cell")
														return <td key={i}>{cell} </td>
														else if(row.type === "header")
															return (
																<th key={i} onClick={() => this.sort(i, this)}>
																	{cell}
																	<span onClick={() => this.hide(i)}>Hide</span>
																</th>)
												}})
									}</tr>
								))
						}
					</tbody>
				</table>
            </div>
        );
    }
}
Table.defaultProps = { hidden: [] };
export default Table;
