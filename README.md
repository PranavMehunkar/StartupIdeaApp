<h1>Startup Idea Showcase App</h1>
<h2>Overview</h2>
A mobile application built using React Native + Expo that allows users to submit startup ideas, view ideas, upvote them, sort them, and view a leaderboard.  
This project was created as part of the Mobile App Internship Assignment.

<h2>Table of Contents</h2>
<li>Overview</li>
<li>Tech Stack</li>
<li>Features</li>
<li>Installation</li>
<li>Usage</li>
<li>License</li>
<h2>Tech Stack</h2>
<li>React Native</li>
<li>Expo</li>
<li>Zustand (state management)</li>
<li>React Navigation</li>
<li>Gesture Handler + Reanimated (swipe gestures)</li>
<li>Expo Haptics</li>
<li>React Native Toast Message</li>
<h3>Features</h3>
<h4>Submit Idea</h4>
<li>Add a startup idea with:</li>
  - Name<br>
  - Tagline<br>
  - Description<br>
<li>Automatically generates a random rating from 0–100.</li>
<li>Data stored using **Zustand global state management.</li>
<h4>Idea List Screen</h4>
<li>Displays all submitted ideas.</li>
<li>Sort ideas by:</li>
  - Rating<br>
  - Votes<br>
<li>Expand/collapse description using Read More / Read Less.</li>
<li>Upvote ideas (increases votes count).</li>
<li>Haptic feedback on upvote.</li>
<li>Swipe left to Share idea (Bonus Feature).</li>
<h4>Leaderboard</h4>
<li>Displays top ideas sorted by votes.</li>
<li>Shows badges:</li>
  - 🥇 1st place<br>
  - 🥈 2nd place<br>
  - 🥉 3rd place<br>
<li>Clean, ranked UI.</li>
<h4>🌙 Dark Mode (Bonus Feature)</h4>
<li>Toggle between Light and Dark themes using a header button.</li>

<h4>Toast Notifications (Bonus Feature)</h4>
<li>Shows confirmation toast on idea submission and upvote.</li>

<h4>Persistent Data (in-session)</h4>
<li>Uses Zustand to store ideas and upvotes as long as the app runs.</li>
<h2>Installation</h2>
To run StartupIdea App, follow these steps:

<h3>1. Clone the repository:</h3>

<div class="bg-light p-3 rounded border">
  <pre class="mb-0">
    <code>git clone https://github.com/yourusername/StartupIdeaApp.git</code></pre>
</div>

<h3>2. Navigate to the project directory:</h3>

<div class="bg-light p-3 rounded border">
  <pre class="mb-0">
    <code>cd StartupIdeaApp</code></pre>
</div>

<h3>3. Install dependencies:</h3>

<div class="bg-light p-3 rounded border">
  <pre class="mb-0">
    <code>npm install</code></pre>
</div>

<h3>4. Run the terminal:</h3>

<div class="bg-light p-3 rounded border">
  <pre class="mb-0">
    <code>npx expo start</code></pre>
</div>

<h2>Usage</h2>
<h3>Set connection mode to Tunnel</h3>

<li>Open Expo DevTools in the browser</li>
<li>Change Connection → Tunnel</li>
<li>Scan the QR code using Expo Go on Android</li>

<h3>App should now load on your device.</h3>

<h2>License</h2>
All rights reserved.
