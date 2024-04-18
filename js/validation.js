$("#myForm").validate({

    rules:{
        name:{
            minlength: 2,
        },
        email:{
            email:true
        }
    },
    messages: {
        name:{
            required: "Please enter your name",
            minlength: "The name should have at least 2 characters"
        },
        email:"Please enter your email",
        query:"Please enter your query"
    },

    submitHandler: function(form) {
      form.submit();
    }
});