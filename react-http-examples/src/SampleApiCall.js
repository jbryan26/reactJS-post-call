import React from 'react';

class SampleApiCall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {getResultValue: "", reservationId: 10000};
        this.postRequestOnClick = this.postRequestOnClick.bind(this);
        this.getRequestOnClick = this.getRequestOnClick.bind(this);
    }
    render() {
        return <div>
                <button onClick={() => this.getRequestOnClick()}>Click this button to get</button>
                <p>Here is the result of the get request: {this.state.getResultValue}</p>
                <button onClick={() => this.postRequestOnClick(this.state.reservationId)}>Click this button to post a default reservation</button>
            </div>
    }

    getRequestOnClick() {
        console.log('Sending GET request');
        let xhr = new XMLHttpRequest();
        xhr.addEventListener('load', () => {
            console.log(xhr.responseText);
            this.setState({getResultValue: xhr.responseText})
        });

        xhr.open('GET', 'https://gs-reservations.azurewebsites.net/api/Reservation');
        xhr.setRequestHeader('Accept','application/json');
        xhr.setRequestHeader('Content-type','application/json');
        xhr.send()
    }

    postRequestOnClick(reservationId) {
        console.log('Sending POST request');
        let xhr = new XMLHttpRequest();
        xhr.addEventListener('load', () => {
            console.log(xhr.responseText);
        });

        xhr.open('POST', 'https://gs-reservations.azurewebsites.net/api/Reservation');
        xhr.setRequestHeader('Accept','application/json');
        xhr.setRequestHeader('Content-type','application/json');
        xhr.send(JSON.stringify({
            id: reservationId,
            reservationDate: "2020-01-25T02:06:29.337Z",
            roomName: "React Testing Room",
            startTime: "2020-01-25T02:06:29.337Z",
            endTime: "2020-01-26T02:06:29.337Z",
            reservationTitle: "This is a test from the react snippet",
            reservationHost: "Raphi Ortega",
            reservationAttendees: 5,
            reservationType: "Meeting",
            hasAlcohol: false,
            reservationNotes: "This is a sample meeting to discuss sample things",
            foodDetailItems: []
        }));
        this.setState({reservationId: reservationId + 1})
    }
}

export default SampleApiCall;