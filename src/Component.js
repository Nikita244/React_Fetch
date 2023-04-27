import React, {useState, useEffect} from 'react';
import './Component.css';
import axios from 'axios';

const url = "https://api.github.com/users";

const Component = () => {

    const [users, setUsers] = useState([]);

    const getData = async () => {
        const response = await axios.get(url);
        console.log(response);
        setUsers(response.data);
    };
    useEffect(() => {
        getData();
    },[]);

  return (
    <>
      <h1 className='pt-5'>Fetch Component <i class="bi bi-github"></i> Profiles</h1>
      <ul className=' px-4 users'>
        {users.map((el) => {
          const { login, id, avatar_url: img, html_url } = el;
          return (
            <li key={id} className="shadow">
              <img src={img} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url} target='blank'> <i class="bi bi-eye-fill"></i> View profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  )
}

export default Component
