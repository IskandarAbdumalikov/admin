import React from 'react'
import "./loading.scss"

const Loading = () => {
    let loadingItem = (
      <div className="loading__card">
        <div className="loading__img bg__animation"></div>
        <div className="loading__info">
          <div className="loading__title bg__animation"></div>
          <div className="loading__title bg__animation"></div>
          <div className="loading__title bg__animation"></div>
        </div>
      </div>
    );
  return (
    <div className="loading__wrapper container">
      {loadingItem}
      {loadingItem}
      {loadingItem}
    </div>
  );
}

export default Loading