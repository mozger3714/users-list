import React from 'react';

export const Success = ({ count }) => {
  return (
    <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Success!</h3>
      <p>All {count} users got your invitation!</p>
      <button onClick={() => window.location.reload()} className="send-invite-btn">Go back!</button>
    </div>
  );
};
