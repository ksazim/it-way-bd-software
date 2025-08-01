
<template>
    <component :is="$route.meta.layout || 'div'">
        <router-view></router-view>
    </component>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
/* Base Background color: black & #121212 */

html {
  scroll-behavior: smooth;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  scroll-behavior: smooth;
}

body {
  margin: auto;
  scroll-behavior: smooth;
}

.container {
  padding: 0 20px 0;
}

.master-body {
    box-sizing: border-box;
    height: 84vh;
    overflow-y: auto;
    scroll-behavior: smooth;
    /* background-color: #efefef; */
    background-color: #f2f5f7;
}

.flex-between-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.flex-between-start {
  display: flex;
  justify-content: space-between;
  align-items: start;
}

.flex-start-center-10 {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
}

.flex-start-center-4 {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 4px;
}

.flex-end-center-10 {
  display: flex;
    justify-content: end;
    align-items: center;
    gap: 10px;
}

.flex-center-center-10 {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.flex-center-center-5 {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.flex-center-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-start-start-20 {
    display: flex;
    justify-content: start;
    align-items: start;
    gap: 20px;
}

.grid-2-20 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.grid-2 {
    display: grid;
    gap: 2px;
}

.grid-3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.grid-5 {
    display: grid;
    gap: 5px;
}

.grid-10 {
    display: grid;
    gap: 10px;
}

.grid-20 {
    display: grid;
    gap: 20px;
}

.flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.align-center {
  align-items: center;
}

h1, h2, h3, h4, h5, h6, p {
  margin: 0;
}

p {
  /* font-family: 'Lato', sans-serif; */
  font-family: 'Roboto', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  /* font-family: Helvetica, Arial, sans-serif; */
  font-family: 'Merriweather', serif;
}

a {
  color: #0000ff;
  text-decoration: none;
}

a:hover {
  color: #0404e6;
}

.danger {
  color: red;
}

.green {
  color: green;
}

.red {
  color: red;
}

.grid-col-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}

.link-btn-green {
  outline: none;
  border: none;
  text-decoration: none;
  color: white;
  background-color: green;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 15px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.link-btn-green:hover {
  color: white;
  background-color: #029402;
}

.link-btn-blue {
  outline: none;
  border: none;
  text-decoration: none;
  color: white;
  background-color: #1733ad;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 15px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.link-btn-blue:hover {
  color: white;
  background-color: #1b3ac2;
}

.text-bold-blue {
  color: blue;
  font-weight: bold;
  text-decoration: none;
}

.blue {
    color: #0c0cb8;
}

.text-bold-red {
  color: red;
  font-weight: bold;
  text-decoration: none;
}

.text-bold-off-white {
  color: #717171;
  font-weight: bold;
  text-decoration: none;
  transition: 0.1s ease;
}

.text-bold-off-white:hover {
  color: #181818;
}

.not-found {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #c3c3c3;
}

.post-form {
    background-color: white;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid #e1e1e1; 
}

.resp-msg {
  text-align: center;
  margin: 20px 0;
}

.col-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.col-3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0 20px;
}

.text-blue {
  color: #1733ad;
}

.loading {
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: gray;
  /* padding: 20px; */
}

.mb-20 {
  margin-bottom: 20px;
}

.p-20 {
  padding: 20px;
}
@media (max-width: 768px) {
    
}

@media (max-width: 480px) {
  .grid-col-2 {
      grid-template-columns: 1fr;
  }

  .col-3, .col-2 {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .grid-2-20 {
    grid-template-columns: 1fr;
  }

  .master-body {
    padding: 0 20px;
    box-sizing: border-box;
  }
}
</style>
