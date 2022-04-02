const send = document.getElementById("send");
const report = document.getElementById("report");
report.addEventListener("click", (e) => {

})
send.addEventListener("click", (e) => {
    e.preventDefault();
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: '¿ Deseas enviar la solicitud ?',
        text: "Solicitud en proceso.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Enviar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'Solicitud enviada',
                'Que tenga un buen día :)',
                'success'
            )
            setTimeout(() => {
                if (result.isConfirmed) {
                    location.href="dashboard.html"
                }
            }, 2000);
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Solicitud cancelada',
                'Que tenga un buen día :)',
                'error'
            )
        }
    })

})