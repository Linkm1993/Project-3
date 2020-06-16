import React from 'react'

function Captch() {
    return (
        <form action="?" method="POST">
            <div class="g-recaptcha" data-sitekey="6LdbQaUZAAAAAI9_76pHoxqJ-QSmx9ahpIWHbkQq"></div>
            <br/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Captch
