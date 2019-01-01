let defaultyCity = '上海'
try {
  if (localStorage.city) {
    defaultyCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultyCity
}
