import React from 'react';
import './UserAddForm.css';

class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            isGoldClient: false
        };
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    }

    render() {
        const {name, email, isGoldClient} = this.state;

        return (
            <form
                className="user-add-form"
                onSubmit={(event) => this.props.submitAddForm(event, name, email, isGoldClient)}
            >
                <h2>Add Users:</h2>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    onChange={(event) => this.updateName(event)}
                    required
                    pattern="[a-zA-Z'-'\s]*"
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    onChange={(event) => this.updateEmail(event)}
                    required
                />
                <label htmlFor="is-gold-client">Gold Client</label>
                <input
                    type="checkbox"
                    id="is-gold-client"
                    value="true"
                    onChange={(event) => this.updateIsGoldClient(event)}
                />

                <input type="submit" value="Add User" />
            </form>
        )
    }
}

export default UserAddForm;