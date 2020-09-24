import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
	render(<CheckoutForm />);
	const header = screen.getByText(/checkout form/i);
	expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
	render(<CheckoutForm />);
	const firstNameInput = screen.getByLabelText(/first name/i);
	const lastNameInput = screen.getByLabelText(/last name/i);
	const addressInput = screen.getByLabelText(/address/i);
	const cityInput = screen.getByLabelText(/city/i);
	const stateInput = screen.getByLabelText(/state/i);
	const zipInput = screen.getByLabelText(/zip/i);

	fireEvent.change(firstNameInput, { target: { value: "Christian" } });
	fireEvent.change(lastNameInput, { target: { value: "Bautista" } });
	fireEvent.change(addressInput, { target: { value: "1234 Street" } });
	fireEvent.change(cityInput, { target: { value: "Los Angeles" } });
	fireEvent.change(stateInput, { target: { value: "CA" } });
	fireEvent.change(zipInput, { target: { value: "98765" } });

	const checkoutButton = screen.getByRole("button");
	fireEvent.click(checkoutButton);

	const successMessage = screen.getByTestId("successMessage");
	expect(successMessage).toBeInTheDocument();

	screen.debug();
});
