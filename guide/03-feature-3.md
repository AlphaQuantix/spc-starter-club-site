# Feature 3: A contact form

**Time:** about 45 minutes for two people.

## What you will build

You will add a contact form to the home page. It asks for a name, an email and a message.

When someone clicks **Send**:

- If a box is empty, a red note appears under it. For example: "Please type your email."
- If every box is filled in, the form goes away. A thank-you note appears in its place.

This is a practice form. It **sends nothing**. Nothing leaves the page. There is no server to send it to. The code only shows messages on the screen.

## Before you start

- Features 1 and 2 are done.
- One person types. The other reads each step out loud and checks it. Swap jobs again.

## Watch out for this trap

When you test the form, **use made-up names and emails**. Do not type your own name, your friend's email or a real phone number. Use names like `Asha Example` and emails like `asha@example.com`. The address `example.com` is kept free for tests, so it never reaches a real person.

## Steps

### Step 1: Add the form to the home page

1. Click the **Code** tab. Click `index.html`. Click the pencil icon (**Edit this file**).
2. Find this line. It is near the end of the file:

```html
  </main>
```

3. Click at the very start of that line, before the spaces. Press **Enter**. This makes an empty line above it.
4. Click on the new empty line. Paste this code:

```html
    <section class="contact">
      <h2>Contact us</h2>
      <p>Want to join or ask a question? Send us a note. This is a practice form, so it does not send anything.</p>

      <form id="contact-form" novalidate>
        <label for="name">Your name</label>
        <input type="text" id="name">
        <p class="error" id="name-error"></p>

        <label for="email">Your email</label>
        <input type="email" id="email">
        <p class="error" id="email-error"></p>

        <label for="message">Your message</label>
        <textarea id="message" rows="5"></textarea>
        <p class="error" id="message-error"></p>

        <button type="submit">Send</button>
      </form>

      <p class="thanks" id="thanks" hidden></p>
    </section>
```

5. Check that `</main>` now comes right after `</section>`, like this:

```html
      <p class="thanks" id="thanks" hidden></p>
    </section>
  </main>
```

6. Click **Commit changes...**. Type the message: `Add contact form to home page`
7. Click **Commit changes**.

What the parts mean:

- Each `<label>` is the text above a box. Its `for` matches the box's `id`.
- Each `<p class="error">` is empty for now. The script will put a red note in it.
- `novalidate` tells the browser not to show its own pop-up. Our script shows the notes instead.
- The boxes have no `name` and the form has no `action`. So the browser has nothing to send and nowhere to send it.
- `<p class="thanks" ... hidden>` is the thank-you note. It stays hidden until the form is full.

### Step 2: Write the script that checks the form

1. Click the **Code** tab. Click `script.js`. Click the pencil icon.
2. Select everything in the file. On Windows press **Ctrl + A**. On a Mac press **Cmd + A**. Press **Delete**.
3. Paste all of this code:

```js
// script.js: checks the contact form on the home page.
// It never sends anything. It only shows messages on the screen.

// Look at the three answers. Return a note for each problem.
// If there are no problems, the result is empty: {}
function checkForm(name, email, message) {
  const errors = {};

  if (name.trim() === "") {
    errors.name = "Please type your name.";
  }

  if (email.trim() === "") {
    errors.email = "Please type your email.";
  } else if (!email.includes("@")) {
    errors.email = "An email needs an @ sign, like asha@example.com.";
  }

  if (message.trim() === "") {
    errors.message = "Please type a message.";
  }

  return errors;
}

const form = document.getElementById("contact-form");

// Only the home page has the form. This check stops errors on other pages.
if (form) {
  form.addEventListener("submit", function (event) {
    // Stop the browser from sending the form anywhere.
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const errors = checkForm(name, email, message);

    // Show each note, or clear it if that box is now fine.
    document.getElementById("name-error").textContent = errors.name || "";
    document.getElementById("email-error").textContent = errors.email || "";
    document.getElementById("message-error").textContent = errors.message || "";

    // No problems: hide the form and show the thank-you note.
    if (Object.keys(errors).length === 0) {
      const thanks = document.getElementById("thanks");
      thanks.textContent = "Thank you, " + name.trim() + "! We got your note. This is a practice form, so nothing was sent.";
      form.hidden = true;
      thanks.hidden = false;
    }
  });
}
```

4. Click **Commit changes...**. Type the message: `Check the contact form and show a thank you`
5. Click **Commit changes**.

What the parts mean:

- `checkForm` looks at the three answers. It makes a list of notes, one for each problem.
- `event.preventDefault()` stops the browser from sending the form. This is the line that makes sure nothing is sent.
- `textContent` puts the note on the page as plain text.

### Step 3: Style the form

1. Click the **Code** tab. Click `style.css`. Click the pencil icon.
2. Scroll to the very end. Click after the last `}`. Press **Enter** twice.
3. Paste this code:

```css
/* The contact form on the home page */
.contact {
  margin-top: 32px;
  max-width: 600px;
}

.contact label {
  display: block;
  margin-top: 12px;
  font-weight: bold;
}

.contact input,
.contact textarea {
  width: 100%;
  padding: 8px;
  font-size: 18px;
  font-family: inherit;
  border: 1px solid #999999;
  border-radius: 4px;
}

.contact button {
  margin-top: 16px;
  padding: 10px 24px;
  font-size: 18px;
  color: #ffffff;
  background: #1f3b4d;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.error {
  margin: 4px 0 0;
  color: #b00020;
  font-size: 16px;
}

.thanks {
  padding: 16px;
  background: #e3f4e1;
  border: 1px solid #7bb274;
  border-radius: 8px;
}
```

4. Click **Commit changes...**. Type the message: `Style the contact form`
5. Click **Commit changes**.

`width: 100%` makes each box as wide as the space it is in. So the boxes fit on a phone too.

## Check that it is done

The feature is done when **the home page has a form with name, email and message. An empty email shows an error. A full form shows a thank you on the screen and sends nothing.**

Wait one or two minutes. Open your live home page. Hold **Shift** and click refresh. Then test it:

1. Scroll down. You see the form with three boxes: name, email and message.
2. Type `Asha Example` in the name box. Type `Hello` in the message box. Leave the email box empty. Click **Send**. A red note says **Please type your email.** The form stays.
3. Type `asha@example.com` in the email box. Click **Send**. The form goes away. A green box says **Thank you, Asha Example!**
4. Check that nothing was sent. Refresh the page to get the form back. Right-click the page and click **Inspect**. In the panel, click the **Network** tab. Fill in the form again with made-up details and click **Send**. No new line appears in the Network list. The address bar does not change either.
5. Check on a phone, or at 360 pixels wide (see feature 2). The boxes must fit the screen. Nothing may scroll sideways.

## If something goes wrong

- **Clicking Send reloads the page.** The script is not running. Check that `index.html` still has `<script src="script.js"></script>` just above `</body>`. Check that you pasted the whole script, down to the last `}`.
- **Nothing happens when you click Send.** Right-click the page and click **Inspect**. Click the **Console** tab. A red line there names the line of `script.js` with the mistake. Often it is a missing `)` or `}`.
- **The note appears under the wrong box.** Check the `id` of each `<p class="error">` in `index.html`. They must be `name-error`, `email-error` and `message-error`.
