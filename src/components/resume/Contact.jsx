import React from "react";

function Contact(props) {
  const handleTelephoneInput = (e) =>
    props.onTelephoneNumberChange(e.target.value);
  return (
    <div>
      <h4>C O N T A C T</h4>

      <form>
        <input
          type="text"
          name="telephone"
          value={props.phone}
          placeholder="Phone-number"
          onChange={handleTelephoneInput}
        />
        <br />
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          value={props.email}
          onChange={handleEmailInput}
        />
        <br />
        <input
          type="text"
          name="street"
          placeholder="Street"
          value={props.address.street}
          onChange={handleStreetInput}
        />
        <br />

        <input
          type="text"
          name="houseNumber"
          value={props.houseNumber}
          placeholder="House number"
          onChange={handleHouseNumberInput}
        />
        <br />

        <input
          type="text"
          name="postalCode"
          value={props.postalCode}
          placeholder="Postal code"
          onChange={handlePostalCodeInput}
        />
        <br />
        <input
          type="text"
          name="city"
          value={props.city}
          placeholder="City"
          onChange={handleCityInput}
        />
      </form>
    </div>
  );
}

export default Contact;
