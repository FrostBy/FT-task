Requirements coverage:

1. Tests:
    * Done for app.js and one method in ft.service.js and fs.controller.js to demonstrate the skill.
    * Proper test folders structure
2. Documentation:
    * This one
3. Error handling:
    * Handle errors in a service
    * Send proper error messages to the client and display it
    * Log errors into console (winston + transports can be added)

---

1. Responsive markup
    * Flexbox model (Origami Components grid + custom styles)
2. Accessibility:
    * WAI-ARIA standards (role, aria-label attributes, header and main blocks)
3. 0 client dependencies:
    * SSR from the box
4. Built using JS and Node.js
    * Obviously, the initial codebase has everything to implement the task using basic technologies
5. Origami Components
    * I used the following components to style app: o-colors, o-typography, o-grid, o-message. <br>
      Didn't use grid for the list because it will take time to create a valid grid.
6. Be progressively enhanced
    * I'm not sure what do you mean. <br>
      If scalability (codebase), then we have M(repository)VCS architecture and can scale the codebase. <br>
      We have separate views, SCSS styles, etc. Can add components using NPM.
7. Similar look
    * FT now has different UI, but the app looks like the image from readme.md
8. 3G networks
    * We can add caching, gzip, minify css/js files using webpack (css-minimizer-webpack-plugin, f.e.). Also added
      caching for API requests
    * We can use CDN for static files, the app can be also deployed on clouds to be geo-distributed

---

* The app is configurable via ENV files, can be easy containerized using Docker, have MVCS architecture to divide
  responsibilities and tests.
* Didn't use multiple commits because the task is too short and simple. But could commit: 1st task, 2nd task, tests and
  then push. Or in case of TDD: tests, 1st task, 2nd task.
* Error handling can be improved (add 404 error, refactor the controller f.e.), but I don't want to spend time on it.
* Tests can be improved by setting setup script, adding test.env file

