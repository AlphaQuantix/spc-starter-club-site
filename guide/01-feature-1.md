# Feature 1: Three linked pages

**Time:** about 40 minutes for two people.

## What you will build

Right now the site has one page: the home page. You will add two more pages. One is an **about** page. One is an **events** page. Then you will add a menu to the top of every page. The menu has three links: Home, About and Events.

## Before you start

- You have made your own copy of this repository. The [README](../README.md) shows how.
- GitHub Pages is turned on for your copy. The README shows how.
- One person types. The other person reads each step out loud and checks it.

## Watch out for this trap

A link only works if the file name is spelled the same way in both places. `about.html` and `About.html` are **different** files on GitHub Pages. If a link is wrong, you get a page that says **404** (page not found). Use small letters for every file name. Do not use spaces.

## Steps

### Step 1: Make the about page

1. Go to your copy of the repository on GitHub. Click the **Code** tab.
2. Click the **Add file** button. Then click **Create new file**.
3. In the **Name your file...** box at the top, type exactly: `about.html`
4. Copy all the code below. Paste it into the big box.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>About us | SPC Photography Club</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="site-header">
    <p class="club-name">SPC Photography Club</p>
    <nav class="menu">
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="events.html">Events</a>
    </nav>
  </header>

  <main>
    <h1>About us</h1>
    <p>The club started with five friends and one old camera. Now we have about forty members.</p>
    <p>We meet in Room 12 every Wednesday at 4 pm. New members are welcome at any meeting.</p>
    <h2>Who runs the club</h2>
    <p>Students run the club. This year the leads are Asha Example and Ravi Sample. These names are made up for this practice site.</p>
  </main>

  <footer class="site-footer">
    <p>SPC Photography Club is a made-up club for a practice project.</p>
  </footer>
</body>
</html>
```

5. Click the green **Commit changes...** button at the top right.
6. In **Commit message**, type: `Add about page`
7. Leave **Commit directly to the main branch** picked. Click **Commit changes**.

The `<nav class="menu">` part is the menu. Each `<a href="...">` is one link. The part inside the quotes is the file the link opens.

### Step 2: Make the events page

1. Click the **Code** tab to go back to the list of files.
2. Click **Add file**. Then click **Create new file**.
3. In the **Name your file...** box, type exactly: `events.html`
4. Copy all the code below. Paste it into the big box.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Events | SPC Photography Club</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="site-header">
    <p class="club-name">SPC Photography Club</p>
    <nav class="menu">
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="events.html">Events</a>
    </nav>
  </header>

  <main>
    <h1>Events</h1>
    <p>All our events are free. Bring a phone or a camera.</p>
    <ul class="event-list">
      <li><strong>Every Saturday, 7 am:</strong> Photo walk. We meet at the main gate.</li>
      <li><strong>First Wednesday of the month, 4 pm:</strong> Workshop on light and shadow in Room 12.</li>
      <li><strong>Last Friday of the month, 3 pm:</strong> Show and tell. Bring your best photo of the month.</li>
    </ul>
  </main>

  <footer class="site-footer">
    <p>SPC Photography Club is a made-up club for a practice project.</p>
  </footer>
</body>
</html>
```

5. Click **Commit changes...**. Type the message: `Add events page`
6. Click **Commit changes**.

### Step 3: Add the menu to the home page

The two new pages have a menu. The home page does not have one yet.

1. Click the **Code** tab. Click `index.html` in the list of files.
2. Click the pencil icon (**Edit this file**) near the top right.
3. Find this line. It is near the top, inside `<header>`:

```html
    <p class="club-name">SPC Photography Club</p>
```

4. Click at the end of that line. Press **Enter** to make a new line.
5. Paste these lines on the new line:

```html
    <nav class="menu">
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="events.html">Events</a>
    </nav>
```

6. The top of the file should now look like this:

```html
  <header class="site-header">
    <p class="club-name">SPC Photography Club</p>
    <nav class="menu">
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="events.html">Events</a>
    </nav>
  </header>
```

7. Click **Commit changes...**. Type the message: `Add menu to home page`
8. Click **Commit changes**.

### Step 4: Make the menu look neat

1. Click the **Code** tab. Click `style.css`.
2. Click the pencil icon (**Edit this file**).
3. Scroll to the very end of the file. Click after the last `}`. Press **Enter** twice.
4. Paste this code there:

```css
/* The menu at the top of every page */
.menu {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
  margin-top: 8px;
}

.menu a {
  color: #ffffff;
  font-weight: bold;
}
```

5. Click **Commit changes...**. Type the message: `Style the menu`
6. Click **Commit changes**.

`flex-wrap: wrap` lets the links move to a new line when the screen is narrow. You will need that on a phone in feature 2.

## Check that it is done

Wait one or two minutes after your last commit. Then open your live site. The link is in **Settings**, then **Pages**.

The feature is done when **the site has a home page, an about page and an events page, and every page has a menu that opens the other two.**

Check it like this:

1. On the home page, click **About**. The about page opens.
2. On the about page, click **Events**. The events page opens.
3. On the events page, click **Home**. The home page opens.
4. Now try the other three: Home to Events, About to Home, Events to About.
5. All six clicks must open the right page. None may show **404**.

If you see a 404, look at the link in the menu. Then look at the file name in the **Code** tab. They must match exactly, with small letters.

## If something goes wrong

- **The new page has no colours.** Check that the line `<link rel="stylesheet" href="style.css">` is in the page's `<head>`.
- **You made a mistake in a commit.** Open the file again, fix it, and commit again. Every commit is saved, so nothing is lost.
- **The live site has not changed.** Wait a minute. Hold **Shift** and click refresh. Check the **Actions** tab for a green tick.

## Good commit notes

You made four commits in this feature. Each one had a short note that starts with a verb and says what changed. Keep doing this. Your mentor will read your commit list to see who did what.
