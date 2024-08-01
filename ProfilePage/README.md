# Profile Portfolio Page App

This is a personal profile and portfolio app built with React Native and Expo. The app includes features such as profile image upload and project image management using Expo Image Picker.

## Features

- **Profile Image Upload**: Users can update their profile picture using Expo Image Picker.
- **Project Image Management**: Users can add and update images for each project listed on the Projects Page.


## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Structure
ProfilePage/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx
│   │   ├── Projects.tsx
├── assets/
│   ├── images/
│   │   ├── Profile.jpg
│   │   ├── placeholder.png
├── components/
│   ├── navigation/
│   │   ├── TabBarIcon.tsx
├── constants/
│   ├── Colors.ts
├── hooks/
│   ├── useColorScheme.ts
├── App.tsx
├── README.md


## components

index.tsx
This file contains the main component of the app. It includes a header section, profile image display with the option to update the image using Expo Image Picker, an information section, and an input form.

Projects.tsx
This file contains the Projects component which allows users to add and update images for each project. The images can be selected from the user's device using Expo Image Picker.

TabBarIcon.tsx
This file contains the component for the tab bar icons used in the navigation.

## Installation

1. **Clone the repository:**

   git clone https://github.com/ParysUnangst/Mobile-App-Development/tree/main/ProfilePage
   cd ProfilePageApp

Install dependencies:
npm install

Start the development server:
npx expo start
Usage


Run on a simulator/emulator or a physical device:
For iOS: Press i to open in iOS simulator.
For Android: Press a to open in Android emulator.
For Web: Press w to open in the web browser.


Explore the App:
View the profile image and information.
Enter your name and a comment in the form.
Click the submit button to see the thank-you message.


Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch: git checkout -b my-feature-branch
Make your changes and commit them: git commit -m 'Add some feature'
Push to the branch: git push origin my-feature-branch
Open a pull request.


License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
If you have any questions or suggestions, feel free to reach out!

Email: parys.unangst@gmail.comcom
GitHub: https://github.com/parysunangst