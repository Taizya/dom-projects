import "./form.css";

export function setupForms(element) {
  element.innerHTML = `
    <div>
        <h1>Registration Form</h1>
        <div id="form-container">
            <form>
                <div class="form-group">
                <label>Username</label><br>
                <input type="text"><br>
                </div>
                
                <div class="form-group">
                <label>Email</label><br>
                <input type="email"><br>
                </div>

                <div class="form-group">
                <label>Password</label><br>
                <input type="password"><br>
                </div>

                <div class="form-group">
                <label>Retype Password</label><br>
                <input type="password"><br>
                </div>

                <button id="submit-button">Submit</button><br>
            </form>
        </div>
    </div>
  `;
}
