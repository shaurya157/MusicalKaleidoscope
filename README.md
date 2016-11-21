## Musical Kaleidoscope

[Musical Kaleidoscope Live][live]

### Background

Musical Kaleidoscope is an interactive musical player which helps you to visualize the notes you  play on your keyboard through a Kaleidoscope. The purpose of this project is to make the experience of playing music more vibrant not just through sound but also through colors on the screen.

![splash]

### Functionality & MVP  

With the Musical Kaleidoscope, users will be able to:

- [x] Play music using the keyboard
- [x] Have the music visualized in the shape of a Kaleidoscope
- [x] Have a constantly updating Kaleidoscope based on the key played

In addition, this project will include:

- [x] The ability to play multiple notes at the same time and allow mixing of colors
- [x] A production Readme


### Design

This app will consist of a single screen for the fractal with an optional pop up menu from the bottom to display the keys played and the colors associated with those keys. The design will be minimalistic to account for the extravagance of the Kaleidoscope, making for an optimal user experience.

In addition to this, users will also be able to customize their Kaleidoscope by further adding mirrors, changing the rotation speed, seams and the instrument played.

![controls]

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure and logic,
- `Easel.js` with `HTML5 Canvas` for DOM manipulation and rendering,
- Webpack to bundle and serve up the various scripts,
- `howler.js` to implement sound.


### Bonus features

There are many directions this cellular automata engine could eventually go. Some anticipated updates are:

- [ ] Play sample music to see the Kaleidoscope being created automatically
- [ ] Fractal design along with Kaleidoscopic design
- [x] Allow the user to rotate the Kaleidoscope
- [ ] Store their creation to share with their friends
- [x] Play different instruments

[live]: https://shaurya157.github.io/MusicalKaleidoscope/
[splash]: ./assets/screenshots/example1.png
[controls]: ./assets/screenshots/example2.png
