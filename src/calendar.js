import React, {Component} from 'react';
import {MONTHS} from "./const";
import MonthDay from './month-day';


class Calendar extends Component {
    constructor() {
        super();
        let dt = new Date();
        this.state = {
            date: new Date(),
            month: dt.getMonth(),
            year: dt.getFullYear()
        };
    }
    render() {
        return ([
            <header key="1" className="calendar__month">{this.renderHeader()}</header>,
            <div key="2" className="month-days"><MonthDay
                date={this.state.date}
                year={this.state.year}
                month={this.state.month} ></MonthDay></div>,
            <footer key="3" className="days-name">{this.renderWeekDays()}</footer>
        ])
    }
    renderHeader() {
        let previous = "<";
        let next = ">";
        let months = MONTHS;
        return ([
            <button className="calendar__previous-month" onClick={() => this.setPreviousMonth()}> {previous} </button>,
            <h2> {months[this.state.month]} {this.state.year}</h2>,
            <button className="calendar__next-month" onClick={() => this.setNextMonth()}> {next} </button>
        ])
    }
    renderWeekDays() {
        let daysName = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
        return daysName.map((day) =>
            <p className="days-name__name">{day}</p>
        );
    }
    setNextMonth() {
        if (this.state.month + 1 > 11) {
            this.setState({
                month: 0,
                year: this.state.year + 1
            })
        } else {
            this.setState({
                month: this.state.month + 1
            })
        }
    }
    setPreviousMonth() {
        if (this.state.month - 1 < 0) {
            this.setState({
                month: 11,
                year: this.state.year - 1
            });
        } else {
            this.setState({
                month: this.state.month - 1
            })
        }
    }
}

export default Calendar;

