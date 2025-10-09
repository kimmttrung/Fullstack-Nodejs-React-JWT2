// import { useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';
import './Users.scss';
import { fetchAllUser, deleteUser } from '../../service/userService';
import ReactPaginate from 'react-paginate';
import { toast } from 'react-toastify';
import ModalDelete from './ModalDelete';

const Users = () => {
    const [listUsers, setListUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentLimit, setCurrentLimit] = useState(3);
    const [totalPages, setTotalPages] = useState(0);

    const [isShowModalDelete, setIsShowModalDelete] = useState(false);

    useEffect(() => {
        fetchUser();
    }, [currentPage])

    const fetchUser = async () => {
        let res = await fetchAllUser(currentPage, currentLimit);
        if (res && res.data && res.data.EC === 0) {

            // console.log("check res", res.data);
            setTotalPages(res.data.DT.totalPages);
            setListUsers(res.data.DT.users);
        }
    }

    const handlePageChange = async (event) => {
        setCurrentPage(+event.selected + 1);
    }

    const handleDeleteUser = async (user) => {
        let res = await deleteUser(user);
        console.log("check delete user", res);
        if (res && res.data.EC === 0) {
            toast.success(res.data.EM);
            await fetchUser();
        } else {
            toast.error(res.data.EM)
        }
    }

    return (
        <>
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
                        <table className='table table-bordered table-hover'>
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
                                                    <td>
                                                        <button className='btn btn-warning mx-3'>Edit</button>
                                                        <button className='btn btn-danger'
                                                            onClick={() => handleDeleteUser(item)}
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </> :
                                    <><tr><td>Not found user</td></tr></>}
                            </tbody>
                        </table>
                    </div>
                    <div className='user-footer'>
                        {totalPages > 0 &&
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
                                pageCount={totalPages}
                                marginPagesDisplayed={3}
                                pageRangeDisplayed={4}
                                onPageChange={handlePageChange}
                                containerClassName="pagination"
                                activeClassName="active"
                            // forcePage={pageOffset}
                            />
                        }
                    </div>
                </div>
            </div>
            <ModalDelete show={isShowModalDelete} />
        </>


    )
}
export default Users;