## Musical Kaleidoscope

### Background

Musical Kaleidoscope is an interactive musical player which lets you visualize the songs you are playing on your keyboard through a Kaleidoscope. The purpose of this project is to make the experience of playing music more vibrant not just through sound but also through colors on the screen.  

### Functionality & MVP  

With the Musical Kaleidoscope, users will be able to:

- [ ] Play music using the keyboard
- [ ] Have the music visualized in the shape of a Kaleidoscope
- [ ] Have a constantly updating Kaleidoscope based on the key played

In addition, this project will include:

- [ ] The ability to play multiple notes at the same time and allow mixing of colors
- [ ] A production Readme

### Design

This app will consist of a single screen for the fractal with an optional pop up menu from the bottom to display the keys played and the colors associated with those keys. The design will be minimalistic to account for the extravagance of the Kaleidoscope, making for an optimal user experience.

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure and logic,
- `Easel.js` with `HTML5 Canvas` for DOM manipulation and rendering,
- Webpack to bundle and serve up the various scripts,
- `howler.js` to implement sound.

### Implementation Timeline

**Day 1**: Lean all about the `easel.js` library and have a basic canvas working.

- Research about the `easel.js` library
- Get basic canvas working
- Set the skeleton for the days to come
- (bonus) work on day 2 material

**Day 2**: Day 2 will be dedicated to learning how to make Kaleidoscope design using easel as well as to get a bare minimum of different colors showing up on the screen in Kaleidoscopic design.

- Render colors on screen
- Implement Kaleidoscope
- Render colors in a Kaleidoscopic design

**Day 3**: Use the `howler.js` api. Figure everything about sound rendering and get a sounds to play using the keyboard.

- Have sounds play
- Assign each possible keystroke to a sound.

**Day 4**: Connect the sounds to colors and make the Kaleidoscope work.

- Assign each possible keystroke to a color
- Working MVP of keystrokes playing both music and making colors appear on the screen in a Kaleidoscope design

### Bonus features

There are many directions this cellular automata engine could eventually go. Some anticipated updates are:

- [ ] Play sample music to see the Kaleidoscope being created automatically
- [ ] Fractal design along with Kaleidoscopic design
- [ ] Allow the user to rotate the Kaleidoscope
- [ ] Store their creation to share with their friends
