import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {MONTHS} from "./const";

class Calendar extends Component {
    constructor() {
        super();
        let dt = new Date();
        this.state = {
            date: new Date(),
            month: dt.getMonth(),
            year: dt.getFullYear()
        };

        this.months = MONTHS;
    }

    render() {
        return ([
            <header key="1" className="month">{this.renderHeader()}</header>,
            <div key="2" className="month-days">{this.renderMonthDays()}</div>,
            <footer key="3" className="days-name">{this.renderWeekDays()}</footer>
        ])
    }

    renderHeader() {
        let previous = "<";
        let next = ">";
        return ([
            <button className="month__previous" onClick={() => this.setPreviousMonth()}> {previous} </button>,
            <h2 className="month__name"> {this.months[this.state.month]} {this.state.year}</h2>,
            <button className="month__next" onClick={() => this.setNextMonth()}> {next} </button>
        ])

    }

    renderMonthDays() {
        let allDays = [];
        let date = new Date(this.state.year, this.state.month, 1);
        let weekDay = date.getDay() || 7;
        let numberDays = new Date(this.state.year, this.state.month + 1, 0).getDate();
        if (this.month + 1 > 11) {
            let numberDays = new Date(this.state.year + 1, 1, 0).getDate();
        }
        let numberPreviousDays = new Date(this.state.year + 1, this.state.month, 0).getDate();
        let startDay = numberPreviousDays - weekDay + 2;

        for (let i = 0; i < weekDay - 1; i++) {
            allDays.push(<button className='month-day__prev month-day'>{startDay}</button>);
            startDay++;
        }

        for (let j = 1; j <= numberDays; j++) {
            allDays.push(<button className='month-day'>{j}</button>);
        }

        let nextMonthDays = 7 - (weekDay + numberDays - 1) % 7;
        if (nextMonthDays > 0 && nextMonthDays < 7) {
            for (let j = 1; j <= nextMonthDays; j++) {
                allDays.push(<button className='month-day__next month-day'>{j}</button>);
            }
        }
        // if (this.date.getMonth() == this.month) {
        //     console.log("dsf");
        //     let today = this.root_element.getElementsByClassName("month-day")[this.date.getDate() + weekDay - 2];
        //     today.classList.add("month-day__today");
        //
        // }
        return allDays;
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

