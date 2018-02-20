import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';

export default class Pagination extends Component {
  render() {
    return (
        <ReactPaginate previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.props.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={(page) => this.props.search({ page: page.selected + 1, size: 10 })}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"} />
    )
  }
}
