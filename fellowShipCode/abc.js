function outer() {
    var a = 10;
    function inner() {
      var b = 20;
      console.log("a = " + a + "  b = " + b); //closure funtion to be implemented
    }
    return inner();
  }
  //console.log(b);
  var x = outer();
  var y = outer();
  <form onSubmit={this.handleSubmit} noValidate>
  <div className="firstName">
      {/* <input htmlform="firstName">First Name</input> */}
      <input
          input="text"
          className=""
          placeholder="First Name"
          type="text"
          name="firstname"
          noValidate
          onChange={this.handleChange}
      />
  </div>
  <div className="lastName">
      {/* <input htmlform="lastName">Last Name</input> */}
      <input
          input="text"
          className=""
          placeholder="Last Name"
          type="text"
          name="lastName"
          noValidate
          onChange={this.handleChange}
      />
  </div>
  <div className="email">
      {/* <input htmlform="email">Email</input> */}
      <input
          input="text"
          className=""
          placeholder="Email"
          type="text"
          name="email"
          noValidate
          onChange={this.handleChange}
      />
  </div><div className="password">
      {/* <input htmlform="password">Password</input> */}
      <input
          input="text"
          className=""
          placeholder="Password"
          type="text"
          name="password"
          noValidate
          onChange={this.handleChange}
      />
  </div><div className="confirm password">
      {/* <input htmlform="confirm password">Confirm Password></input> */}
      <input
          input="text"
          className=""
          placeholder="Confirm Password"
          type="text"
          name="confirm password"
          noValidate
          onChange={this.handleChange}
      />
  </div>
</form>