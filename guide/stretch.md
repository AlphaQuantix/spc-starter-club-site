# Stretch: Add a gallery page

**Time:** about 40 minutes for two people. Do this only after features 1, 2 and 3 are done.

## What you will build

You will add a fourth page called **Gallery**. It shows six photos with a short caption under each one. On a laptop the photos sit three in a row. On a phone they sit one above the other. You will also add **Gallery** to the menu on every page.

The six photos are already in your copy. Open the `images` folder in the **Code** tab. You will see `photo-1.svg` to `photo-6.svg`. They are simple practice pictures.

## Watch out for these traps

- **File names must match exactly.** The page is `gallery.html`, in small letters. The pictures are `images/photo-1.svg` and so on. One wrong letter gives a broken picture or a 404 page.
- **Add the viewport line.** The new page needs the viewport line from feature 2, or it looks tiny on a phone. The code below already has it.
- **Add the new link to every page.** If one page is missing **Gallery** in its menu, the feature is not done.

## Steps

### Step 1: Make the gallery page

1. Click the **Code** tab. Click **Add file**. Then click **Create new file**.
2. In the **Name your file...** box, type exactly: `gallery.html`
3. Copy all the code below. Paste it into the big box.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Gallery | SPC Photography Club</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="site-header">
    <p class="club-name">SPC Photography Club</p>
    <nav class="menu">
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="events.html">Events</a>
      <a href="gallery.html">Gallery</a>
    </nav>
  </header>

  <main>
    <h1>Gallery</h1>
    <p>Here are some photos from our walks and trips.</p>

    <div class="gallery">
      <figure>
        <img src="images/photo-1.svg" alt="The sun rising over a lake" width="400" height="300">
        <figcaption>Sunrise over the lake</figcaption>
      </figure>
      <figure>
        <img src="images/photo-2.svg" alt="Tall buildings with lit windows at dusk" width="400" height="300">
        <figcaption>A busy street at dusk</figcaption>
      </figure>
      <figure>
        <img src="images/photo-3.svg" alt="A tall green tree on a lawn" width="400" height="300">
        <figcaption>A tall tree in the college garden</figcaption>
      </figure>
      <figure>
        <img src="images/photo-4.svg" alt="A full moon and stars in a dark sky" width="400" height="300">
        <figcaption>The moon on a clear night</figcaption>
      </figure>
      <figure>
        <img src="images/photo-5.svg" alt="Three red flowers on green stems" width="400" height="300">
        <figcaption>Flowers by the main gate</figcaption>
      </figure>
      <figure>
        <img src="images/photo-6.svg" alt="Green hills under a yellow sun" width="400" height="300">
        <figcaption>Hills on our trip to the coast</figcaption>
      </figure>
    </div>
  </main>

  <footer class="site-footer">
    <p>SPC Photography Club is a made-up club for a practice project.</p>
  </footer>
</body>
</html>
```

4. Click **Commit changes...**. Type the message: `Add gallery page`
5. Click **Commit changes**.

The `alt` text says what is in each photo. A screen reader reads it out to people who cannot see the picture. It also shows if the picture fails to load.

### Step 2: Add Gallery to the menu on the other three pages

Do this for `index.html`, then `about.html`, then `events.html`.

1. Click the **Code** tab. Click the file name. Click the pencil icon.
2. Find this line inside `<nav class="menu">`:

```html
      <a href="events.html">Events</a>
```

3. Click at the end of that line. Press **Enter**. Paste this line:

```html
      <a href="gallery.html">Gallery</a>
```

4. The menu should now look like this:

```html
    <nav class="menu">
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="events.html">Events</a>
      <a href="gallery.html">Gallery</a>
    </nav>
```

5. Click **Commit changes...**. Use a message like `Add gallery link to home page menu`. Change the page name for each file.
6. Click **Commit changes**.

When you finish, you will have made three commits.

### Step 3: Lay out the photos

1. Click the **Code** tab. Click `style.css`. Click the pencil icon.
2. Scroll to the very end. Click after the last `}`. Press **Enter** twice.
3. Paste this code:

```css
/* The gallery page: three photos in a row */
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.gallery figure {
  margin: 0;
}

.gallery img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.gallery figcaption {
  margin-top: 4px;
  font-size: 16px;
}

/* On a phone, show one photo in each row */
@media (max-width: 600px) {
  .gallery {
    grid-template-columns: 1fr;
  }
}
```

4. Click **Commit changes...**. Type the message: `Lay out the gallery for laptop and phone`
5. Click **Commit changes**.

`width: 100%` and `height: auto` let each photo shrink to fit its space without being squashed.

## Check that it is done

The stretch is done when **a fourth page shows six photos, is in every menu, and also works on a phone.**

Wait one or two minutes. Open your live site. Hold **Shift** and click refresh.

1. Open each of the four pages: Home, About, Events and Gallery. Each menu must show all four links.
2. Click **Gallery** from each page. The gallery page opens every time. There is no 404.
3. On the gallery page, count the photos. There must be six. None may show as a broken picture.
4. Check at 360 pixels wide, as in feature 2. The photos sit one above the other. Nothing scrolls sideways.

## Want to use your own photos?

You can swap in photos you took yourself.

- Only use photos you took. Do not post photos of people unless they said yes.
- Keep each photo under 1 MB. Big photos make the page slow on a phone.
- Name the files in small letters with no spaces, for example `walk-1.jpg`.

To add them: click the **Code** tab, click the `images` folder, click **Add file**, then **Upload files**. Drag your photos in. Commit with a message like `Add our own photos`. Then edit `gallery.html`. Change each `src` to your new file name. Change each `alt` and caption to say what is in your photo.
