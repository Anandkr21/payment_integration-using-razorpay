var options = {
    key: "your_key_id",
    amount: "1500000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "John Doe Testing",
    description: "Test Transaction",
    image: "https://example.com/your_logo",
    order_id: "order_MRpzBoNwpvu6Pp", //This is a sample Order ID. Pass the `id` obtained in the response of above steps
    handler: function (response) {
        console.log("payment Id:- ", response.razorpay_payment_id);
        console.log("Order Id:- ", response.razorpay_order_id);
        console.log("Signature:- ", response.razorpay_signature);
    },
    prefill: {
        name: "Demo Testing",
        email: "abc@gmail.com",
        contact: "9999999999",
    },
    notes: {
        address: "Bangalore",
    },
    theme: {
        color: "#3399cc",
    },
};
var rzp1 = new Razorpay(options);
rzp1.on("payment.failed", function (response) {
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
});
document.getElementById("rzp-button1").onclick = function (e) {
    rzp1.open();
    e.preventDefault();
};