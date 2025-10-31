import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { useEffect, useState } from 'react';
import { fetchGroup } from '../../service/userService';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import _ from "lodash";

const ModalUser = (props) => {
    const defaultUserData = {
        email: '',
        phone: '',
        username: "",
        password: '',
        address: '',
        sex: '',
        group: ''
    }
    const validsInputsDefault = {
        email: true,
        phone: true,
        username: true,
        password: true,
        address: true,
        sex: true,
        group: true,
    }
    const [validInputs, setValidInputs] = useState(validsInputsDefault);

    const [userData, setUserData] = useState(defaultUserData);
    const [userGroup, setUserGroup] = useState([]);
    const getGroups = async () => {
        let res = await fetchGroup();
        if (res && res.data && res.data.EC === 0) {
            setUserGroup(res.data.DT);
        } else {
            toast.error(res.data.EM);
        }
    }
    useEffect(() => {
        getGroups();
    }, [])

    const handleOnChangeInput = (value, name) => {
        let _userData = _.cloneDeep(userData);
        _userData[name] = value;
        setUserData(_userData);
    }

    const checkValidateInput = () => {
        // create user
        let arr = ['email', 'phone', 'password', 'group'];
        let check = true;
        for (let i = 0; i < arr.length; i++) {
            if (!userData[arr[i]]) {
                toast.error(`Empty input ${arr[i]}`);
                check = false;
                break;
            }
        }
    }
    return (
        <>
            <Modal
                {...props}
                size="lg"
                // centered
                show={true}
                className='modal-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <span>{props.title}</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='content-body row'>
                        <div className='col-12 col-sm-6 form-group'>
                            <label>Email address (<span className='red'>*</span>)</label>
                            <input
                                className={validInputs.email ? 'form-control' : 'form-control is-invalid'}
                                type='email' value={userData.email}
                                onChange={(event) => handleOnChangeInput(event.target.value, "email")}
                            />
                        </div>
                        <div className='col-12 col-sm-6 form-group'>
                            <label>Phonenumber (<span className='red'>*</span>)</label>
                            <input className='form-control' type='text' value={userData.phone}
                                onChange={(event) => handleOnChangeInput(event.target.value, "phone")}

                            />
                        </div>
                        <div className='col-12 col-sm-6 form-group'>
                            <label>Username </label>
                            <input className='form-control' type='email' value={userData.username}
                                onChange={(event) => handleOnChangeInput(event.target.value, "username")}
                            />
                        </div>
                        <div className='col-12 col-sm-6 form-group'>
                            <label>Password (<span className='red'>*</span>)</label>
                            <input className='form-control' type='password' value={userData.password}
                                onChange={(event) => handleOnChangeInput(event.target.value, "password")}
                            />
                        </div>
                        <div className='col-12 col-sm-12 form-group'>
                            <label>Address </label>
                            <input className='form-control' type='text' value={userData.address}
                                onChange={(event) => handleOnChangeInput(event.target.value, "address")}
                            />
                        </div>
                        <div className='col-12 col-sm-6 form-group'>
                            <label>Gender</label>
                            <select className='form-select'
                                onChange={(event) => handleOnChangeInput(event.target.value, "sex")}
                            >
                                <option selected value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className='col-12 col-sm-6 form-group'>
                            <label>Group (<span className='red'>*</span>)</label>
                            <select
                                className='form-select'
                                onChange={(event) => handleOnChangeInput(event.target.value, "group")}
                            >
                                {userGroup.length > 0 &&
                                    userGroup.map((item, index) => {
                                        return (
                                            <option key={`group-${index}`} value={item.id}>{item.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={props.handleClose}>Close</Button>
                    <Button variant='primary' onClick={props.confirmDeleteUser}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalUser;