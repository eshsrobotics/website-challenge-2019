# Robotics Website

## How to use
### Prerequisites
* git
* npm (node)
### Setup
```bash
$ git clone https://github.com/eshsrobotics/RobotEventsChallengeWebsite2018
$ cd RobotEventsChallengeWebsite2018
$ npm install
```

### Dev Server
```bash
$ npm run serve
```
#### About dev server
* Running on localhost:8080

### Build for Prod
```bash
$ npm run build
```

## Roadmap
### Website
* Some menus in navbar need to have submenus
* Make website responsive design
* Make website mobile-friendly
* Add slightly more noise to website (line separators, etc.) (hold of until finish basic design)
* Add many more pages and make design more interesting
### Blogging System
* Blogging system can be controlled by in-house (very basic) CMS
  * Make with NodeJS (running on localhost)
  * Use SQLite to manage users
* CMS has three types of users
  * admins can
    * Add / delete moderators
    * Delete standard users
    * Delete blog posts
    * And below
  * moderators can
    * Add standard users
    * Add blog posts
    * And below
  * standard users can
    * comment on blog posts
    * 'like' other blog posts
* All users must memorize passcode
  * Keep trap of users, comments, etc. If a password is wiped due to an emergency, make sure the blog posts, comments, etc. are not deleted, or will not be deleted on the next build of the blog
* Obviously we can see the local backend for the CMS
  * Use [required reviews for pull requests](https://help.github.com/articles/enabling-required-reviews-for-pull-requests/) so bad modifications don't get merged

### Problems
If you're new to Vue, or conntributing, you may encounter a few errors. I've isolated some of the more common (and uncommong) errors / mishehaviors you may be getting and I've provided a solution. i.e. If the website is not doing what you want, see if your issue matches any below. The first bullet point after a subsection is a snippet of example code that defines or relates to the issue.

#### Scoped CSS / SCSS Styles in Components
* `<style scoped lang="scss">`
* You are changing a Vue component to have scoped slots (where it previously didn't), or removing scoped slots on a component.
* When toggling scoped components, your styles are messing up / not being applied
* Solution: Refresh the page. This has to do with webpack-hot-reload. Sometimes it doesn't update css (you're compiled scss) properties after you toggle if a component is scoped

#### CSS Transitions
* `createTransitions((background-color, color, box-shadow), false, 0.2s, ease-in-out)`
* You are trying to add transitions on a component, but in the process other transitions are being removed
* This has to do with my `createTransitions` scss function
* It's doing the same thing as below, where .element has the color red (not blue)
  ```scss
  .element { color: blue }
  .element { color: red }
  ```
* Solution 1: Remove all `createTransition` calls within your mixins, and put them in your components. That way there are no two `transition` properties for each element (since your mixin will bring an extra `transition` property and cause conflicts)
* Solution 2: Actually fix the issue. Just modifying the `createTransitios` scss function won't change anything. Try looking into [extend](https://css-tricks.com/the-extend-concept/) in scss in combination with mixins / methods / whatever

#### CSS IDs Styling
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
