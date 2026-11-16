# Feature 2: Works on a phone

**Time:** about 35 minutes for two people.

## What you will build

Most people will open your site on a phone. Right now the site is made for a wide laptop screen. On a phone the text looks tiny, or the page slides sideways.

You will fix this in three small steps:

1. Add one line to the top of each page. It tells the phone to show the page at its real size.
2. Change one line in `style.css`, so the page can get narrower than a laptop screen.
3. Add a short block of CSS that only works on narrow screens. It puts the three cards in one column.

## Before you start

- Feature 1 is done. You have `index.html`, `about.html` and `events.html`.
- One person types. The other reads each step out loud and checks it. Swap jobs from feature 1.

## Watch out for this trap

People often forget the **viewport line** in the `<head>` of a page. Without it, a phone pretends to be a laptop. It draws the whole wide page and then shrinks it. Everything looks tiny. You must add this line to **every** page, not just the home page.

## Steps

### Step 1: Add the viewport line to every page

Do this for `index.html`, then `about.html`, then `events.html`.

1. Click the **Code** tab. Click the file name.
2. Click the pencil icon (**Edit this file**).
3. Find this line near the top, inside `<head>`:

```html
  <meta charset="utf-8">
```

4. Click at the end of that line. Press **Enter** to make a new line.
5. Paste this line:

```html
  <meta name="viewport" content="width=device-width, initial-scale=1">
```

6. The top of the file should now start like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
```

7. Click **Commit changes...**. Use a message like `Add viewport line to home page`. Change the page name for each file.
8. Click **Commit changes**.

Now do the same for the other two pages. When you finish, you will have made three commits.

### Step 2: Let the page get narrower

1. Click the **Code** tab. Click `style.css`. Click the pencil icon.
2. Find this part. It is about halfway down:

```css
main {
  width: 960px;
  margin: 0 auto;
  padding: 24px;
}
```

3. Change `width: 960px;` to `max-width: 960px;`. Only add `max-` at the start. The part should now look like this:

```css
main {
  max-width: 960px;
  margin: 0 auto;
  padding: 24px;
}
```

`width: 960px` means "always 960 pixels wide". A phone is only about 360 pixels wide, so the page slid sideways. `max-width: 960px` means "960 pixels at most". On a phone, the page now shrinks to fit.

Do not commit yet. Stay in this file for step 3.

### Step 3: Put the cards in one column on a phone

1. Still in `style.css`, scroll to the very end. Click after the last `}`. Press **Enter** twice.
2. Paste this code:

```css
/* Phone screens: 600 pixels wide or less */
@media (max-width: 600px) {
  main {
    padding: 16px;
  }

  .cards {
    flex-direction: column;
  }

  .card {
    width: auto;
  }
}
```

3. Click **Commit changes...**. Type the message: `Make the layout work on a phone`
4. Click **Commit changes**.

The `@media (max-width: 600px)` line is called a **media query**. The rules inside its `{ }` only work when the screen is 600 pixels wide or less. `flex-direction: column` stacks the cards on top of each other. `width: auto` lets each card fill the screen from side to side.

## Check that it is done

The feature is done when **at 360 pixels wide, nothing scrolls sideways and the three cards on the home page sit in one column.**

**Check on a phone.** Open your live site on a phone. Try to drag the page left and right. It must not move sideways. The three cards must sit one above the other. Open the about and events pages too.

**Check on a laptop with Chrome.** This lets you pick exactly 360 pixels.

1. Open your live site in Google Chrome. Hold **Shift** and click refresh, so you see the newest version.
2. Right-click anywhere on the page. Click **Inspect**. A panel opens.
3. At the top left of the panel, click the small icon that looks like a phone and a tablet. Its name is **Toggle device toolbar**. You can also press **Ctrl + Shift + M** (on a Mac: **Cmd + Shift + M**).
4. Above the page you now see a bar. In the first menu, pick **Responsive**.
5. Click the width box next to it. Type `360` and press **Enter**.
6. Scroll down the home page. The three cards must be in one column.
7. Try to scroll sideways. There must be no sideways scroll bar.
8. Click **About** and **Events** in the menu. Check them the same way.
9. To close the phone view, click the same phone-and-tablet icon again.

If the page still looks tiny, one of your pages is missing the viewport line. Go back to step 1.

## If something goes wrong

- **The cards are still side by side.** Check the media query was pasted at the very end of `style.css`, after every other `}`. Check that each `{` has a matching `}`.
- **The page still slides sideways.** Check that `main` says `max-width: 960px;` and not `width: 960px;`.
- **Nothing changed.** Wait a minute. Hold **Shift** and click refresh. Check the **Actions** tab for a green tick.
