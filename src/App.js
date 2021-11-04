import React, { Component } from 'react';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Sections from './components/Section/Sections';
export default class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    countTotalFeedback() {
        return Object.values(this.state).reduce((acc, stats) => {
            acc += stats;
            return acc;
        }, 0);
    }

    countPositiveFeedbackPercentage() {
        return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }

    onBtnClick = btn => {
        this.setState({ [btn]: this.state[btn] + 1 });
    };

    render() {
        return (
            <Sections title="Please leave feedback">
                <FeedbackOptions
                    options={Object.keys(this.state)}
                    onLeaveFeedback={this.onBtnClick}
                />
                <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()}
                />
            </Sections>
        );
    }
}
