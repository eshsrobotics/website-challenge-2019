# Robotics Website
This is a website coded for the [Robotics Team Website Challenge 2019](https://challenges.robotevents.com/challenge/95).


## Setup :wrench:
```bash
$ git clone --recurse-submodules https://github.com/eshsrobotics/RobotEventsChallengeWebsite2018
$ cd RobotEventsChallengeWebsite2018
$ npm install -g @vue/cli-service
$ npm install @vue/cli-plugin-babel
$ npm install
$ npm run serve
```

### Dev Server
```bash
# Running on port 8080
$ npm run serve
```

### Build for Prod
```bash
$ npm run build

# Build and deploy to prod
$ ./deploy.sh
```

## Improvements :car:
### Website
* Improve image abstraction (add transition)
* Fix picture layout breaks with portrait dimensioned picture
* pwa

## Maintenance
###  As time continues
Update links on each individual cyberpatriots, frc, vex page to latest photograph collection, album

### Adding photos
To add photos, please add photos in the data-base photos archive, run respective scripts that build thumbnails for the higher resolution images, then reference those.
Alternatively, if the photo is niche and does not group well into other photos (such as taken during a competition or event), drop images in src/assets/local-image. These images will copy over using CopyWebpackPlugin (config in Vue.config.js) to dist/local-image. Reference them with <REPONAME>/local-image/img.jpg' if it's in a JSON file. Ex. 'WebsiteChallenge2019/local-image/img.jpg'. If you're in some JS file, you should be able to reference it with '@/assets/local-image/img.jpg'

### Editing this repo's name / changing hosting
Some .json files such as sponsorData.json (and others) have the repository name, WebsiteChallenge2019 written in to them. This is because webpack does not seem to resolve '@' (as src (it's a default webpack alias within Vue-cli-3's default webpack config options)). There's probably some way to config webpack to resolve strings, but this is a temporary work around. So change paths in .json file when changing repos name of if this is hosted somewhere else (in these case you'll have to change baseURL (publicDir for Vue CLI 3.3+) in vue.config.js as well!)

### Updating Sponsors
When updating sponsors, change sponsorData.json to match new sponsors. Wherever you want to show the Sponsors, you must update that page. This may include the `Sponsors.vue` page and the main page.

### Updating Carousels /  Infinite Slide Bars
After adding or removing an image from the slide bar, you must change the width of the infinite slide bar component. You must do this by design. Was not sure how to make component ore modular.


## Common Problems
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
