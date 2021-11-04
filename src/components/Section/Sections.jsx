import React from 'react';
import PropTypes from 'prop-types';
import s from './Sections.module.scss';

const Sections = ({ title, children }) => {
    return (
        <div className={s.section}>
            <h1 className={s.mainTitle}>{title}</h1>
            {children}
        </div>
    );
};

Sections.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Sections;
