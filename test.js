(async () => {
	const data = await sendOTP({ email: "adarshshahi2404@gmail.com" });
	console.log(data);
})();
(async () => {
	const data = await verifyOTP({
		token:
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkYXJzaHNoYWhpMjQwNEBnbWFpbC5jb20iLCJpYXQiOjE2ODI2MTc4NzAsImV4cCI6MTY4MjYyMTQ3MH0.PRZ1ZluWnspUDigpnC586JvTZxnMXFkln669cjmbDXw",
		otp: "166101",
	});
	console.log(data);
})();
