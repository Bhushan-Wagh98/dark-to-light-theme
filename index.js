const el = document.getElementById("body");
const div = document.getElementById("div");
const button = document.getElementById("button");
const darkTheme = window.matchMedia("(prefers-color-scheme:dark)");
let current = darkTheme.matches;

const appendTheme = (status) => {
  if (status) {
    el.setAttribute("class", "dark");
    div.setAttribute("class", "darkDiv");
    button.innerHTML = `<i class="zmdi zmdi-brightness-7"></i> <span>Light Theme</span>`;
    button.setAttribute("class", "darkButton");
    document.title = "Dark Theme";
  } else {
    el.setAttribute("class", "light");
    div.setAttribute("class", "lightDiv");
    button.innerHTML = `<i class="zmdi zmdi-brightness-2"></i> <span>Dark Theme</span>`;
    button.setAttribute("class", "lightButton");
    document.title = "Light Theme";
  }
};

appendTheme(darkTheme.matches);

const changeTheme = () => {
  if (current) {
    appendTheme(false);
  } else {
    appendTheme(true);
  }
  current = !current;
};
