# Robotics Website
This is a website coded for the [Robotics Team Website Challenge 2019](https://challenges.robotevents.com/challenge/95).


## Setup :wrench:
```bash
$ git clone https://github.com/eshsrobotics/RobotEventsChallengeWebsite2018
$ cd RobotEventsChallengeWebsite2018
$ npm install -g @vue/cli-service
$ npm install @vue/cli-plugin-babel
$ npm install
$ npm run serve
```

### Dev Server
```bash
$ npm run serve
```

#### About dev server
* Running on port 8080

### Build for Prod
```bash
$ npm run build
```

## Info :information_source:
Just a heads up, I performed an interactive rebase on about November 28th 2018, and essentially nuked part of the commit history or something. I tried to rename some (2ish) commit messages, but I tripped up and messed up. I tried to fix it, it's still messed up, but the website works now. ¯\_(ツ)_/¯


## Roadmap :car:
### Website
* Make website responsive design & mobile friendly
* Possibly have some way of viewing the Team's 3D Models bots
* Maybe have a shine effect, possibly for some of the sponsor icons
* Theme support
* Create abstraction over image element, such that clicking on image yields an enlarged photo, with extra features
* Think about timeline component to show timeline of frc, vex, cyberpatriots competition
* Have carousel of sponsors / photos, etc., or have line of sponsors that move left gradually
* Have descriptions of photographs on the back, via flip on hover
* 404

### ~~Blogging System~~
* No plans of implementation, details will become more terse, removed as time progresses
* Blogging system can be controlled by in-house (very basic) CMS
  * Make with NodeJS (running on localhost)
  * Use SQLite to manage users
* CMS has three types of users
  * admins, moderators and standard users
* All users must memorize passcode
  * Keep trap of users, comments, etc. If a password is wiped due to an emergency, make sure the blog posts, comments, etc. are not deleted, or will not be deleted on the next build of the blog

## Comon Problems
If you're new to Vue, or contributing, you may encounter a few errors. I've isolated some of the more common (and uncommong) errors / mishehaviors you may be getting and I've provided a solution. i.e. If the website is not doing what you want, see if your issue matches any below. The first bullet point after a subsection is a snippet of example code that defines or relates to the issue.

### Scoped CSS / SCSS Styles in Components
* `<style scoped lang="scss">`
* You are changing a Vue component to have scoped slots (where it previously didn't), or removing scoped slots on a component.
* When toggling scoped components, your styles are messing up / not being applied
* Solution: Refresh the page. This has to do with webpack-hot-reload. Sometimes it doesn't update css (you're compiled scss) properties after you toggle if a component is scoped

### CSS Transitions
* `createTransitions((background-color, color, box-shadow), false, 0.2s, ease-in-out)`
* You are trying to add transitions on a component, but in the process other transitions are being removed
* This has to do with my `createTransitions` scss function
* It's doing the same thing as below, where .element has the color red (not blue)
  ```scss
  .element { color: blue }
  .element { color: red }
  ```
* Solution 1: Remove all `createTransitions` calls within your mixins, and put them in your components. That way there are no two `transition` properties for each element (since your mixin will bring an extra `transition` property and cause conflicts)
* Solution 2: Actually fix the issue. Just modifying the `createTransitions` scss function won't change anything. Try looking into [extend](https://css-tricks.com/the-extend-concept/) in scss in combination with mixins / methods / whatever

### CSS IDs Styling
* Ids can only be used once per webPage. Because components are reusable, you might be declaring multiple components of the same type on the same page
* Alternatively, you may be giving the component two different Ids from two different places. Such as giving the Id when creating the component (`ChildComponent.vue`) *and* using the component (`ParentComponent.vue`)

  `ParentComponent.vue`
  ```html
    <parent-component>
      <child-component id="arc">
      </child-component>
    </parent-component>
  ```
  `ChildComponent.vue`
  ```html
    <template id="car">
      <!-- Contents of ChildComponent.vue -->
    </template>
  ```
* Solution: Use classes, and almost never Ids for html elements, especially when you know you're going to use the component multiple times
