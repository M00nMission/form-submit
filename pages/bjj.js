/* eslint-disable */
if ( typeof window !== 'undefined') {
    function encode(data) {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
      }
    
    const handleSubmit = (event) => {
      event.preventDefault()
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": event.target.getAttribute("name"),
          ...name
        })
      }).then(() => navigate("/thank-you/")).catch(error => alert(error))
    }
}

export default function BJJ() {
    return(
        <>
            <form name="BJJ" data-netlify-recaptcha="true" data-netlify="true" >
                <input type="hidden" name="BJJ" value="BJJ" />
            <p>
                <label>
                <span>Name:</span>
                <input name="name" type="text"/>
                </label>
            </p>
            <p>
                <label>
                <span>Add file:</span>
                <input name="file" type="file" accept="mp4"/>
                </label>
            </p>
            <button type="submit">Submit</button>
                <br />
                <div data-netlify-recaptcha="true"></div>
            </form>
            <p className="result"></p>
        </>

    )
}