import React, { Component } from 'react';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	hidden: [],
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
    }


    render() {
    	let table = this.state.table
    	/*
    	let rows = []
    	if (table.length > 0) {
    		for (let i = 0; i < table.length; i++) {
    			if(this.state.hidden.includes(table[i].column_id))
    				return
    			for (let n = 0; n < table[i].rows.length; n++) {
    				rows[n][rows[n].length] = table[i].rows[n]
    			}
    		}
    	}*/

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
														return <td key={i}>{cell}</td>
														else if(row.type === "header")
															return <th key={i} onClick={() => this.sort(i, this)}>{cell}</th>
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

export default Table;
