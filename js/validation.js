let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}

$.validator.addMethod("customEmail", function(value, element) {
    return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
}, "Please enter a valid email address.");

$("#myForm").validate({

    rules:{
        name:{
            required: true,
            minlength: 2,
        },
        email:{
            required: true,
            customEmail:true
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
        if($(form).valid()) {
            openPopup();
            setTimeout(function(){
                $("#popup").fadeOut();
                form.submit();
            }, 4000);
        }
    }
});