export const formController = () => {
  const { phone, email } = document.querySelector("#contact form");

  phone.addEventListener("input", ({ target }) => {
    target.value = target.value.replace(/\(?(\d{2})\)?.?(\d{5})-?(\d{4})/i,'($1) $2-$3');
  })
}
