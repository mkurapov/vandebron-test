import React, { useEffect, useState } from 'react';
import api from '../api';
import { UserDTO } from '../types';

const SubscriptionList = () => {
  const [subscribers, setSubscribers] = useState([]);

  // TODO: cache results
  useEffect(() => {
    api.get('/subscriptions')
      .then(res => setSubscribers(res.data));
  }, []);

  return (
    <div>
        <h1 className="text--lg">Subscription List</h1>
        { subscribers.map((user:UserDTO) => <div className="table__row" key={user.id}>{ user.name }</div>)}
    </div>
  );
}

export default SubscriptionList;