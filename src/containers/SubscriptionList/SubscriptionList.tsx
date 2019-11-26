import React, { useEffect, useState } from 'react';
import api from '../../api';
import { UserDTO } from '../../types';
import './SubscriptionList.css'

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
        <div className="box-shadow--lg row">
          { subscribers.map((user:UserDTO) => 
            <div className="table__row col-12" key={user.id}>
              <span className="table__text">{ user.name }</span>
              <span className="table__text--sm">{ user.email }</span>
            </div>
          )}
        </div>
    </div>
  );
}

export default SubscriptionList;