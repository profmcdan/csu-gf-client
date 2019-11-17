import React, { Fragment, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../config';
import { Store } from '../../configureStore';
import { Table } from 'react-bootstrap';
import { GET_MEMBERS } from '../../actions';

const Members = (props: any) => {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    getMemberList();
  }, []);

  const getMemberList = async () => {
    const accessToken = localStorage.getItem('accessToken');
    const config = {
      headers: { Authorization: 'Bearer ' + accessToken },
    };

    try {
      const res = await axios.get(`${BASE_URL}/profile/members/`, config);
      console.log(res.data);
      return dispatch({
        type: GET_MEMBERS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <Fragment>
      <div className="container member-list">
        <h3>Member List</h3>
        {!state.auth.isLoggedIn && <Redirect to="/login" />}

        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
              <th>Year of Graduatiom</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {state.members &&
              state.members.map((member: any) => (
                <tr key={member.id}>
                  <td>#</td>
                  <td>{member.user.first_name}</td>
                  <td>{member.user.last_name}</td>
                  <td>{member.department}</td>
                  <td>{member.graduation_year}</td>
                  <td>{member.user.phone}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
};

export default Members;
