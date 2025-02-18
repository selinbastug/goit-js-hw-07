const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle

  const { email, password } = loginForm.elements;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Alanların doldurulup doldurulmadığını kontrol et
  if (!emailValue || !passwordValue) {
    alert("All form fields must be filled in");
    return;
  }

  // Alan değerlerini bir nesneye topla
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  // Verileri konsola yazdır ve formu temizle
  console.log(formData);
  loginForm.reset();
});
