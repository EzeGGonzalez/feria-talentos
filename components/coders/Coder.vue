<template>
  <nuxt-link :to="`/coders/${coder._id}`">
      <div class="box text-center depth-1" id="coder">
        <figure class="image is-128x128 m-b-md">
          <img :src="coder.pic.secure_url" :alt="coder.name.first">
        </figure>

        <p class="is-size-5 is-600 m-b-md name">{{coder.name.first}} {{coder.name.last}}</p>

        <div class="columns skills">
          <div class="column">
            <p class="is-size-6 is-capitalized">
              {{$store.state.english[coder.english]}}
            </p>
            <p class="is-size-7 is-600 has-tint">
              ENGLISH
            </p>
          </div>
        </div>
      </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['coder']
}
</script>

<style lang="scss">
#coder {
  figure {
    &.image {
      overflow: hidden;
      border: 1px dashed #2B1C30;
      border-radius: 50%;
      padding: 4px;
    }

    margin-left: auto;
    margin-right: auto;

    img {
      margin-left: auto;
      margin-right: auto;
      height: 100%;
      border-radius: 50%;
    }
  }

  p.name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>

