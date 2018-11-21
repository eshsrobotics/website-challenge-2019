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

### Build for Prod
```bash
$ npm run build
```
<<<<<<< HEAD

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
  * Keep trap of users, comments, etc. even if passwords are wiped due to emergency
* Obviously we can see the local backend for the CMS
  * Use [required reviews for pull requests](https://help.github.com/articles/enabling-required-reviews-for-pull-requests/) so bad modifications don't get merged
=======
>>>>>>> 1600750549cb091694fa0b8b5cde041d91647a34
