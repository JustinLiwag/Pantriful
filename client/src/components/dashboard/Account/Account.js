import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../../actions/profileActions";

const heightOptions = ["Select one", "4'5\"", "4'6\"", "4'7\"", "4'8\"", "4'9\"", "4'10\"", "4'11\"","5'0\"",
                       "5'1\"", "5'2\"", "5'3\"", "5'4\"", "5'5\"", "5'6\"", "5'7\"", "5'8\"", "5'9\"", "5'10\"", "5'11\"", "6'0\"",
                       "6'1\"", "6'2\"", "6'3\"", "6'4\"", "6'5\"", "6'6\"", "6'7\"", "6'8\"", "6'9\"", "6'10\"", "6'11\"", "7'0\"", "7'1\"+"]

class Account extends Component {    
    state = {
        tab: "personnal",

        // Personnal
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        gender: "",
        weight: "",
        height: "",

        // Delivery Details
        deliveryDay: "",
        deliveryTime: "",
        street: "",
        state: "",
        country: "",
        zipcode: "",
        aptOrBldgNumber: "",
        phoneNumber: ""
    }

    componentDidMount () {
        this.setState({
            // Personnal
            firstName: this.props.profile.profile.user.name,
            lastName: this.props.profile.profile.user.lastName,
            email: this.props.profile.profile.user.email,
            age: this.props.profile.profile.age,
            gender: this.props.profile.profile.gender,
            weight: this.props.profile.profile.weight,
            height: this.props.profile.profile.height,

            // Delivery
            deliveryDay: this.props.profile.profile.deliveryDay ,
            deliveryTime: this.props.profile.profile.deliveryTime,
            street: this.props.profile.profile.street,
            state: this.props.profile.profile.state,
            country: this.props.profile.profile.country,
            zipcode: this.props.profile.profile.zipCode,
            aptOrBldgNumber: this.props.profile.profile.aptOrBldgNumber,
            phoneNumber: this.props.profile.profile.phoneNumber
        })
    }

    changeTabs = (e, tab) => {
        e.preventDefault() 
        this.setState({
            tab: tab
        })
    }

