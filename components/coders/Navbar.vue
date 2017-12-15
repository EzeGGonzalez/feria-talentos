<template>
  <div id="navbar">
    <div class="container">
      <nav class="navbar is-transparent">
        <div class="navbar-brand">
          <nuxt-link to="/" class="navbar-item" title="Ada">
            <img class="logo" src="/logo_blanco.svg" alt="Ada">
          </nuxt-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <nuxt-link class="button is-primary" to="/job">
                  <span>Subir propuesta laboral</span>
                </nuxt-link>
              </p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
