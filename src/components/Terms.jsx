import React from "react";

const Terms = ({ close }) => {
	const data = [
		`Eligibility: To participate in the Mrs ,Ms and Miss Unity World Pageant, you must be at least 18 years
        of age and unmarried, or married for Pageant . You must be a female of any nationality and should
        have a valid passport. The contestants must be willing to participate in all the activities related to the
        pageant, including photoshoots, rehearsals, and events.`,
		`Application: To apply for the Mrs and Miss Unity World Pageant, you must complete and submit the
        official entry form along with a recent photograph and the application fee. All applications must be
        received by the deadline specified on the email.`,
		`Fees: The application fee for the Mrs ,Ms and Miss Unity World Pageant is non-refundable. The
        contestants are responsible for their travel expenses and during the pageant. The pageant
        committee will not be responsible for any peronal expenses incurred by the contestants.`,
		`Code of Conduct: The contestants are expected to conduct themselves with grace and dignity during
        the pageant. Any behavior that is deemed inappropriate or offensive, including harassment, bullying,
        or discrimination, will result in immediate disqualification.
        `,
		`Intellectual Property: All the photos and videos taken during the Mrs and Miss Unity World Pageant
        will become the property of the pageant committee. The contestants grant the pageant committee
        the right to use their images and videos for promotional purposes.`,
		`Liability: The pageant committee will not be responsible for any loss, injury, or damage to the
        contestants or their property during the pageant. `,
		`Disqualification: The pageant committee reserves the right to disqualify any contestant who violates
        the terms and conditions of the pageant or who engages in any behavior that is deemed
        inappropriate.`,
		`Decision: The decision of the pageant committee is final and binding. No correspondence or appeals
        will be entertained.`,
		`Changes: The pageant committee reserves the right to change the terms and conditions of the
        pageant at any time without prior notice.`,
		`By submitting the application form and participating in the Mrs ,Ms and Miss Unity World Pageant,
        you agree to all the terms and conditions listed above.`,
	];
	return (
		<div className="fixed p-8 z-50 h-[80vh] overflow-y-scroll top-[10%] w-[80%] shadow-md shadow-white md:w-[60%] bg-[#350200]">
			<h3 className="text-white text-3xl">Following terms and conditions</h3>
			{data.map((item, index) => (
				<p key={index} className="text-white text-justify my-10">
					{item}
				</p>
			))}
			<button onClick={() => close(false)} className="m-auto text-white border-2 border-white px-3 rounded-md">Close</button>
		</div>
	);
};

export default Terms;
