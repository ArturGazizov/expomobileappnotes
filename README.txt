https://medium.com/@ralph1786/start-a-project-with-react-native-and-expo-cli-92df0fcf575c


Start A Project With React Native And Expo CLI
Rafael Cruz
Rafael Cruz
Nov 15, 2019 · 3 min read

Welcome back reader to another blog where I try to help you better understand a technical topic or help you in your quest to become a better developer. This blog will focus on how to start a React Native project using the Expo CLI.
What is React Native?

React Native is a JavaScript framework that allows you to create native applications by using the very popular JavaScript library React. One of the great benefits of using React Native is that it allows you to create applications for both IOS and Android by using JavaScript. Meaning that you don’t need to know Objective-C or Swift to build an IOS application and Java for Android.

React Native can decrease development time because it allows you to build one application that will work on two different OS platforms. Also since it uses React it allows you to use components and the reusability that they bring. If you want to learn more about React Native I highly recommend diving into the documentation, which in my opinion is great and provides excellent and clear examples.
Getting Started

Step #1

Make sure you have the latest version of Node.js installed in your computer. To check what version you have run the following command in your terminal:

node -v

In case you don’t have Node.js installed or the latest version click here for instructions regarding installation or updating to the newest version.

Step #2

Once you have Node.js installed run the following command:

npm install -g expo-cli

This will install the Expo CLI globally on your computer. If you are using Mac OS you might need to add the sudo followed by the command above. Then you must enter the password to access your computer, on Windows this not necessary.

Step #3

After successfully installing the Expo CLI you can initialize a brand new project by running the following command:

expo init <name of project goes here>

When the project is created you must then change directory to the newly created folder and start the development server. You can achieve this by running the commands below:

cd <name of project goes here>
npm start

After running these commands a new window in your browser will open up with information about your project.

Below is an example of how this will work:

expo init my-todo-app
cd my-todo-app
npm start

At this point you have a brand new React Native project, but how can you preview your project. In the following section I will tackle this issue.
Preview Your Project

To preview your newly created project you need to download Expo Client App on your smartphone. Depending on the phone you have you can do this on the App Store or the Google Play Store.

Once you have the Expo Client App installed scan the QR Code that you saw when you ran npm start on the terminal. You will have to wait a couple of minutes at first while your project bundles and loads for the first time. After it has completed loading you will see a short message in the center of the screen. That’s basically your barebones application running.

In case you only have either an Iphone or an Android smartphone you are able to use simulators, which will allow you to work on both platforms with ease. To use the simulators you first need to download Android Studio and Xcode (from the app store).

Warning: If you are using Windows as an operating system you will not be able to download Xcode (due to Apple’s restrictions).

For detailed instructions on how to get the simulator up and running for Android please click here.

To start the simulator for Iphone please click here for steps in how to do so.

That’s it, thanks for reading and I wish you the best in your quest to becoming a great mobile app developer with the help of React Native and Expo.
