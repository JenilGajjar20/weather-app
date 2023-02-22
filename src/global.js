import Vue from "vue";

// Auto Register Icons
const icons = import.meta.glob("./components/icons/*.vue");
for (const path in icons) {
  const pathSplit = path.split("/");
  const name = pathSplit[pathSplit.length - 1].split(".")[0];
  Vue.component("Icon" + name, icons[path]);
}
