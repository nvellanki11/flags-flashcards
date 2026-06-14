# Web Development Project 2 - Flag Flashcards

Submitted by: Nishant Vellanki

This web app: tests how well a user knows their international flags. 12 flashcards exist in this set, each being a flag of one of the participating nations in the World Cup. Users can scroll through the cards with the arrow buttons at the bottom, and they can reveal which nation's flag is visible by clicking on the flashcard (in which a brief flipping animation is played).

Time spent: 4 hours spent in total

## Required Features

The following **required** functionality is completed:


- [ X] **The app displays the title of the card set, a short description, and the total number of cards**
  - [ X] Title of card set is displayed 
  - [ X] A short description of the card set is displayed 
  - [ X] A list of card pairs is created
  - [ X] The total number of cards in the set is displayed 
  - [ X] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [ X] **A single card at a time is displayed**
  - [ X] Only one half of the information pair is displayed at a time
- [ ]X **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [ X] Clicking on a card flips it over, showing the back with corresponding information 
  - [ X] Clicking on a flipped card again flips it back, showing the front
- [ X] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [ X] Cards contain images in addition to or in place of text
  - [ X] Some or all cards have images in place of or in addition to text
- [ ] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Difficulty: Easy/medium/hard
    - Subject: Biology/Chemistry/Physics/Earth science

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!
I added little arrow icons on the buttons, taken from a React library for icons

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://imgur.com/a/33BWhkX' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  Screen Record + Imgur
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.
First, displaying each pair one at a time on a single flashcard took me time to conceptualize. To implement it, I just kept a useState for the current index in the list of pairs. Additionally,
implementing the flipping animation was challenging; I used the help of Claude for that. Lastly,
making CSS styling edits kept tripping me up- I need a stronger foundational understanding of them.

## License

    Copyright 2026 Nishant Vellanki

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.