# Milton David's personal website
This is my website/blog's built with Astro. It is a static website that uses MDX for the blog articles.

# Figma design file
I designed the website in Figma. Here's [the link](https://www.figma.com/file/etOc5Yb0qFn77WxCQCPCCc/miltondavid.com?type=design&node-id=0%3A1&mode=design&t=Wqq5znrSeCk093fv-1) if you want to see it.

# Changelog
Jan 17 2024
- align the website to the improved design
Jan 6 2024
- website's "complete" version

## Installing
Clone the repository
```sh
git clone https://github.com/ToniMaunde/miltondavid-with-astro.git
```

Then navigate inside the folder
```sh
cd miltondavid-with-astro
```

Install the dependencies with
```sh
pnpm install
```

And then run
```sh
pnpm run dev
```

## The gist
An Astro powered static website using the MDX integration for handling the articles, and the tailwindcss integration for the styling. It's pretty simple, really: 2 static routes (/ and /articles) and 1 dynamic route (/articles/[slug]). I moved away from Remix because it was too powerful of a tool for a simple personal website/blog like mine.

## Built with
I used [Astro](https://astro.build/) since I wanted to move away from the SSR approach with Remix in the [previous version](https://github.com/ToniMaunde/miltondavid) of my website/blog.

## Contributing
if you want to contribute in any way (articles, refactoring), please do.

## Authors
Milton David

## License
The MIT license.
