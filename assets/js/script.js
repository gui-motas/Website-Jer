
function copiarTexto(conteudo) {

    var areaDeTransferencia = document.createElement("textarea");
    areaDeTransferencia.value = conteudo;


    document.body.appendChild(areaDeTransferencia);


    areaDeTransferencia.select();
    document.execCommand("copy");


    document.body.removeChild(areaDeTransferencia);


    Swal.fire({
        position: "center",
        icon: "info",
        iconColor: "white",
        color: "#fff",
        text: "The adress was copied",
        background: "rgba(0, 0, 0, 0)"
    });
}

function showCredits() {
    Swal.fire({
        position: "center",
        title: "CREDITS",
        html: ` 
  <div>Web Development by Guilherme Mota<br>
  Web Designer by Guilherme Mota<br>
  Pictures by Mike FILLIPPOV</div>
  `,
        color: "#fff",
        background: "black",
        backdrop: "black",
        confirmButtonText: "",
        customClass: {
            confirmButton: 'swal-confirmBtn',
            title: 'swal-title',
            htmlContainer: 'swal-html',
            container: 'swal-container'
        }
    });
}
const form = document.querySelector("#form");
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const phoneInput = document.querySelector("#phone")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event) => {

    event.preventDefault();

    if (nameInput.value === "") {
        Swal.fire({
            position: "center",
            icon: "error",
            iconColor: "white",
            color: "#fff",
            text: "Plese insert your name",
            background: "rgba(0, 0, 0, 0)",
            backdrop: "rgba(0, 0, 0, 0.85)",
            customClass: {
                confirmButton: 'swal2-confirm',
            }

        });
        return;
    }
    if (!isNameValid(nameInput.value)) {
        Swal.fire({
            position: "center",
            icon: "error",
            iconColor: "white",
            color: "#fff",
            text: "Please insert a valid name",
            background: "rgba(0, 0, 0, 0)",
            backdrop: "rgba(0, 0, 0, 0.85)",
            customClass: {
                confirmButton: 'swal2-confirm'
            }
        });
        return;
    }
    if (emailInput.value === "") {
        Swal.fire({
            position: "center",
            icon: "error",
            iconColor: "white",
            color: "#fff",
            text: "Please insert your email",
            background: "rgba(0, 0, 0, 0)",
            backdrop: "rgba(0, 0, 0, 0.85)",
            customClass: {
                confirmButton: 'swal2-confirm',
            }
        });
        return;
    }
    if (!isEmailValid(emailInput.value)) {
        Swal.fire({
            position: "center",
            icon: "error",
            iconColor: "white",
            color: "#fff",
            text: "Please insert a valid email",
            background: "rgba(0, 0, 0, 0)",
            backdrop: "rgba(0, 0, 0, 0.85)",
            customClass: {
                confirmButton: 'swal2-confirm',
            }
        });
        return;
    }
    if (phoneInput.value === "") {
        Swal.fire({
            position: "center",
            icon: "error",
            iconColor: "white",
            color: "#fff",
            text: "Please insert your phone number",
            background: "rgba(0, 0, 0, 0)",
            backdrop: "rgba(0, 0, 0, 0.85)",
            customClass: {
                confirmButton: 'swal2-confirm',
            }
        });
        return;
    }

    if (!isPhoneValid(phoneInput.value)) {
        Swal.fire({
            position: "center",
            icon: "error",
            iconColor: "white",
            color: "#fff",
            text: "Please insert a valid phone",
            background: "rgba(0, 0, 0, 0)",
            backdrop: "rgba(0, 0, 0, 0.85)",
            customClass: {
                confirmButton: 'swal2-confirm',
            }
        });
        return;
    }

    if (messageTextarea.value === "") {
        Swal.fire({
            position: "center",
            icon: "error",
            iconColor: "white",
            color: "#fff",
            text: "Please leave a message",
            background: "rgba(0, 0, 0, 0)",
            backdrop: "rgba(0, 0, 0, 0.85)",
            customClass: {
                confirmButton: 'swal2-confirm',
            }
        });
        return;

    }

    Swal.fire({
        position: "center",
        icon: "success",
        color: "#fff",
        text: " Your message was sent successfully ",
        background: "rgba(0, 0, 0, 0)",
        backdrop: "rgba(0, 0, 0, 0.85)",
    }).then(() => {
        form.submit();
    });
});

function isEmailValid(email) {

    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-z]{2,}$/
    )
    if (emailRegex.test(email)) {
        return true;
    }
    return false;
}

function isNameValid(name) {

    const nameRegex = new RegExp(
        /^[a-zA-ZÀ-ÖØ-öø-ÿ']+([- ][a-zA-ZÀ-ÖØ-öø-ÿ']+)*$/
    )
    if (nameRegex.test(name)) {
        return true;
    }
    return false;
}


function isPhoneValid(phone) {

    const phoneRegex = new RegExp(
        /^(\(?(?:(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)?)? ?(?:[2-8]|9[0-9])[0-9]{3}-?[0-9]{4}|(?:\+1-?)?(?:\([2-9]\d{2}\)|[2-9]\d{2})(?:-?|\s?)(?:[2-9]\d{2})(?:-?|\s?)(?:\d{4}))$/
    )
    if (phoneRegex.test(phone)) {
        return true;
    }
    return false;

}



function alternarVideo(id) {
    var divs = document.querySelectorAll('.videoFrame');


    var div = document.getElementById(id);
    var isVisible = div.classList.contains('show');

 
    divs.forEach(function (div) {
        div.classList.remove('show');

    });

    if (!isVisible) {
        div.classList.add('show');
    }


}

function alternarMusic(id) {
    var divs = document.querySelectorAll('.musicLinks');


    var div = document.getElementById(id);
    var isVisible = div.classList.contains('show');


    divs.forEach(function (div) {
        div.classList.remove('show');
    });

    if (!isVisible) {
        div.classList.add('show');
    }
}

