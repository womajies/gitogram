<template>
  <div class="c-spinner"></div>
</template>

<script>
export default {
  name: 'spinner'
}
</script>

<style scoped lang="scss">
.c-spinner {
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 50%;
    border: 2px solid green;
    border-left-color: transparent;
    background-color: transparent;
    -webkit-animation: load 1.1s infinite linear;
    animation: load 1.1s infinite linear;
}

@-webkit-keyframes load {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
}
@keyframes load {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>
