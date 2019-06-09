(function ($) {
    "use strict"

    console.log($("#select-type option:selected").text())
    const form_login = $("#login-form");
    form_login.submit(function (e) {
        e.preventDefault();
        const dataArray = $(this).serializeArray();
        const data = {};
        for (var i = 0; i < dataArray.length; i++) {
            data[dataArray[i].name] = dataArray[i].value;
        }

        if (data.type === 'user') {
            //call api
            $.ajax("/api/users/login", {
                type: "post",
                data: {
                    username: data['username'],
                    password: data['pass']
                }
            }).done(res => {
                localStorage.setItem('isUserLogin', true);
                localStorage.setItem('user:name', res.profile.name);
                localStorage.setItem('user:email', res.profile.email);
                localStorage.setItem('user:birthdate', res.profile.birthdate);
                window.location.href = "/";
            }).fail(function (xhr, status, error) {
                var err = JSON.parse(xhr.responseText);
                alert(err.msg);
            })
        }
        if (data.type === 'writer') {

        }
        if (data.type === 'editor') {

        }
        if (data.type === 'administrator') {

        }

    })

})(jQuery);
