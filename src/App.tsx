import '../../../Desktop/styles.scss';
import {useEffect, useState} from '../../../Desktop/react';
import {faker} from '@faker-js/faker';
import MyImage from './avatar.jpg';
import moment from 'moment';

// import CustomerTable from "./components/CustomerTable";

/**
 *
 * Welcome to the Data Sorting coding challenge.
 *
 * Load json data from `/public/data.json` and render it in a table
 * using `/public/table.png` design.
 *
 * Make this behaviour reusable.
 *
 * Ask questions & have fun!
 *
 */
function App() {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        console.log(1);
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('data.json')
            .then((res) => res.json())

            .then((response) => {
                setData(response);
                setTimeout(() => console.log(data));

            });
    };
    //very slow render when trying to load non-existent links, so I commented img part
    return (
        <div>
            <table>
                <caption>Phoenix Technologies Code Challenge</caption>
                <thead>
                <tr>
                    <th>User</th>
                    <th>Name</th>
                    <th>Joined On</th>
                    <th>Last Login</th>
                    <th>Transactions/Balance</th>
                    <th>Status</th>
                    <th>Bio</th>
                </tr>
                </thead>
                {data.map((item, i) => (
                    <tbody key={item.id}>
                    <tr className='item'>
                        <td>
                            <div className='item__user'>
                                {/*<img className='item__user-avatar' src={item.avatar}/>,*/}
                                {<img className='item__user-avatar' src={MyImage} alt='avatar'/>}
                                <div className='item__user-info'>
                                    <div className='item__user-name'>{item.userName}</div>
                                    <div className='item__user-email'>{item.email}</div>
                                </div>
                            </div>
                        </td>
                        <td>{item.name}</td>
                        <td className='item__joined-on'>{moment(item.joinedAt).format('MM/DD/YYYY')}</td>
                        <td className={'item__last-login'}>{moment(item.lastLogin).format('MM/DD/YYYY HH:mm:ss')}</td>
                        <td className='item__balance'>
                            <div className='item__balance-wrapper'>
                                <div
                                    className='item__balance-negative'>{'-$' + (+faker.finance.amount()).toFixed(2)}</div>
                                <div className='item__balance-positive'>{'$' + (500).toFixed(2)}</div>
                            </div>
                        </td>
                        <td className='item__status'>
                            <div className='item__status-wrapper'>
                                <span className='item__status-name'>{item.status}</span>
                                <div
                                    className={'item__status-badge ' + (item.status === 'Inactive' ? 'inactive' : 'active')}></div>
                            </div>
                        </td>
                        <td>{item.bio}</td>
                    </tr>
                    </tbody>
                ))}
            </table>
        </div>
    );
}

export default App;
