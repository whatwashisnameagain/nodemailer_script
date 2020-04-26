# The Process

1. utilize nm's `createTransport` method to create a transporter object to send mail. this object has the following keys:
  - Service
  - Auth (object) which has user & pass

2. Next Create mailOptions which are simply the following:
  - from
  - to
  - subject
  - text
  - html

### At this point we have the transporter & mail Option objects ready

3. After its created, Transporter has a method to sendMail. This method takes two params:
  - mailOptions
  - callback that takes in error & info (which ends up being the data you get back from NM)
  - the call back needs to first check for an error and log it, if not then log that the email sent which the data is attached via a `response` property located on that info object.

BOOM! Email sent!