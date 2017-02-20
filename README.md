# Lab-31-34 frontend-auth

## Angular

### entry.js
  - Contains routes utilizing uiRouter to jump from login/signup page to gallery
  - Loads services, components, container

### Front-end components
  - Contains the components for landing page, signup, login. Galleries and photos are in containers and presentation components
#### Containers
  - Containers created for photo and gallery that connect to galleryctrl and photoctrl services respectively
  - Parent elements responsible for populating their respective child (presentation) elements
#### Presenters
  - Gallery-create, gallery-item, gallery-update, photo-item, and photo-upload are all in separate containers.
  - Each serves a single function and is connected to their container.
  - Child-parent relationships among angular items apply.

### Services
  - Three services created to handle site functionality.
  - Auth-service handles signup and login.
  - Gallery-service allows user to create, delete, and edit gallery items.
  - Photo service enables user to upload photos.

### SCSS and Backend
  - SCSS and Backend created using lecture code provided by Duncan.
