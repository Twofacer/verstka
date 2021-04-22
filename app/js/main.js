function descTheme() {
  var rad = document.getElementsByName("them-choice");
  for (var i = 0; i < rad.length; i++) {
    if (rad[i].checked) {
      if (i == 0) {
        document.getElementById("header").style.backgroundColor = "#b0bec5";
        document.getElementById("header-logo").style.color = "#4f5555";
        document.getElementById("gallery").style.backgroundColor = "#e2f1f8";
        document.getElementById("footer").style.backgroundColor = "#b0bec5";
        document.getElementById("gallery-title").style.color = "#000";
        document.getElementById("link").style.color = "#000";
        document.getElementById("tel").style.color = "#000";
        document.querySelectorAll(".social-icon").forEach(el => {
          el.style.fill = "#000";
        });
      }
      if (i == 1) {
        document.getElementById("header").style.backgroundColor = "#212121";
        document.getElementById("header-logo").style.color = "#fff";
        document.getElementById("gallery-title").style.color = "#fff";
        document.getElementById("gallery").style.backgroundColor = "#484848";
        document.getElementById("footer").style.backgroundColor = "#212121";
        document.getElementById("link").style.color = "#fff";
        document.getElementById("tel").style.color = "#fff";
        document.querySelectorAll(".social-icon").forEach(el => {
          el.style.fill = "#fff";
        });
      }
      if (i == 2) {
        document.getElementById("header").style.backgroundColor = "#757575";
        document.getElementById("header-logo").style.color = "#fff";
        document.getElementById("gallery-title").style.color = "#fff";
        document.getElementById("gallery").style.backgroundColor = "#a4a4a4";
        document.getElementById("footer").style.backgroundColor = "#757575";
        document.getElementById("link").style.color = "#fff";
        document.getElementById("tel").style.color = "#fff";
        document.querySelectorAll(".social-icon").forEach(el => {
          el.style.fill = "#fff";
        });
      }
    }
  }
}

function descTablet_light() {
  document.getElementById("header").style.backgroundColor = "#b0bec5";
  document.getElementById("header-logo").style.color = "#4f5555";
  document.getElementById("gallery").style.backgroundColor = "#e2f1f8";
  document.getElementById("footer").style.backgroundColor = "#b0bec5";
  document.getElementById("gallery-title").style.color = "#000";
  document.getElementById("link").style.color = "#000";
  document.getElementById("tel").style.color = "#000";
  document.querySelectorAll(".social-icon").forEach(el => {
    el.style.fill = "#000";
  });
}

function descTablet_dark() {
  document.getElementById("header").style.backgroundColor = "#212121";
  document.getElementById("header-logo").style.color = "#fff";
  document.getElementById("gallery-title").style.color = "#fff";
  document.getElementById("gallery").style.backgroundColor = "#484848";
  document.getElementById("footer").style.backgroundColor = "#212121";
  document.getElementById("link").style.color = "#fff";
  document.getElementById("tel").style.color = "#fff";
  document.querySelectorAll(".social-icon").forEach(el => {
    el.style.fill = "#fff";
  });
}

function descTablet_backendless() {
  document.getElementById("header").style.backgroundColor = "#757575";
  document.getElementById("header-logo").style.color = "#fff";
  document.getElementById("gallery-title").style.color = "#fff";
  document.getElementById("gallery").style.backgroundColor = "#a4a4a4";
  document.getElementById("footer").style.backgroundColor = "#757575";
  document.getElementById("link").style.color = "#fff";
  document.getElementById("tel").style.color = "#fff";
  document.querySelectorAll(".social-icon").forEach(el => {
    el.style.fill = "#fff";
  });
}

function OnSelectionChange(select) {
  var selectedOption = select.options[select.selectedIndex];
  console.log(selectedOption.value);
  if (selectedOption.value == "Light Theme") {
    document.getElementById("header").style.backgroundColor = "#b0bec5";
    document.getElementById("header-logo").style.color = "#4f5555";
    document.getElementById("gallery").style.backgroundColor = "#e2f1f8";
    document.getElementById("footer").style.backgroundColor = "#b0bec5";
    document.getElementById("gallery-title").style.color = "#000";
    document.getElementById("link").style.color = "#000";
    document.getElementById("tel").style.color = "#000";
    document.querySelectorAll(".social-icon").forEach(el => {
      el.style.fill = "#000";
    });
  } else if (selectedOption.value == "Dark Theme") {
    document.getElementById("header").style.backgroundColor = "#212121";
    document.getElementById("header-logo").style.color = "#fff";
    document.getElementById("gallery-title").style.color = "#fff";
    document.getElementById("gallery").style.backgroundColor = "#484848";
    document.getElementById("footer").style.backgroundColor = "#212121";
    document.getElementById("link").style.color = "#fff";
    document.getElementById("tel").style.color = "#fff";
    document.querySelectorAll(".social-icon").forEach(el => {
      el.style.fill = "#fff";
    });
  } else if (selectedOption.value == "Backendless Theme") {
    document.getElementById("header").style.backgroundColor = "#757575";
    document.getElementById("header-logo").style.color = "#fff";
    document.getElementById("gallery-title").style.color = "#fff";
    document.getElementById("gallery").style.backgroundColor = "#a4a4a4";
    document.getElementById("footer").style.backgroundColor = "#757575";
    document.getElementById("link").style.color = "#fff";
    document.getElementById("tel").style.color = "#fff";
    document.querySelectorAll(".social-icon").forEach(el => {
      el.style.fill = "#fff";
    });
  }
}
