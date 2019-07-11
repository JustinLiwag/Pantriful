import React, { Component } from "react";
import { connect } from "react-redux";
import {
    getFoodProfile,
    sendDeliveryDetails
} from "../../../actions/foodProfileActions";
import Spinner from '../../common/Spinner';

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

class DeliveryDetailsContainer extends Component {
    state = {
        step: 1,
        street: "",
        city: "",
        state: "",
        country: "",
        zipcode: "",
        aptOrBldgNumber: "",
        deliveryDay: "",
        deliveryTime: "",
        phoneNumber: ""
    };

    componentWillMount = () => {
        this.props.getFoodProfile();
    };

    // Proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Proceed to the previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    // Handle text fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    // Handle checkbox change
    handleOptionChange = changeEvent => {
        this.setState({
            [changeEvent.target.name]: changeEvent.target.value
        });
    };

    // Create payload for API when submitted   
    createSubmit = () => {
        const payload = {
            street: this.state.street,
            city: this.state.city,
            state: this.state.state,
            country: this.state.country,
            zipcode: this.state.zipcode,
            aptOrBldgNumber: this.state.aptOrBldgNumber,
            deliveryDay: this.state.deliveryDay,
            deliveryTime: this.state.deliveryTime,
            phoneNumber: this.state.phoneNumber
        };
        console.log(payload)
        this.props.sendDeliveryDetails(payload, this.props.history);
    };

    render() {
        const { foodProfile, loading } = this.props.foodProfile;
        const { step } = this.state;
        const {
            street,
            city,
            state,
            country,
            zipcode,
            aptOrBldgNumber,
            deliveryDay,
            deliveryTime,
            phoneNumber
        } = this.state;
        const values = {
            street,
            city,
            state,
            country,
            zipcode,
            aptOrBldgNumber,
            deliveryDay,
            deliveryTime,
            phoneNumber
        };

        if (foodProfile === null || loading) {
            return <Spinner />;
        } else {
            switch (step) {
                case 1:
                    return (
                        <StepOne
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            values={values}
                            handleChange={this.handleChange}
                        />
                    );
                case 2:
                    return (
                        <StepTwo
                            submit={this.createSubmit}
                            prevStep={this.prevStep}
                            values={values}
                            handleChange={this.handleOptionChange}
                        />
                    );
                default:
                    return null;
            }
        }
    }
}

const mapStateToProps = state => ({
    foodProfile: state.foodProfile,
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { getFoodProfile, sendDeliveryDetails }
)(DeliveryDetailsContainer);
