// import { useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';
import './Users.scss';
import { fetchAllUser } from '../../service/userService';
import ReactPaginate from 'react-paginate';

const Users = () => {

    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {
        fetchUser();
    }, [])

    const fetchUser = async () => {
        let res = await fetchAllUser();
        if (res && res.data && res.data.EC === 0) {
            setListUsers(res.data.DT);
            console.log("check res", res.data);
        }
    }

    const handlePageChange = (event) => {

    }

    return (
        <div className='container'>
            <div className='manage-users-container'>
                <div className='user-header'>
                    <div className='title'>
                        <h3>Table User</h3>
                    </div>
                    <div className='actions'>
                        <button className='btn btn-success'>Refesh</button>
                        <button className='btn btn-primary'>Add new user</button>
                    </div>
                </div>
                <div className='user-body'>
                    <table class='table table-bordered table-hover'>
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Id</th>
                                <th scope="col">Email</th>
                                <th scope="col">Username</th>
                                <th scope="col">Group</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listUsers && listUsers.length > 0 ?
                                <>
                                    {listUsers.map((item, index) => {
                                        return (
                                            <tr key={`row-${index}`}>
                                                <td>{index + 1}</td>
                                                <td>{item.id}</td>
                                                <td>{item.email}</td>
                                                <td>{item.username}</td>
                                                <td>{item.Group ? item.Group.name : ''}</td>
                                            </tr>
                                        )
                                    })}
                                </> :
                                <><span>Not found user</span></>}
                        </tbody>
                    </table>
                </div>
                <div className='user-footer'>
                    <ReactPaginate
                        previousLabel="Previous"
                        nextLabel="Next"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        // pageCount={pageCount}
                        marginPagesDisplayed={3}
                        pageRangeDisplayed={4}
                        pageCount={50}
                        onPageChange={handlePageChange}
                        containerClassName="pagination"
                        activeClassName="active"
                    // forcePage={pageOffset}
                    />
                </div>
            </div>
        </div>

    )
}
export default Users;