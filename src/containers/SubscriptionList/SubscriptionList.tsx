import React, { useEffect, useState } from 'react';
import api from '../../api';
import { UserDTO } from '../../types';
import './SubscriptionList.css'
import { withRouter } from 'react-router-dom';
import { render } from 'react-dom';


const SubscriptionList = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // TODO: cache results
  useEffect(() => {
    api.get('/subscriptions')
      .then(res => { setSubscribers(res.data); setIsLoading(false) });
  }, []);

  const renderSubscriptions = () => {
    return subscribers.map((user:UserDTO) => 
    <div className="table__row col-12" key={ user.id }>
      <span className="table__text">{ user.name }</span>
      <span className="table__text--sm">{ user.email }</span>
    </div>);
  }


  return (
    <div>
        <h1 className="text--lg">Subscription List</h1>
        <div className="box-shadow--lg row">
          { isLoading ? (<h4 className="mx-auto">Loading data...</h4>) : renderSubscriptions() }
        </div>
    </div>
  );
}

export default withRouter(SubscriptionList);