    // Handle text fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    renderHeightOptions = (options) => {
        const results = []
        for (let i = 0; i < options.length; i++) {
          results.push(
            <option key={options[i]} value={options[i]}>{options[i]}</option>
          )
        }
        return results;
      }
    
    render() {
        console.log(this.state)
        console.log(this.props.profile)
        return (
            <div className="relative mb-48 mt-20 mx-4 lg:max-w-2xl lg:mx-auto">
                <div className=" border-b-2 border-gray-300 py-4 mb-4">
                    <h3 className="text-white text-3xl font-bold text-center font-bold tracking-wide">My Account</h3>
                </div>
                <div className="shadow-lg bg-white px-1 sm:px-8 py-8 rounded">

                    <div className="flex border-b-2 border-gray-200">
                        <button onClick={(e) => this.changeTabs(e, "personnal")} className={"pb-2 text-gray-700 font-bold " + (this.state.tab === "personnal" ? "border-b-4 border-orange-base" : null)}>Personnal Information</button>
                        <button onClick={(e) => this.changeTabs(e, "delivery")} className={"pb-2 text-gray-700 font-bold ml-4 " + (this.state.tab === "delivery" ? "border-b-4 border-orange-base" : null)}>Delivery Information</button>
                    </div>

                    {/* Personnal */}
                    <div>
                        <div className={"flex flex-wrap " + (this.state.tab === "personnal" ? "block" : "hidden")}>
                            <div className="mx-auto px-2 sm:px-4 w-full sm:w-1/2">
                                <label className="block text-left w-full mt-3 mb-2 text-gray-600 font-bold pl-2">First Name</label>
                                <input
                                    className="w-full bg-white outline-none text-gray-600 shadow border border-gray-border rounded py-2 px-4 block appearance-none leading-normal"
                                    type="text"
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={this.handleChange("firstName")}
                                    id="firstName"
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="mx-auto px-4 w-full sm:w-1/2">
                                <label className="block text-left w-full mt-3 mb-2 text-gray-600 font-bold pl-2">Last Name</label>
                                <input
                                    className="w-full bg-white outline-none text-gray-600 shadow border border-gray-border rounded py-2 px-4 block appearance-none leading-normal"
                                    type="text"
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange={this.handleChange("lastName")}
                                    id="lastName"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div className="mx-auto px-4 w-full sm:w-2/3">
                                <label className="block text-left w-full mt-3 mb-2 text-gray-600 font-bold pl-2">Email</label>
                                <input
                                    className="w-full bg-white outline-none text-gray-600 shadow border border-gray-border rounded py-2 px-4 block appearance-none leading-normal"
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange("email")}
                                    id="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="mx-auto px-4 w-full sm:w-1/3">
                                <label className="block text-left w-full mt-3 mb-2 text-gray-600 font-bold pl-2">Age</label>
                                <input
                                    className="w-full bg-white outline-none text-gray-600 shadow border border-gray-border rounded py-2 px-4 block appearance-none leading-normal"
                                    type="number"
                                    name="age"
                                    value={this.state.age}
                                    onChange={this.handleChange("age")}
                                    id="age"
                                    placeholder="Age"
                                />
                            </div>
                            <div className="mx-auto px-4 w-full sm:w-1/2">
                                <label className="block text-left w-full mt-3 mb-2 text-gray-600 font-bold pl-2">Gender</label>
                                <select value={this.state.gender} onChange={this.handleChange("gender")} name="gender" className="w-full bg-white outline-none shadow border border-gray-border rounded py-2 px-4 block appearance-none leading-normal text-gray-600">
                                    <option value="">Select one</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="transgender">Transgender</option>
                                    <option value="Preffer not to say">Preffer not to say</option>
                                </select>
                            </div>
                            <div className="mx-auto px-4 w-full sm:w-1/2">
                                <label className="block text-left w-full mt-3 mb-2 text-gray-600 font-bold pl-2">How <span className="text-orange-base">tall</span> are you (ex. 5'5")?</label>
                                <select value={this.state.height} onChange={this.handleChange("height")} name="height" className="w-full bg-white outline-none shadow border border-gray-border rounded py-2 px-4 block appearance-none leading-normal text-gray-600">
                                    {this.renderHeightOptions(heightOptions)}
                                </select>
                            </div>
                            <div className="mx-auto px-4 w-full">
                                <label className="block text-left w-full mt-3 mb-2 text-gray-600 font-bold pl-2">How much do you <span className="text-orange-base">weigh</span> (lbs)?</label>
                                <input
                                    className="w-full bg-white outline-none text-gray-600 shadow border border-gray-border rounded py-2 px-4 block appearance-none leading-normal"
                                    type="number"
                                    name="weight"
                                    value={this.state.weight}
                                    onChange={this.handleChange("weight")}
                                    id="weight"
                                />
                            </div>
                        </div>
                    </div>
                    {/* / Personnal */}

                    {/* Delivery */}
                    <div>
                        <div className={"flex flex-wrap " +(this.state.tab === "delivery" ? "block" : "hidden")}>

                            <div className="max-w-xl mx-auto md:w-1/2 px-4 pt-4 md:pt-0 mt-4">
                                <label className="block text-left w-full mt-3 mb-2 text-gray-600 font-bold pl-2">Delivery Day</label>
                                <select value={this.state.deliveryDay} onChange={this.handleChange("deliveryDay")} name="deliveryDay" className="w-full bg-white outline-none shadow border border-gray-border rounded py-2 px-4 block appearance-none leading-normal text-gray-600">
                                    <option value="">Select an day</option>
                                    <option value="Tuesday">Tuesday</option>
                                    <option value="Wednesday">Wednesday</option>
                                    <option value="Friday">Friday</option>
                                </select>
                            </div>
                            <div className="max-w-xl mx-auto md:w-1/2 px-4 pt-4 md:pt-0 mt-4">
                                <label className="block text-left w-full mt-3 mb-2 text-gray-600 font-bold pl-2">Delivery Time</label>
                                <select value={this.state.deliveryTime} onChange={this.handleChange("deliveryTime")} name="deliveryTime" className="w-full bg-white outline-none shadow border border-gray-border rounded py-2 px-4 block appearance-none leading-normal text-gray-600">
                                    <option value="">Select a Time</option>
                                    <option value="9:00am">9:00am</option>
                                    <option value="9:30am">9:30am</option>
                                    <option value="10:00am">10:00am</option>
                                    <option value="10:30am">10:30am</option>
                                    <option value="11:00am">11:00am</option>
                                    <option value="11:30am">11:30am</option>
                                    <option value="Noon">Noon</option>
                                    <option value="1:00pm">1:00pm</option>
                                    <option value="1:30pm">1:30pm</option>
                                    <option value="2:00pm">2:00pm</option>
                                    <option value="2:30pm">2:30pm</option>
                                    <option value="3:00pm">3:00pm</option>
                                    <option value="3:30pm">3:30pm</option>
                                    <option value="4:00pm">4:00pm</option>
                                    <option value="4:30pm">4:30pm</option>
                                    <option value="5:00pm">5:00pm</option>
                                    <option value="5:30pm">5:30pm</option>
                                    <option value="6:00pm">6:00pm</option>
                                    <option value="6:30pm">6:30pm</option>
                                    <option value="7:00pm">7:00pm</option>
                                </select>
                            </div>

                            <div className="mx-auto px-4 w-full sm:w-3/4">
                                <label className="block text-left w-full mt-3 mb-2 text-gray-600 font-bold pl-2">Street</label>
                                <input
                                    className="w-full bg-white outline-none text-gray-600 shadow border border-gray-border rounded py-2 px-4 block appearance-none leading-normal"
                                    type="text"
                                    name="street"
                                    value={this.state.street}
                                    onChange={this.handleChange("street")}
                                    id="street"
                                    placeholder="Street"
                                />
                            </div>

                            <div className="mx-auto px-4 w-full sm:w-1/4">
                                <label className="block text-left w-full mt-3 mb-2 text-gray-600 font-bold pl-2">Apt/Bldg #</label>
                                <input
                                    className="w-full bg-white outline-none text-gray-600 shadow border border-gray-border rounded py-2 px-4 block appearance-none leading-normal"
                                    type="text"
                                    name="aptOrBldgNumber"
                                    value={this.state.aptOrBldgNumber}
                                    onChange={this.handleChange("aptOrBldgNumber")}
                                    id="aptOrBldgNumber"
                                    placeholder="Optional"
                                />
                            </div>

                            <div className="mx-auto px-4 md:w-1/2 pt-4 md:pt-0">
                                <label className="block text-left w-full mt-3 mb-2 text-gray-600 font-bold pl-2">State</label>
                                <select value={this.state.state} onChange={this.handleChange("state")} name="state" className="w-full bg-white outline-none shadow border border-gray-border rounded py-2 px-4 block appearance-none leading-normal text-gray-600">
                                    <option value="">Select an option</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">District Of Columbia</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                            </div>

                            <div className="mx-auto px-4 md:w-1/2 pt-4 md:pt-0">
                            <label className="block text-left w-full mt-3 mb-2 text-gray-600 font-bold pl-2">Country</label>
                            <select value={this.state.country} onChange={this.handleChange("country")} name="country" className="w-full bg-white outline-none shadow border border-gray-border rounded py-2 px-4 block appearance-none leading-normal text-gray-600">
                                <option value="">Select an option</option>
                                <option value="USA">United States</option>
                                <option value="AFG">Afghanistan</option>
                                <option value="ALA">Åland Islands</option>
                                <option value="ALB">Albania</option>
                                <option value="DZA">Algeria</option>
                                <option value="ASM">American Samoa</option>
                                <option value="AND">Andorra</option>
                                <option value="AGO">Angola</option>
                                <option value="AIA">Anguilla</option>
                                <option value="ATA">Antarctica</option>
                                <option value="ATG">Antigua and Barbuda</option>
                                <option value="ARG">Argentina</option>
                                <option value="ARM">Armenia</option>
                                <option value="ABW">Aruba</option>
                                <option value="AUS">Australia</option>
                                <option value="AUT">Austria</option>
                                <option value="AZE">Azerbaijan</option>
                                <option value="BHS">Bahamas</option>
                                <option value="BHR">Bahrain</option>
                                <option value="BGD">Bangladesh</option>
                                <option value="BRB">Barbados</option>
                                <option value="BLR">Belarus</option>
                                <option value="BEL">Belgium</option>
                                <option value="BLZ">Belize</option>
                                <option value="BEN">Benin</option>
                                <option value="BMU">Bermuda</option>
                                <option value="BTN">Bhutan</option>
                                <option value="BOL">Bolivia, Plurinational State of</option>
                                <option value="BES">Bonaire, Sint Eustatius and Saba</option>
                                <option value="BIH">Bosnia and Herzegovina</option>
                                <option value="BWA">Botswana</option>
                                <option value="BVT">Bouvet Island</option>
                                <option value="BRA">Brazil</option>
                                <option value="IOT">British Indian Ocean Territory</option>
                                <option value="BRN">Brunei Darussalam</option>
                                <option value="BGR">Bulgaria</option>
                                <option value="BFA">Burkina Faso</option>
                                <option value="BDI">Burundi</option>
                                <option value="KHM">Cambodia</option>
                                <option value="CMR">Cameroon</option>
                                <option value="CAN">Canada</option>
                                <option value="CPV">Cape Verde</option>
                                <option value="CYM">Cayman Islands</option>
                                <option value="CAF">Central African Republic</option>
                                <option value="TCD">Chad</option>
                                <option value="CHL">Chile</option>
                                <option value="CHN">China</option>
                                <option value="CXR">Christmas Island</option>
                                <option value="CCK">Cocos (Keeling) Islands</option>
                                <option value="COL">Colombia</option>
                                <option value="COM">Comoros</option>
                                <option value="COG">Congo</option>
                                <option value="COD">Congo, the Democratic Republic of the</option>
                                <option value="COK">Cook Islands</option>
                                <option value="CRI">Costa Rica</option>
                                <option value="CIV">Côte d'Ivoire</option>
                                <option value="HRV">Croatia</option>
                                <option value="CUB">Cuba</option>
                                <option value="CUW">Curaçao</option>
                                <option value="CYP">Cyprus</option>
                                <option value="CZE">Czech Republic</option>
                                <option value="DNK">Denmark</option>
                                <option value="DJI">Djibouti</option>
                                <option value="DMA">Dominica</option>
                                <option value="DOM">Dominican Republic</option>
                                <option value="ECU">Ecuador</option>
                                <option value="EGY">Egypt</option>
                                <option value="SLV">El Salvador</option>
                                <option value="GNQ">Equatorial Guinea</option>
                                <option value="ERI">Eritrea</option>
                                <option value="EST">Estonia</option>
                                <option value="ETH">Ethiopia</option>
                                <option value="FLK">Falkland Islands (Malvinas)</option>
                                <option value="FRO">Faroe Islands</option>
                                <option value="FJI">Fiji</option>
                                <option value="FIN">Finland</option>
                                <option value="FRA">France</option>
                                <option value="GUF">French Guiana</option>
                                <option value="PYF">French Polynesia</option>
                                <option value="ATF">French Southern Territories</option>
                                <option value="GAB">Gabon</option>
                                <option value="GMB">Gambia</option>
                                <option value="GEO">Georgia</option>
                                <option value="DEU">Germany</option>
                                <option value="GHA">Ghana</option>
                                <option value="GIB">Gibraltar</option>
                                <option value="GRC">Greece</option>
                                <option value="GRL">Greenland</option>
                                <option value="GRD">Grenada</option>
                                <option value="GLP">Guadeloupe</option>
                                <option value="GUM">Guam</option>
                                <option value="GTM">Guatemala</option>
                                <option value="GGY">Guernsey</option>
                                <option value="GIN">Guinea</option>
                                <option value="GNB">Guinea-Bissau</option>
                                <option value="GUY">Guyana</option>
                                <option value="HTI">Haiti</option>
                                <option value="HMD">Heard Island and McDonald Islands</option>
                                <option value="VAT">Holy See (Vatican City State)</option>
                                <option value="HND">Honduras</option>
                                <option value="HKG">Hong Kong</option>
                                <option value="HUN">Hungary</option>
                                <option value="ISL">Iceland</option>
                                <option value="IND">India</option>
                                <option value="IDN">Indonesia</option>
                                <option value="IRN">Iran, Islamic Republic of</option>
                                <option value="IRQ">Iraq</option>
                                <option value="IRL">Ireland</option>
                                <option value="IMN">Isle of Man</option>
                                <option value="ISR">Israel</option>
                                <option value="ITA">Italy</option>
                                <option value="JAM">Jamaica</option>
                                <option value="JPN">Japan</option>
                                <option value="JEY">Jersey</option>
                                <option value="JOR">Jordan</option>
                                <option value="KAZ">Kazakhstan</option>
                                <option value="KEN">Kenya</option>
                                <option value="KIR">Kiribati</option>
                                <option value="PRK">Korea, Democratic People's Republic of</option>
                                <option value="KOR">Korea, Republic of</option>
                                <option value="KWT">Kuwait</option>
                                <option value="KGZ">Kyrgyzstan</option>
                                <option value="LAO">Lao People's Democratic Republic</option>
                                <option value="LVA">Latvia</option>
                                <option value="LBN">Lebanon</option>
                                <option value="LSO">Lesotho</option>
                                <option value="LBR">Liberia</option>
                                <option value="LBY">Libya</option>
                                <option value="LIE">Liechtenstein</option>
                                <option value="LTU">Lithuania</option>
                                <option value="LUX">Luxembourg</option>
                                <option value="MAC">Macao</option>
                                <option value="MKD">Macedonia, the former Yugoslav Republic of</option>
                                <option value="MDG">Madagascar</option>
                                <option value="MWI">Malawi</option>
                                <option value="MYS">Malaysia</option>
                                <option value="MDV">Maldives</option>
                                <option value="MLI">Mali</option>
                                <option value="MLT">Malta</option>
                                <option value="MHL">Marshall Islands</option>
                                <option value="MTQ">Martinique</option>
                                <option value="MRT">Mauritania</option>
                                <option value="MUS">Mauritius</option>
                                <option value="MYT">Mayotte</option>
                                <option value="MEX">Mexico</option>
                                <option value="FSM">Micronesia, Federated States of</option>
                                <option value="MDA">Moldova, Republic of</option>
                                <option value="MCO">Monaco</option>
                                <option value="MNG">Mongolia</option>
                                <option value="MNE">Montenegro</option>
                                <option value="MSR">Montserrat</option>
                                <option value="MAR">Morocco</option>
                                <option value="MOZ">Mozambique</option>
                                <option value="MMR">Myanmar</option>
                                <option value="NAM">Namibia</option>
                                <option value="NRU">Nauru</option>
                                <option value="NPL">Nepal</option>
                                <option value="NLD">Netherlands</option>
                                <option value="NCL">New Caledonia</option>
                                <option value="NZL">New Zealand</option>
                                <option value="NIC">Nicaragua</option>
                                <option value="NER">Niger</option>
                                <option value="NGA">Nigeria</option>
                                <option value="NIU">Niue</option>
                                <option value="NFK">Norfolk Island</option>
                                <option value="MNP">Northern Mariana Islands</option>
                                <option value="NOR">Norway</option>
                                <option value="OMN">Oman</option>
                                <option value="PAK">Pakistan</option>
                                <option value="PLW">Palau</option>
                                <option value="PSE">Palestinian Territory, Occupied</option>
                                <option value="PAN">Panama</option>
                                <option value="PNG">Papua New Guinea</option>
                                <option value="PRY">Paraguay</option>
                                <option value="PER">Peru</option>
                                <option value="PHL">Philippines</option>
                                <option value="PCN">Pitcairn</option>
                                <option value="POL">Poland</option>
                                <option value="PRT">Portugal</option>
                                <option value="PRI">Puerto Rico</option>
                                <option value="QAT">Qatar</option>
                                <option value="REU">Réunion</option>
                                <option value="ROU">Romania</option>
                                <option value="RUS">Russian Federation</option>
                                <option value="RWA">Rwanda</option>
                                <option value="BLM">Saint Barthélemy</option>
                                <option value="SHN">Saint Helena, Ascension and Tristan da Cunha</option>
                                <option value="KNA">Saint Kitts and Nevis</option>
                                <option value="LCA">Saint Lucia</option>
                                <option value="MAF">Saint Martin (French part)</option>
                                <option value="SPM">Saint Pierre and Miquelon</option>
                                <option value="VCT">Saint Vincent and the Grenadines</option>
                                <option value="WSM">Samoa</option>
                                <option value="SMR">San Marino</option>
                                <option value="STP">Sao Tome and Principe</option>
                                <option value="SAU">Saudi Arabia</option>
                                <option value="SEN">Senegal</option>
                                <option value="SRB">Serbia</option>
                                <option value="SYC">Seychelles</option>
                                <option value="SLE">Sierra Leone</option>
                                <option value="SGP">Singapore</option>
                                <option value="SXM">Sint Maarten (Dutch part)</option>
                                <option value="SVK">Slovakia</option>
                                <option value="SVN">Slovenia</option>
                                <option value="SLB">Solomon Islands</option>
                                <option value="SOM">Somalia</option>
                                <option value="ZAF">South Africa</option>
                                <option value="SGS">South Georgia and the South Sandwich Islands</option>
                                <option value="SSD">South Sudan</option>
                                <option value="ESP">Spain</option>
                                <option value="LKA">Sri Lanka</option>
                                <option value="SDN">Sudan</option>
                                <option value="SUR">Suriname</option>
                                <option value="SJM">Svalbard and Jan Mayen</option>
                                <option value="SWZ">Swaziland</option>
                                <option value="SWE">Sweden</option>
                                <option value="CHE">Switzerland</option>
                                <option value="SYR">Syrian Arab Republic</option>
                                <option value="TWN">Taiwan, Province of China</option>
                                <option value="TJK">Tajikistan</option>
                                <option value="TZA">Tanzania, United Republic of</option>
                                <option value="THA">Thailand</option>
                                <option value="TLS">Timor-Leste</option>
                                <option value="TGO">Togo</option>
                                <option value="TKL">Tokelau</option>
                                <option value="TON">Tonga</option>
                                <option value="TTO">Trinidad and Tobago</option>
                                <option value="TUN">Tunisia</option>
                                <option value="TUR">Turkey</option>
                                <option value="TKM">Turkmenistan</option>
                                <option value="TCA">Turks and Caicos Islands</option>
                                <option value="TUV">Tuvalu</option>
                                <option value="UGA">Uganda</option>
                                <option value="UKR">Ukraine</option>
                                <option value="ARE">United Arab Emirates</option>
                                <option value="GBR">United Kingdom</option>
                                <option value="UMI">United States Minor Outlying Islands</option>
                                <option value="URY">Uruguay</option>
                                <option value="UZB">Uzbekistan</option>
                                <option value="VUT">Vanuatu</option>
                                <option value="VEN">Venezuela, Bolivarian Republic of</option>
                                <option value="VNM">Viet Nam</option>
                                <option value="VGB">Virgin Islands, British</option>
                                <option value="VIR">Virgin Islands, U.S.</option>
                                <option value="WLF">Wallis and Futuna</option>
                                <option value="ESH">Western Sahara</option>
                                <option value="YEM">Yemen</option>
                                <option value="ZMB">Zambia</option>
                                <option value="ZWE">Zimbabwe</option>
                            </select>
                        </div>

                            <div className="mx-auto px-4 w-full">
                                <label className="block text-left w-full mt-3 mb-2 text-gray-600 font-bold pl-2">Zip Code</label>
                                <input
                                    className="w-full bg-white outline-none text-gray-600 shadow border border-gray-border rounded py-2 px-4 block appearance-none leading-normal"
                                    type="number"
                                    name="zipCode"
                                    value={this.state.zipCode}
                                    onChange={this.handleChange("zipCode")}
                                    id="zipCode"
                                    placeholder="Zip Code"
                                />
                            </div>
                            
                            <div className="mx-auto px-4 w-full pt-4 md:pt-0">
                                <label className="block text-left w-full mt-3 mb-2 text-gray-600 font-bold pl-2">Phone Number</label>
                                <input
                                    className="w-full bg-white outline-none text-gray-600 shadow border border-gray-border rounded py-2 px-4 block appearance-none leading-normal"
                                    type="tel"
                                    name="phoneNumber"
                                    value={this.state.phoneNumber}
                                    onChange={this.handleChange("phoneNumber")}
                                    id="phoneNumber"
                                />
                            </div>
                        </div>
                    </div>
                    {/* / Delivery */}
                </div>
            </div>
        )
    };
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, {getCurrentProfile})(Account);
