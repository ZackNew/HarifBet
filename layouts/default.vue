<template>
  <div class="dark:tw-bg-secondary-900">
    <q-layout view="lHh lpr lff">
      <q-header elevated class="tw-bg-secondary-800">
        <Header />
      </q-header>

      <q-page-container>
        <slot />
      </q-page-container>

      <q-footer elevated>
        <Footer />
      </q-footer>
    </q-layout>
  </div>
</template>

<style>
.custom-container {
  max-width: 1800px;
  margin: auto;
}
</style>
