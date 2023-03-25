import React from "react";
import EmergencyContactForm from "./EmergencyContactForm";
import EnrolmentForm from "./EnrollmentPage";

import PageHeader from "./PageHeader";

function EnrollmentPage() {
	return (
		<div className="ml-10 mr-9">
			<PageHeader />
			<div className="flex lg:flex-row sm:flex-col  justify-around ">
				<EnrolmentForm />
				<EmergencyContactForm />
			</div>
		</div>
	);
}

export default EnrollmentPage;
