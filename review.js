function $(id) {
  return document.getElementById(id);
}

///////////////////////////////////
const dk = $("dk");
const dn = $("dn");
const lg = $("login");
const re = $("register");
const ok = $("ok");
const yes = $("yes");

dn.onclick = function (e) {
  e.preventDefault();
  lg.style.display = "block";
  re.style.display = "none";
  dn.classList.add("active");
  dk.classList.remove("active");
};

dk.onclick = function (e) {
  e.preventDefault();
  re.style.display = "block";
  lg.style.display = "none";
  dk.classList.add("active");
  dn.classList.remove("active");
};
////////////////////////////////////////////////
let savedUsername = "";
let savedPassword = "";

ok.onclick = function (e) {
  e.preventDefault();

  const reusername = $("reusername").value;
  const repassword = $("repassword").value;
  const confirmpass = $("confirmPassword").value;
  const gender = $("gender").value;

  let isValid = true;

  $("reusername").nextElementSibling.textContent = "";
  $("reusername").classList.remove("error");
  $("repassword").nextElementSibling.textContent = "";
  $("repassword").classList.remove("error");
  $("confirmPassword").nextElementSibling.textContent = "";
  $("confirmPassword").classList.remove("error");
  $("gender").nextElementSibling.textContent = "";
  $("gender").classList.remove("error");

  if (!reusername) {
    isValid = false;
    $("reusername").nextElementSibling.textContent =
      "Vui lòng nhập tên đăng nhập";
    $("reusername").classList.add("error");
  } else if (reusername.length < 6 || reusername.length > 16) {
    isValid = false;
    $("reusername").nextElementSibling.textContent =
      "Tên đăng nhập phải từ 6 đến 16 ký tự";
    $("reusername").classList.add("error");
  }

  if (!repassword) {
    isValid = false;
    $("repassword").nextElementSibling.textContent = "Vui lòng nhập mật khẩu";
    $("repassword").classList.add("error");
  }

  if (!confirmpass) {
    isValid = false;
    $("confirmPassword").nextElementSibling.textContent =
      "Vui lòng xác nhận mật khẩu";
    $("confirmPassword").classList.add("error");
  } else if (confirmpass !== repassword) {
    isValid = false;
    $("confirmPassword").nextElementSibling.textContent =
      "Mật khẩu xác nhận không khớp";
    $("confirmPassword").classList.add("error");
  }

  if (!gender) {
    isValid = false;
    $("gender").nextElementSibling.textContent = "Vui lòng chọn giới tính";
    $("gender").classList.add("error");
  }

  if (isValid) {
    savedUsername = reusername;
    savedPassword = repassword;

    alert("Đăng ký thành công!");
    lg.style.display = "block";
    re.style.display = "none";
    dn.classList.add("active");
    dk.classList.remove("active");
  }
};
////////////////////////////////////
yes.onclick = function (e) {
  e.preventDefault();
  const username = $("username").value.trim();
  const password = $("password").value.trim();
  if (!savedUsername || !savedPassword) {
    alert("Chưa có tài khoản đăng ký. Vui lòng đăng ký trước!");
    return;
  }
  if (username === savedUsername && password === savedPassword) {
    alert("Đăng nhập thành công!");
  } else {
    alert("Tên đăng nhập hoặc mật khẩu không chính xác!");
  }
};
