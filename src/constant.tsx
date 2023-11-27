const Msg = {
  success: {
    signup: {
      "ET-001":
        "An email has been sent at <EMAIL_ID> containing an activation link. Please click on the link to activate your account within 24 hours.",
    },
  },
  failure: {
    signup: {
      "ET-1000":
        "We have already sent you the confirmation mail, please check your inbox or spam. If you did not receive and need to generate link again. kindly click <HERE>",
      "ET-1001":
        "You have aleady logged In - No Signup is required. In case you forget the password, click ",
      "ET-000":
        "Something wrong! Kindly contact admin at expensetracker.et.team@gmail.com",
    },
  },
};

export default Msg;
