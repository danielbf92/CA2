let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}
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
        if($(form).valid()) {
            openPopup();
            setTimeout(function(){
                $("#popup").fadeOut();
                form.submit();
            }, 4000);
        }
    }
});