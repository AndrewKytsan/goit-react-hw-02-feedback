import React from 'react';
import PropTypes from 'prop-types';
import Buttons from '../Buttons/Buttons';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {options.map(btn => (
                <Buttons
                    key={btn}
                    btnName={btn}
                    onLeaveFeedback={onLeaveFeedback}
                />
            ))}
        </div>
    );
};

FeedbackOptions.prototype = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
