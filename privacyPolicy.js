(() => {
  const { API_URL, AWS_S3_HOST, GET_SET_ADMIT_URL } = window.env;
function getAdmit() {
  console.log("cal;")
  window.location.href = './index.html';
}
let value = document.querySelectorAll('.getAdmit');

for (let i = 0; i < value?.length; i++) {
  value[i].addEventListener('click', getAdmit)
}
})();