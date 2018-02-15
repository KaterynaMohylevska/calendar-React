import React, {Component} from 'react';

class MonthDay extends Component{
    render(){
        return ([
            this.previousMonthDays(),
            this.thisMonthDays(),
            this.nextMonthDays()
        ])
    }
    previousMonthDays(){
        let prevDays = [];
        let date = new Date(this.props.year, this.props.month, 1);
        let weekDay = date.getDay() || 7;
        let numberPreviousDays = new Date(this.props.year + 1, this.props.month, 0).getDate();
        let startDay = numberPreviousDays - weekDay + 2;

        for (let i = 0; i < weekDay - 1; i++) {
            prevDays.push(<button className='month-day__prev month-day'>{startDay}</button>);
            startDay++;
        }
        return prevDays;
    }

    thisMonthDays(){
        let days = [];
        let numberDays = new Date(this.props.year, this.props.month + 1, 0).getDate();
        if (this.props.month + 1 > 11) {
            let numberDays = new Date(this.props.year + 1, 1, 0).getDate();
        }
        let today = this.props.date.getDate();
        for (let j = 1; j <= numberDays; j++) {
            if (j == today && this.props.date.getMonth() == this.props.month){
                days.push(<button className='month-day month-day__today'>{j}</button>);
            }else{
                days.push(<button className='month-day'>{j}</button>);
            }
        }
        return days;
    }

    nextMonthDays(){
        let date = new Date(this.props.year, this.props.month, 1);
        let nextDays = [];
        let weekDay = date.getDay() || 7;
        let numberDays = new Date(this.props.year, this.props.month + 1, 0).getDate();
        if (this.props.month + 1 > 11) {
            let numberDays = new Date(this.props.year + 1, 1, 0).getDate();
        }
        let nextMonthDays = 7 - (weekDay + numberDays - 1) % 7;
        if (nextMonthDays > 0 && nextMonthDays < 7) {
            for (let j = 1; j <= nextMonthDays; j++) {
                nextDays.push(<button className='month-day__next month-day'>{j}</button>);
            }
        }
        return nextDays;
    }
}

export default MonthDay;