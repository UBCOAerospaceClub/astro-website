# Welcome! A Beginner's Guide to Changing the UBCO Aerospace Website

> Read this if you're new to this repository, new to git, or new to coding in general.
> It explains the whole process in plain language — from "what is this thing?" to
> "my change is live on the internet!". You don't need any prior experience.

---

## Table of Contents

1. [What this website is and how it works](#1-what-this-website-is-and-how-it-works)
2. [The tools you'll need](#2-the-tools-youll-need)
3. [First-time setup (do this once)](#3-first-time-setup-do-this-once)
4. [How to see your changes as you work](#4-how-to-see-your-changes-as-you-work)
5. [A map of the website's files](#5-a-map-of-the-websites-files)
6. [Common tasks, step by step](#6-common-tasks-step-by-step)
7. [How to publish your changes (the git workflow)](#7-how-to-publish-your-changes-the-git-workflow)
8. [Quick git command cheat sheet](#8-quick-git-command-cheat-sheet)
9. [Tips for finding things](#9-tips-for-finding-things)
10. [Troubleshooting](#10-troubleshooting)
11. [Things you should never touch](#11-things-you-should-never-touch)
12. [Where to learn more](#12-where-to-learn-more)

---

## 1. What this website is and how it works

This repository contains the code for the **UBCO Aerospace club website**
(you can see it live at **https://ubcoaerospace.ca**).

Here's the 30-second version of how it all works:

- The site is built with a tool called **Astro**, which reads a collection of
  **text files and folders** in this repository and turns them into web pages.
- When you want to change the website, you **edit those text files**. You don't
  need to "upload" anything or touch a server.
- Every change you make goes through a program called **git** (pronounced like
  the word "get"), which keeps a history of changes and lets people work on the
  site at the same time without breaking it.
- Once your change is saved to the project's main branch on GitHub, an
  **automatic robot** (you'll see it as "GitHub Actions") rebuilds the site and
  puts the new version live. Nobody has to click a "deploy" button.

Think of it like writing a document in Google Docs with version history —
except the document happens to be a website, and "sharing" happens through a
website called GitHub.

---

## 2. The tools you'll need

These are the only things you need to install, and you only install them once.

| Tool | What it's for | Where to get it |
| ---- | ------------- | --------------- |
| **Node.js** (and npm, which comes with it) | The program that reads the site's code and shows it to you in your browser | https://nodejs.org — download the **LTS** version (the "long-term support" one, e.g. version 20 or 22). The important thing is that it's version **18.17.1 or newer**. |
| **A code editor** | The program you use to open and edit the website's files. Like a document editor, but for code. | **Visual Studio Code** (free): https://code.visualstudio.com — this is the most popular choice. |
| **A terminal** | Where you type commands (like a black window with text). | On Windows: "PowerShell" or "Terminal". On Mac: "Terminal". It's built in — you don't need to install it. |
| **A GitHub account** | The online home of the code. You'll use it to review and combine your changes. | https://github.com — if this is a club project, ask another member to add you to the club's GitHub organization. |

> *Feeling nervous about the terminal?* You can do most of the git steps
> visually instead using a free app called **GitHub Desktop**
> (https://desktop.github.com). This guide explains the terminal commands, but
> GitHub Desktop does the same thing with buttons — either way works.

---

## 3. First-time setup (do this once)

### Step 1: Get a copy of the website's code on your computer

Open your terminal and type:

```bash
git clone https://github.com/UBCOAerospaceClub/astro-website.git
```

This downloads a full copy of the website onto your computer (a "clone").
When it's done, move into the project folder:

```bash
cd astro-website
```

### Step 2: Install the site's "ingredients"

The website uses some helper software packages. They're not stored in the
repository by default — you download them with one command:

```bash
npm install
```

This can take a few minutes the first time. You only need to run it again if
the project's `package.json` file changes (rare).

### Step 3: Open the project in your editor

If you installed Visual Studio Code, you can open the project folder with:

```bash
code .
```

(Or open Visual Studio Code normally and use *File → Open Folder*.)

### ✅ You're done with setup. Now let's see the site.

---

## 4. How to see your changes as you work

Astro has a built-in "live preview" that shows a copy of the website running
**on your own computer** (not on the internet). It updates itself automatically
every time you save a file, so you can watch your edits appear in real time.

Run this in the terminal (make sure you're inside the `astro-website` folder):

```bash
npm run dev
```

You'll see something like this:

```
  🚀  Local:      http://localhost:4321
```

Now open your web browser and go to **http://localhost:4321** — that's your
personal copy of the website.

**Important:** you can make a mess here and nothing bad happens. This local
copy is only for you. The real website only changes when you publish (see
[Section 7](#7-how-to-publish-your-changes-the-git-workflow)).

When you're done working, press `Ctrl + C` in the terminal to stop the preview.

---

## 5. A map of the website's files

Here's what the main folders and files mean. You'll live in the `src` folder.

```
astro-website/
├── src/                          ← ✏️ You will almost always work here
│   ├── pages/                    ← One file per web page
│   │   ├── index.astro           ← The homepage
│   │   ├── uav/
│   │   │   ├── index.astro       ← The "UAV division" page
│   │   │   └── projects/
│   │   │       └── jellyfish-II-2026/
│   │   │           ├── index.md  ← One project's page (markdown)
│   │   │           └── *.jpg     ← That project's photos and videos
│   │   ├── rocketry/             ← Same pattern for the rocketry division
│   │   └── fixed-wing/           ← Same pattern for the fixed-wing division
│   ├── layouts/
│   │   ├── base.astro            ← The shared "frame" of every page (nav bar, footer)
│   │   └── project.astro         ← The shared "frame" of project pages
│   └── styles/                   ← Colors, fonts, and animation settings
├── public/                       ← 📦 Shared files (images, videos, logos, icons)
│   ├── sponsor-logos/            ← Sponsor logo images
│   ├── leadership-pictures/      ← Team lead photos
│   └── *.png / *.jpg / *.svg     ← Things used on many pages (logo, hero image)
├── package.json                  ← A list of the site's ingredients (rarely touched)
└── .github/workflows/            ← The "robot" that publishes the site (never touch)
```

### The two kinds of files you'll edit

| Kind | Extension | What it's for | Example |
| ---- | --------- | ------------- | ------- |
| **Project pages** | `.md` (markdown) | Writing articles: project write-ups, reports on competitions, etc. These are text files with some simple formatting. | `src/pages/uav/projects/jellyfish-II-2026/index.md` |
| **Regular pages** | `.astro` | The pages that make up the site itself: the homepage, the division pages, the navigation, the sponsor logos, the leadership section. | `src/pages/index.astro` (homepage) |

### How a project page is built (the `.md` files)

Every project page is a folder containing a file called `index.md` plus that
project's images:

```
src/pages/uav/projects/jellyfish-II-2026/
├── index.md
├── catch.jpeg
├── mounted.jpeg
└── IMG_6443.jpg
```

The `index.md` file begins with a block called **frontmatter** — a set of
"settings" at the very top between two lines of `---`. It looks like this:

```
---
layout: ../../../../layouts/project.astro
title: Jellyfish II - 2026
description: A Mothership, a Scout, and a Water Cannon
thumbnail: IMG_6437.jpg
---

(Your article text goes below here, after the second ---)
```

Those settings do the following:

- **`layout`** — which page design to use. **Always keep the same value:**
  `../../../../layouts/project.astro`. Think of it as "put this project inside
  the standard project-page design."
- **`title`** — the project's name. Shown at the top of the page and on the
  project card.
- **`description`** — one sentence about the project. Shown under the title in
  the card on the division page.
- **`thumbnail`** — the file name of the image used as the card's background.
  The image must be in the **same folder** as the `index.md` file.

Below the second `---` is where the actual article text goes, written in
**markdown**. Markdown is just plain text with a few simple symbols:

```markdown
## A Sub-Heading (a line starting with ##)

This is a normal paragraph. You can make text **bold** or *italic*.

- A bullet list
- item two
- item three

![Description of the image](my-photo.jpg)

*The caption under the photo (a line starting with * and in italics)*
```

> **Best practice:** when you start a new project page, copy an existing
> project's `index.md` file and edit the parts that are different. Copying a
> working example is the safest way to avoid mistakes.

---

## 6. Common tasks, step by step

The two most common jobs are: **adding/updating project pages**, and **editing
the site's text** (homepage, division pages, etc.). Here's how to do each one.

### Task A — Add a new project page

**Goal:** a new project card appears on the division page, and clicking it
opens a full project write-up.

1. With the live preview running (`npm run dev`), first check that the preview
   works: open http://localhost:4321 and look at the UAV / Rocketry / Fixed
   Wing pages.
2. Look at an existing project to use as a template. For example, open
   `src/pages/uav/projects/jellyfish-II-2026/index.md`. Copy the whole file.
3. Create a new folder inside the right division's `projects` folder. Name it
   after the project using lowercase letters and hyphens (e.g. `my-project`):
   `src/pages/<division>/projects/<project-name>/`
4. Paste the copied file there as `index.md`, then edit the frontmatter:
   - `title` → your project's name
   - `description` → one sentence
   - `thumbnail` → the image file name you want on the card
5. Add your images and videos **in the same folder** (drag them in via your
   editor, File Explorer, or Finder). Add images inside the article with
   `![Description](name-of-file.jpg)`. Add videos like this:

   ```html
   <video width="100%" height="auto" class="rounded-xl" controls>
     <source src="name-of-video.mp4" type="video/mp4">
     Your browser does not support the video tag.
   </video>
   ```

6. Look at the preview — the project card should appear automatically on the
   division page, and the page itself should be at a URL like
   `http://localhost:4321/<division>/projects/<project-name>/`.

> **Pro tip about images:** images can slow a page down. Try to use compressed
> JPG or PNG files (a few hundred KB each is fine). Don't upload raw files
> straight from a camera that are tens of megabytes.

### Task B — Edit the text of a page (e.g. the homepage)

**Goal:** change a heading, a paragraph, a title, or a link.

1. Open `src/pages/index.astro` (homepage) or `src/pages/uav/index.astro`
   (division page) in your editor.
2. You'll see what looks like a mix of a normal webpage and code. The text you
   see written in plain English is the text that appears on the site. For
   example, on the homepage you can search for the line:

   ```
   <p class="text-2xl text-gray-200 mb-8 animate-fade-in delay-200">UAVs &#8226; Fixed-Wings &#8226; Rocketry</p>
   ```

   The text inside the `>` `</p>` tags is what visitors see. Change it and
   watch the preview update.
3. **The rule of thumb:** if the visible text is inside quotes that start with
   `<` — like `<p>`, `<h2>`, `<a>`, `<h4>` — that's what shows on screen.
   Change that. Everything with a `class="..."` is decoration; leave it alone
   unless you know what you're doing.
4. Save the file and check the preview.

> **Don't be alarmed by the code.** The bits that look like
> `<h3 class="text-4xl font-bold mb-6 font-heading-sans">About Us</h3>` are
> mostly: *element type* (`<h3>` = heading level 3), *style classes*
> (size, boldness, color) and then the visible text "About Us". The structure
> stays the same; you're usually only changing the visible text.
>
> Also note: `&#8226;` is just the way the `•` character is written in code —
> you can type `•` directly instead.

### Task C — Add a new sponsor logo

1. Put the logo image in the `public/sponsor-logos/` folder.
2. Open `src/pages/index.astro` and find the **Our Sponsors** section (search
   for "sponsors").
3. Find a line like this:

   ```
   <img src="/sponsor-logos/Amrize.png" class="h-16 object-contain" />
   ```

4. Copy that line, paste it inside the same row, and change the `src` to your
   new file's name, for example:

   ```
   <img src="/sponsor-logos/MyCompany.png" class="h-16 object-contain" />
   ```

5. If you want the logo to link to the sponsor's website, wrap it like this
   (note the `<a href="...">` before and `</a>` after):

   ```
   <a href="https://www.example.com/"><img src="/sponsor-logos/MyCompany.png" class="h-16 object-contain" /></a>
   ```

6. Save and check the preview. Note that `public/` files use an absolute path
   starting with `/sponsor-logos/...` (no `public` in the path).

### Task D — Change a team lead's photo or role

These are hardcoded on the relevant page:

- Homepage leadership section → `src/pages/index.astro` (search for the
  person's name, e.g. "Divyesh")
- Division pages → `src/pages/uav/index.astro`, `rocketry/index.astro`,
  `fixed-wing/index.astro` (search for "Team Lead")

Add the new photo to `public/leadership-pictures/` first, then update the
`src` and the name/role text in the page.

---

## 7. How to publish your changes (the git workflow)

This is the part people find scariest, but it's really just four steps:
**branch → commit → push → pull request → merge**. Here's what each means in
plain language.

### A short explanation of git (the mental model)

- **Commit** — like hitting "save" with a short diary entry about what you did
  ("added photos to the Guardian project").
- **Branch** — a separate "workspace copy" of the code where you make your
  changes safely. The main, always-live version is called `main`.
- **Pull request (PR)** — a formal request to merge your branch's changes into
  `main`. It's where other club members can look at your changes and say "looks
  good!" before they go live.
- **Merge** — actually combining your changes into `main`. **Merging is what
  publishes your change** — the deploy robot watches `main` and rebuilds the
  site within a few minutes.

**Why bother with branches?** Because if everyone edited `main` directly,
people would overwrite each other constantly. Branches let everyone work at
once. This rule is a team-safe habit even for tiny text changes.

### The step-by-step ritual (repeat this every time you make a change)

**Step 1 — Make sure you have the latest code.**

```bash
git pull
```

**Step 2 — Create a branch with a descriptive name.**

```bash
git checkout -b add-my-project-page
```

(Use hyphens instead of spaces. Name it after what you're doing.)

**Step 3 — Make your edits** (Section 6), saving files as you go. Check the
preview often to make sure everything looks right.

**Step 4 — See which files you changed** (optional but a good habit):

```bash
git status
```

This lists changed files. Only files you expect to be there should be listed.

**Step 5 — "Save" your changes as a commit.**

First, tell git which files to include. To include everything you changed:

```bash
git add .
```

(If you only want one file, you can do `git add src/pages/uav/index.astro`
instead.) Then create the commit with a short description:

```bash
git commit -m "Add my project page"
```

**Step 6 — Upload your branch to GitHub.**

```bash
git push -u origin add-my-project-page
```

(`-u origin` only needs to be there the first time you push a new branch.)

**Step 7 — Open a pull request on GitHub.**

Go to the repository page on GitHub (https://github.com/UBCOAerospaceClub/astro-website).
You'll usually see a yellow banner saying something like *"add-my-project-page
had recent pushes — Compare & pull request"*. Click it, write a short sentence
about what you changed (and mention anyone you'd like to review it), and click
**Create pull request**.

**Step 8 — Get a review, then merge.**

- Wait for at least one other person to look at it. Answer any comments they
  leave on the PR.
- When everyone is happy, click the green **Merge pull request** button.
- That's it! Within a few minutes, GitHub's robot builds the site and
  https://ubcoaerospace.ca updates automatically. (You can watch the progress
  on the PR page / the "Actions" tab.)

### Checklist before you ask for a review

- [ ] I checked my page at http://localhost:4321 and it looks right
- [ ] No broken image links (broken images show an empty icon — check!)
- [ ] No leftover placeholder text / obvious typos
- [ ] My branch name and commit message describe what I did
- [ ] I didn't add huge files (keep images small and compressed)

---

## 8. Quick git command cheat sheet

| Situation | Command |
| --------- | ------- |
| Copy the project to your computer (once) | `git clone https://github.com/UBCOAerospaceClub/astro-website.git` |
| Get the latest changes | `git pull` |
| Start a new branch | `git checkout -b my-branch-name` |
| See what changed | `git status` |
| Stage/find changed files | `git add .` |
| Save a commit with a message | `git commit -m "Describe your change"` |
| Upload to GitHub | `git push -u origin my-branch-name` |
| Go back to the main branch | `git checkout main` |

If you get stuck, `git status` is your friend — it tells you what's going on.
And remember everyone messes up git sometimes; nothing here is permanent until
the pull request is merged.

---

## 9. Tips for finding things

- **Find where certain text lives:** In Visual Studio Code, press
  `Ctrl + Shift + F` (Windows/Linux) or `Cmd + Shift + F` (Mac) and type any
  phrase that appears on the site (e.g. "Team Lead"). It will show you exactly
  which file it's in.
- **See the full file list:** In VS Code, the file explorer is the icon at the
  top-left. This is your map of the whole site.
- **Copy, don't guess:** when in doubt, imitate an existing file that does
  something similar. The codebase is repetitive on purpose — that's a feature.

---

## 10. Troubleshooting

| Problem | What's probably happening | Fix |
| ------- | ------------------------- | --- |
| `npm` is not recognized as a command | Node.js isn't installed, or the terminal was open before you installed it | Install Node.js from nodejs.org, then **close and reopen** the terminal |
| `npm install` fails or takes forever | Network hiccup or leftover broken install | Run `npm install` again |
| `npm run dev` starts but the page is blank | You forgot to install; or the terminal is in the wrong folder | Make sure you ran `npm install` and that you're in the `astro-website` folder (you can check your location with `pwd` on Mac / `cd` on Windows) |
| Port 4321 already in use | Another `npm run dev` is running | Stop the other one with `Ctrl + C` — or let the preview continue; it will print an alternative port to use |
| My image shows a broken icon | Wrong path or missing file | In `.astro` pages, paths starting with `/` point to the `public/` folder (e.g. `/sponsor-logos/X.png`). In `.md` project pages, use the file name if the image is in the same folder as `index.md` |
| My new project doesn't show on the division page | Wrong folder or missing `index.md` | Make sure it's at `src/pages/<division>/projects/<name>/index.md`, and that the file is named exactly `index.md` |
| The live website still shows the old version after merging | It takes a couple of minutes to rebuild | Wait ~2–5 minutes, then hard-refresh the page (`Ctrl + Shift + R` / `Cmd + Shift + R`). You can watch the "Actions" tab on GitHub. |

---

## 11. Things you should never touch

- **`node_modules/`** — downloaded helper code. Always ignore it.
- **`.astro/`** (the folder in the project root) — Astro's own workspace files.
- **`dist/`** — where builds go; it's rebuilt automatically.
- **`package-lock.json`** — this locks the versions of the site's ingredients.
  Any commit changing it should be a deliberate, reviewed decision.
- **`.github/workflows/`** — the robot that deploys the site. One bad edit here
  can break publishing for everyone.
- **Never commit your personal information, passwords, or API keys.** Text
  files are readable by anyone with access to the repo.

If you're unsure whether a change is safe, ask someone — every club member
started exactly where you are now.

---

## 12. Where to learn more

- **Markdown (writing `.md` files):** a one-page cheat sheet at
  https://www.markdownguide.org/cheat-sheet/
- **Astro (the site's engine):** the official "getting started" guide at
  https://docs.astro.build — the site follows the "Astro + Tailwind" setup.
- **Git fundamentals**, explained with pictures: https://rogerdudler.github.io/git-guide/
- **GitHub Desktop** (no-terminal git): https://desktop.github.com

And the best resource of all: **ask the club**. Someone has almost certainly
done the exact same task before and can walk you through it in five minutes.

---

*Happy editing, and thanks for improving the club's website! 🚀*