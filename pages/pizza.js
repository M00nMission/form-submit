/* eslint-disable */
if (typeof window !== 'undefined') {
    document.forms.fileForm.addEventListener("submit", event => {
    event.preventDefault()
    const result = document.querySelector(".result")
    fetch("/", {
      body: new FormData(event.target),
      headers: { "Content-Type": "multipart/form-data" },
      method: "POST",
    }).then(() => {
      result.innerHTML = "Success"
    }).catch(error => {
      result.innerHTML = `Failed: ${error}`
    })
  })
}
export default function Pizza() {
    return (
        <>
            <form name="fileForm" data-netlify="true">
            <p>
                <label>
                <span>Name:</span>
                <input name="name" type="text"/>
                </label>
            </p>
            <p>
                <label>
                <span>Add file:</span>
                <input name="file" type="file"/>
                </label>
            </p>
            <button>Submit</button>
            </form>
            <p class="result"></p>
        </>
      )
      
}