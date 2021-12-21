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
            <form name="fileForm" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
                <p>
                    {/* <label> */}
                    <label htmlFor='name'>Name</label>
                        <span></span>
                        <input name="name" id="name" type="text"/>
                    {/* </label> */}
                </p>
                <p>
                    {/* <label> */}
                        <label htmlFor='media'>Media</label>
                        <span></span>
                        <input name="media" id="media" type="file" accept="mp4"/>
                    {/* </label> */}
                </p>
                <button type="submit">Submit</button>
            </form>
            <p class="result"></p>
        </>
      )
      
}