# Robotics Website
This is a website coded for the [Robotics Team Website Challenge 2019](https://challenges.robotevents.com/challenge/95).


## Setup :wrench:
```bash
$ git clone --recurse-submodules https://github.com/eshsrobotics/RobotEventsChallengeWebsite2018
$ cd RobotEventsChallengeWebsite2018
$ yarn install
$ yarn run serve
```

### Dev Server
```bash
# Running on port 8080
$ yarn run serve
```

### Build for Prod
```bash
$ yarn run build

# Build and deploy to prod
$ ./deploy.sh
```

## Improvements / Known Issues :car:
### Website
* Improve image abstraction (add transition)
* Fix picture layout breaks with portrait dimensioned picture
* pwa
* add to github button on album page
* update image cover on new album
* eslint ignore infinite-side-bar/
* year disappears on album page refresh

## Maintenance
###  As time continues
Update links on each individual cyberpatriots, frc, vex page to latest photograph collection, album

### Adding photos (general)
* Add photos in the data-base photos archive (is org gh repo)
* Run respective scripts there that build thumbnails for the higher resolution images
* If the photo is niche and does not group well into other photos, drop images in `src/assets/local-image`
  * These images will copy over using CopyWebpackPlugin (config in Vue.config.js) to `dist/local-image`
  * Reference these with <REPONAME>/local-image/img.jpg' if it's in a JSON file. Ex. `WebsiteChallenge2019/local-image/img.jpg`. If you're in some JS file, you can reference it with `@/assets/local-image/img.jpg`

### Adding photos (to album collection)
* Schema for albums at `/photos` found at `src/views/media/photoData.json`; observe and extend upon the existing schema, simple sample shown below 
```json
[
  { 
    "year": "2018-2019",
    "events": [
      {
        "title": "CyberPatriots Competition",
        "image": "https://github.com/eshsrobotics/database-photos/blob/master/2018-2019/cyberpatriots-november-competition/IMG_0898.small.jpg?raw=true",
        "desc": "Participating in the 2018-2019 CyberPatriots round 1 competition",
        "uri": "2018-2019-cyberpatriots-competition-round-1",
        "photosPrefix": "https://github.com/eshsrobotics/database-photos/blob/master/2018-2019/cyberpatriots-november-competition/IMG_0",
        "photosSuffix": ".small.jpg?raw=true",
        "photos": [
          "896",
          "897",
          "898",
          "899",
          "900",
          "901",
          "902",
          "903",
          "904",
          "906"
        ]
      },
      {
        "title": "VEX Competition Prep",
        "image": "https://github.com/eshsrobotics/database-photos/blob/master/2018-2019/vex-competition-prep/vexprep2.small.jpg?raw=true",
        "desc": "Working on the 2018-2019 VEX Robot",
        "uri": "2018-2019-vex-prep-fall",
        "photosPrefix": "https://github.com/eshsrobotics/database-photos/blob/master/2018-2019/vex-competition-prep/",
        "photosSuffix": ".small.jpg?raw=true",
        "photos": [
          "IMG_0907",
          "IMG_0908",
          "vexprep1",
          "vexprep2"
        ]
      }
    ]
  },
  { 
    "year": "2017-2018",
    "events": [
      "..."
    ]
  }
]
```
* `image` is a cover image for that album
* `uri` is the route that shows in the url bar when you navigate to that page. *Always* include year. Make `uri`s as similar as previous ones to maintain continuity
* Note that the Second "VEX Competition Prep" event will generate a page located at `/#/album/2018-2019-vex-prep-fall`
  * Note you can browse through these photos here: [`https://github.com/eshsrobotics/database-photos/tree/master/2018-2019/vex-competition-prep`](https://github.com/eshsrobotics/database-photos/tree/master/2018-2019/vex-competition-prep)
  * Photos are a concatenation of `photosPrefix + photos[i] + photosSuffic`
    * One example of result of concatenation is `https://github.com/eshsrobotics/database-photos/blob/master/2018-2019/vex-competition-prep/IMG_0907.jpg?raw=true`
  * Note that there are four photos in the "VEX Competition Prep" archive and four items in `photos: []`

### Editing this repo's name / changing hosting
* Some `.json` files (such as `sponsorData.json` and others) have the repository name, `WebsiteChallenge2019` hardcoded
* This is because webpack does not seem to resolve '@' (as src (it's a default webpack alias within Vue-cli-3's default webpack config options))
* There's some way to config webpack to resolve this stuff in `.json`, but this is a temporary work around. So change paths in .json file when changing repos name
* if this is hosted somewhere else (in these case you'll have to change publicDir in `vue.config.js`

### Updating Sponsors
When updating sponsors, change `src/views/sponsors/sponsorData.json` to match new sponsors. Use the following schema
```json
{
  "name": "Company Name",
  "image": "https://github.com/eshsrobotics/WebsiteChallenge2019/blob/master/src/assets/local-image/company-image.png?raw=true",
  "imageAltText": "Text shown when image not found",
  "tier": "Tier of Company"
}
```
* Note that `company-image.png` must be placed in `src/local-image`
* You may need to update `src/views/sponsors` if you're adding a new tier. Observe and extend upon the existing structure
* You must also update `<infinite-slide-bar>` components that use the `sponsorData.json`
  * In src/views/Home.vue, update `width` property on `<infinite-slide-bar>` component
  * Update when no sponsor photo overlaps another

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
