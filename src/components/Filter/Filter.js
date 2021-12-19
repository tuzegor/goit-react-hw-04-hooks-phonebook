import React from 'react';
import PropTypes from 'prop-types';
import style from './Filter.module.css';

function Filter({ filter, findName }) {
  return (
    <div className={style.filter}>
      <label className={style.item}>
        <span>Find contacts by name</span>
        <input
          className={style.field}
          type="text"
          value={filter}
          onChange={e => findName(e.target.value)}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  findName: PropTypes.func,
};

export default Filter;
